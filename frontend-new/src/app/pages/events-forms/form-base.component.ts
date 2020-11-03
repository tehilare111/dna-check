import { OnInit, Injector, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { FormGroup } from "@angular/forms";

/* App injector - injects services to all inherited components */
import { AppInjector } from '../../services/app-injector.service';

/* Our app services imports */ 
import { RestApiService } from '../../services/rest-api.service';
import { AuthService } from '../../services/auth.service';

/* Our app fields validators */
import { dateValidator } from "./validation-directives/date.directive";
import { stdFieldValidator } from "./validation-directives/std-field.directive";
import { idValidator } from "./validation-directives/id.directive";
import { makatCopyValidator } from "./validation-directives/makat-copy.directive";
import { markValidator } from "./validation-directives/mark.directive";
import { timeValidator } from "./validation-directives/time.directive";
import { textValidator } from './validation-directives/text.directive';

import { EventStatusBase } from './components/event-status-base.component';
import { EventForm } from './events-forms.templates';

export abstract class FormBaseComponent<FormType extends EventForm, EventStatusType extends EventStatusBase> implements OnInit {
  
  /* Angular and ngx-admin imports */
  protected activatedRoute: ActivatedRoute;
  protected dialogService: NbDialogService;
  protected router: Router;

  /* Our app services imports */ 
  protected RestApiService: RestApiService;
  protected auth: AuthService;

  /* Our app fields validators */
  protected dateValidator = dateValidator;
  protected stdFieldValidator = stdFieldValidator;
  protected idValidator = idValidator;
  protected makatCopyValidator = makatCopyValidator;
  protected markValidator = markValidator;
  protected timeValidator = timeValidator;
  protected textValidator = textValidator;

  /* components value */
  protected form: FormType;
  protected eventFilesFields: string[];
  
  protected directingDialog: ElementRef;
  protected simpleDialog: ElementRef;
  protected eventStatusForm: EventStatusType;

  protected popUpDialogContext: string = '';
  protected formFiles : {'id': string, 'file': File}[] = [];
  protected readonly : boolean = true;
  protected formGroup: FormGroup;
  protected uploadLoading = false;
  protected reference = undefined;
  protected msgs: any[] = [];
  protected formalsUrl: string = '/event-forms/';
  protected draftsUrl: string = '/drafts-event-forms/';
  protected isDraft: boolean; // For a given form, determine if it is a draft or not
  protected drafting: boolean; // Determine whether to save the form or send it


  constructor(){
      this.RestApiService = AppInjector.injector.get(RestApiService);
      this.auth = AppInjector.injector.get(AuthService);
      this.activatedRoute = AppInjector.injector.get(ActivatedRoute);
      this.dialogService = AppInjector.injector.get(NbDialogService);
      this.router = AppInjector.injector.get(Router);
  }

  ngOnInit(){
    // Recieve form data from db according to its reference
    this.reference = this.router.parseUrl(this.router.url).root.children.primary.segments[2].parameters.reference;
    this.isDraft = this.router.parseUrl(this.router.url).root.children.primary.segments[2].parameters.isDraft == 'true';

    if (this.reference){
      this.exisitingFormLoadData(this.reference);
    } else {
      this.readonly = false;
      this.newFormLoadData();
    }
  }

  exisitingFormLoadData(reference: string){
    this.RestApiService.get(`${(this.isDraft)?this.draftsUrl:this.formalsUrl}${reference}`).subscribe((data: FormType) => {
      this.form = data;
      /*if(this.form.editStateBlocked || this.auth.check_permissions(['מנהלן מערכת', 'מדווח אירועים']))
        {
          this.form.editStateBlocked = false 
        }else{
          this.form.editStateBlocked = true
        }*/
        
      });
    // this.get_constas_feilds()
  }

  newFormLoadData() {
    this.RestApiService.getNewEventForm().subscribe((data) => {
      this.form.date = data.datetime
      this.form.reporterName = localStorage.getItem("firstName")
      this.form.reporterUnit = localStorage.getItem("unit")      
    });
  }

  openWithoutBackdropClick(dialog) {
    this.dialogService.open(
      dialog,
      {
        //context: this.formUploadResult.reference,
        closeOnBackdropClick: false,
      });
  }

  checkFieldsValid(){
    /* Each form should have its own fields to be validated */ 
    let fieldsValid = true
    for (const field in this.formGroup.controls){
      if (!this.formGroup.controls[field].valid){
    //  if(field.valid && field.dirty) {
        fieldsValid = false
      }
    }
    return fieldsValid
  }
  printForm() {
    window.print()
  }
  
  updateEditState(){
    this.form.editStateBlocked = !this.form.editStateBlocked;

    this.uploadLoading = true;
    this.openWithoutBackdropClick(this.simpleDialog);

    const formData: FormData = new FormData();
    formData.append('editStateBlocked', (this.form.editStateBlocked).toString())
    
    this.RestApiService.updateExistingEventForm(this.reference, formData)
        .subscribe(
          (data: FormType) => {
            console.log(data);
            this.uploadLoading = false;
            if (data.editStateBlocked){
              this.popUpDialogContext = `האירוע נסגר לעריכה`;
            } else {
              this.popUpDialogContext = `האירוע נפתח לעריכה`;
            }   
          },
          error => { console.log(error); this.uploadLoading = false; this.popUpDialogContext = `אירעה שגיאה בשליחת הטופס ${this.reference}`; })
    return this.form.editStateBlocked
  }

  handleFileUpload(event){
    var target = event.target || event.srcElement || event.currentTarget;
    for (let i = 0; i < target.files.length; i++) {
      let file = target.files[i];
      this.formFiles.push({'id': target.attributes.id.value, 'file': target.files[i]});
    }
  }

  sendEvent(){
    this.drafting = false;
    this.form.editStateBlocked = true;
    this.onSubmit();
    if(this.isDraft){
      this.DeleteFormFromDrafts(this.reference)
    }
    
  }

  saveEvent(){
    this.drafting = true;
    this.onSubmit();
  }

  onSubmit() {
    this.uploadLoading = true
    
    if (!this.drafting && !this.checkFieldsValid()){
      this.uploadLoading = false
      this.popUpDialogContext = `שדה אחד לפחות לא תקין או חסר`;
      this.openWithoutBackdropClick(this.simpleDialog)
    } else {
      this.openWithoutBackdropClick(this.directingDialog);
    this.save();
    }
  }

  DeleteFormFromDrafts(reference){
    this.RestApiService.delete(`${this.draftsUrl}${reference}`)
    .subscribe(
        (data: FormType) => {
          this.uploadLoading = false;
        },
        error => { console.log(error); this.uploadLoading = false; this.popUpDialogContext = `אירעה שגיאה בשליחת הטופס ${reference}`; })
  }

  save() {
    
    this.form = this.eventStatusForm.pushFormFields<FormType>(this.form);

    const formData: FormData = new FormData();

    // insert lostForm to FormData object
    for(let [key, value] of Object.entries(this.form)){
      if (value && ! this.eventFilesFields.includes(key)) { formData.append(key, value); }
    }

    // insert all files to FormData object
    for( let formFile of this.formFiles ){
      formData.append(formFile['id'], formFile['file'], formFile['file'].name);
    }
    
    // If form has a reference we need to check if it's already written in the relevenat DB: Formals or Drafts
    if (this.reference != undefined && ((this.drafting && this.isDraft) || (!this.isDraft))){
      this.RestApiService.put(`${(this.drafting)?this.draftsUrl:this.formalsUrl}${(this.reference)?this.reference:''}`, formData, {headers: {'enctype': 'multipart/form-data'}})
        .subscribe(
          (data: FormType) => {
            this.uploadLoading = false;
            this.reference = data.reference;
            this.popUpDialogContext = `האירוע התעדכן בהצלחה, סימוכין: ${this.reference}`;
          },
          error => { console.log(error); this.uploadLoading = false; this.popUpDialogContext = `אירעה שגיאה בשליחת הטופס ${(this.reference)?this.reference:''}`; })
          
    } else {
      this.RestApiService.post(`${(this.drafting)?this.draftsUrl:this.formalsUrl}${(this.reference)?this.reference:''}`, formData, {headers: {'enctype': 'multipart/form-data'}})
      .subscribe(
        (data: FormType) => {
          this.uploadLoading = false;
          this.reference = data.reference;
          this.popUpDialogContext = `האירוע ${!this.drafting?'נוצר':'נשמר'} בהצלחה, סימוכין: ${this.reference}`;
          
        },
        error => { console.log(error); this.uploadLoading = false; this.popUpDialogContext = `אירעה שגיאה בשליחת הטופס ${(this.reference)?this.reference:''}`; })
    }
  }

  getFileName(fileNameWithPath){
    if (fileNameWithPath) return fileNameWithPath.substring(fileNameWithPath.lastIndexOf('/') + 1)
  }
 
  deleteEventForm(){
    this.uploadLoading = true;
    
    if (JSON.parse(localStorage.getItem('unreadedMessages'))[this.reference] > 0){
      this.openWithoutBackdropClick(this.simpleDialog);    
      this.popUpDialogContext = `טרם המחיקה, ישנן הודעות שאינן נקראו באירוע`;
      this.uploadLoading = false;
    } else{
      this.openWithoutBackdropClick(this.directingDialog);  
      this.RestApiService.delete(`${(this.isDraft)?this.draftsUrl:this.formalsUrl}${this.reference}`)
        .subscribe(
          (data: FormType) => {
            this.uploadLoading = false;
            this.popUpDialogContext = `אירוע עם סימוכין ${this.reference} נמחק`;
          },
          error => { console.log(error); this.uploadLoading = false; this.popUpDialogContext = `אירעה שגיאה בשליחת הטופס ${this.reference}`; })
    }  
  }
}