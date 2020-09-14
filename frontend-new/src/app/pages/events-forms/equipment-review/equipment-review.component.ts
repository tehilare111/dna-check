import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { FormGroup, FormControl } from "@angular/forms";
import { FormBaseComponent } from '../form-base.component'
import { EquipmentReviewTemplate, EventEquipments } from '../events-forms.templates';
import { EventStatusComponent } from '../components/event-status/event-status.component';
import { AuthService } from '../../../services/auth.service';
import { markValidator } from '../validation-directives/mark.directive';
import { makatCopyValidator } from '../validation-directives/makat-copy.directive';
import { textValidator } from '../validation-directives/text.directive';
import { dateValidator } from '../validation-directives/date.directive';
import { EquipmnetsTableComponent } from '../components/equipmnets-table/equipmnets-table.component';
import { Router, ActivatedRoute } from '@angular/router';
import { RestApiService } from '../../../services/rest-api.service';
@Component({
  selector: 'ngx-equipment-review',
  templateUrl: './equipment-review.component.html',
  styleUrls: ['./equipment-review.component.scss']
})
export class EquipmentReviewComponent extends FormBaseComponent<EquipmentReviewTemplate, EventStatusComponent> implements OnInit{
  eventType: string = 'ביקורת ציוד';
  form: EquipmentReviewTemplate = new EquipmentReviewTemplate();
  eventFilesFields: string[] = ['reviewFile'];
  @ViewChild("dialog") dialog : ElementRef;
  @ViewChild("dialog2") dialog2 : ElementRef;
  @ViewChild("status") eventStatusForm : EventStatusComponent;
  @ViewChild("equipmentsTable") equipmentsTable:EquipmnetsTableComponent;

  // @ViewChild("chat") chatMessages : ChatComponent;
  @ViewChild("directingDialog") directingDialog : ElementRef;
  @ViewChild("simpleDialog") simpleDialog : ElementRef;
  
 eventStatusOptions = ["טופל", "טרם טופל"]
  units = []
  ranks = []
  eventEquipments:EventEquipments=new EventEquipments()

  equipmentReview: EquipmentReviewTemplate = new EquipmentReviewTemplate();
  // equipmentsTable:EquipmnetsTableComponent=new EquipmnetsTableComponent();

  uploadLoading = false;

  reference = undefined;
  formFiles : {'id': string, 'file': File}[] = []; 
  readonly : boolean = true;
  popUpDialogContext: string = '';
  constans_array=[]
  baseUrl: string = '';
  array_permission;
  auth:AuthService=new AuthService();
  // select fields options:
  results = ["טופל", "טרם טופל"]
  equipmentsType = ["סוג 1", "סוג 2", "סוג 3"]
  materialsType = ["חומר 1" , "חומר 2", "חומר 3"]

  equipments = [{"name": "ציוד", "list" : this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
  equipmentsTypeOptions = []  
  constructor(private RestApiService: RestApiService, public activatedRoute: ActivatedRoute, private dialogService: NbDialogService, private router: Router) {super()
     this.baseUrl = this.RestApiService.baseUrl} 

  // id of all validation fields
  @ViewChild("signerName") signerName : ElementRef;
  @ViewChild("signerId") signerId : ElementRef;
  @ViewChild("position") position : ElementRef;
  @ViewChild("eventDate") eventDate : ElementRef;
  @ViewChild("eventHour") eventHour : ElementRef;
  @ViewChild("equipmentMark") equipmentMark : ElementRef;
  @ViewChild("equipmentMakat") equipmentMakat : ElementRef;
  @ViewChild("eventRelevantPlacesAndFactors") eventRelevantPlacesAndFactors : ElementRef;
  @ViewChild("eventInitialDetails") eventInitialDetails : ElementRef;
  @ViewChild("investigationDate") investigationDate : ElementRef;
  @ViewChild("findingDate") findingDate : ElementRef;
  @ViewChild("handlingDate") handlingDate : ElementRef;

  formGroupEle: ElementRef[] = [
    this.signerName, 
    this.signerId,
    this.position,
    this.eventDate,
    this.eventHour,
    this.equipmentMark,
    this.equipmentMakat,
    this.eventRelevantPlacesAndFactors,
    this.eventInitialDetails,
    this.investigationDate,
    this.findingDate,
    this.handlingDate
  ] 

  handleFileUpload(event){
    var target = event.target || event.srcElement || event.currentTarget;
    this.formFiles.push({'id': target.attributes.id.value, 'file': target.files.item(0)});
  }

  ngOnInit() {
    // Set eventType field according to the form event type
    this.equipmentReview.eventType = this.eventType
    
    // Recieve form data from db according to its reference
    this.reference = this.activatedRoute.snapshot.params.reference;
    if (this.reference){
      this.exisitingFormLoadData(this.reference);
    } else {
      this.readonly = false;
      this.newFormLoadData();
      this.getConstasFeilds();
    }
    // console.log(this.equipmentsTable.data_table)
  }

  checkPermissions(){
    this.array_permission=["מדווח אירועים","מנהלן מערכת",]
    return this.auth.checkPermissions(this.array_permission)
  }
  checkPermissions_manager()
  {
    this.array_permission=["מנהלן מערכת"]
    return this.auth.checkPermissions(this.array_permission)
  }

  getConstasFeilds() {
    this.RestApiService.getConstansFieldsAndUnitsArray().subscribe((data) => {
      this.equipmentsType = data.equipmentType
      this.ranks = data.rank
      this.materialsType = data.materialType
      this.eventStatusOptions = data.eventStatus
      this.equipments = [{"name": "ציוד", "list":this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
    });
  }
  updateValidationFormGroup(){
    this.formGroup = new FormGroup({
    'equipmentMark': new FormControl(this.form.equipmentMark, [this.markValidator()]),
    'equipmentMakat': new FormControl(this.form.equipmentMakat, [this.makatCopyValidator()]),
    'reviewReference': new FormControl(this.form.reviewReference, [this.textValidator()]),
    'reviewDate': new FormControl(this.form.reviewDate, [this.dateValidator()]),
    })
  }

  exisitingFormLoadData(reference: string){
    this.RestApiService.getExistingEventForm(reference).subscribe((data_from_server: EquipmentReviewTemplate) => {
      this.equipmentReview = data_from_server
    });

  }
  save() {
    const formData: FormData = new FormData();
    let eq=[]
    let datas=this.equipmentsTable.data_table.map(a=>a)
    for(var i in datas){
      console.log(datas[i])
      eq.push("$$",JSON.stringify(datas[i]))
    }
    eq.push("$$")
    this.form = this.eventStatusForm.pushFormFields<EquipmentReviewTemplate>(this.form);

  
    // insert equipmentReview to FormData object
    for(let [key, value] of Object.entries(this.form)){
      if (value && ! this.eventFilesFields.includes(key)) {
        console.log("key: "+key)
        console.log("value: "+value)
        formData.append(key, value); 
        }
    }
    formData.append("equipments",eq.toString())
    // insert all files to FormData object
    for( let formFile of this.formFiles ){
      formData.append(formFile['id'], formFile['file'], formFile['file'].name);
    }
      
    
    console.log(formData.get("equipments"))
    if (this.reference){
      this.RestApiService.updateExistingEventForm(this.reference, formData)
        .subscribe(
          (data: EquipmentReviewTemplate) => {
            this.uploadLoading = false;
            this.reference = data.reference;
            this.popUpDialogContext = `האירוע התעדכן בהצלחה, סימוכין: ${this.reference}`;
          },
          error => console.log(error));
    } else {
      this.RestApiService.createNewEventFormWithFiles(formData)
      .subscribe(
        (data: EquipmentReviewTemplate) => {
          this.uploadLoading = false;
          this.reference = data.reference;
          this.popUpDialogContext = `האירוע נוצר בהצלחה, סימוכין: ${this.reference}`;
        },
        error => console.log(error));
    }
    //this.equipmentReview = new EquipmentReviewTemplate(); // initialize form
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
    let formGroup  = new FormGroup({
    'reviewReference': new FormControl(this.form.reviewReference, [textValidator()]),
    'reviewDate': new FormControl(this.form.reviewDate, [dateValidator()]),

  })
    let fieldsValid = true
    for (const field in formGroup.controls){
      if (!formGroup.controls[field].valid){
    //  if(field.valid && field.dirty) {
        fieldsValid = false
      }
    }
    return fieldsValid

  }

  onSubmit() {
    this.uploadLoading = true
    
    this.updateValidationFormGroup();

    super.onSubmit();
  }
}