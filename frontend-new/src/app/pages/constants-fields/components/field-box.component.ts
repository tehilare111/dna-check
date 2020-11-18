import { Component, OnInit, Input } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import {MatChipInputEvent} from '@angular/material';
import {ENTER} from '@angular/cdk/keycodes';
import { RestApiService } from '../../../services/rest-api.service';
import { ToastService } from '../../../services/toast.service';
import { ConstantsFieldsComponent } from '../../constants-fields/constants-fields.component';

@Component({
  selector: 'ngx-field-box',
  templateUrl: './field-box.component.html',
  styleUrls: ['./field-box.component.scss']
})
export class FieldBoxComponent implements OnInit {
  
  @Input('fieldName') fieldName = '';
  text: string= '';
  fieldOptions = []
  inputFieldOptions = []
  uploadLoading:boolean = false
  source: LocalDataSource = new LocalDataSource();
  readonly separatorKeysCodes: number[] = [ENTER];
  settings = {
    columns: {
      field:{
        title: 'חיפוש',
      }
    },
    hideHeader: true,
    noDataMessage: 'אין ערכים עבור שדה זה',
    actions:{
      add: false,
      position: 'left',
    },
    /*add: {
      addButtonContent: '<i class="nb-edit"></i>',
    },*/
    edit: {
      editButtonContent: '<i class="nb-edit" nbPopover="עריכה תשנה את ערך השדה רטרואקטיבית" nbPopoverMode="hover"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash" nbPopover="מחיקה תסיר את השדה משימוש עתידי, אך לא תשנה את ערכו בטפסים קיימים" nbPopoverMode="hover"></i>',
      confirmDelete: true,
    },
    pager: {
      perPage: 5
    },
  }
  removeDuplicatesFormArray(array){
    var uniqNewFields = new Set(array);
    array = Array.from(uniqNewFields.values())
    return array
  }
  removeFieldIsAlreadyInDatabase(array){
    var arrayWithoutDuplicates  = []
    var elementApears = false
    for(var element in array){
      elementApears = false
      for(var field in this.fieldOptions){
        if(this.fieldOptions[field].field == array[element]){
          window.confirm("this name is already in the database")

          elementApears = true
        }
      }
      if(!elementApears){
        arrayWithoutDuplicates.push(array[element])
      }
    }
    return arrayWithoutDuplicates
  

  }

  constructor(private RestApiService: RestApiService  ,private ToastService: ToastService) { }

  ngOnInit(): void { }

  addFields(){
    this.inputFieldOptions = this.removeDuplicatesFormArray(this.inputFieldOptions)
    this.fieldOptions = this.fieldOptions.concat(this.inputFieldOptions).map(
      el => { 
        if (el.field) return el; 
        
        
        // check if value already exists
        if (!this.fieldOptions.some(f => { return f['field']===el; })){
          return {field: el};
        }
      }
    ).filter(el => el != undefined);
    if(this.inputFieldOptions.length==0){return}
    this.addFieldToDatabase(this.fieldName, this.inputFieldOptions)
    this.reloadFieldOptions();
    this.inputFieldOptions = [];
  }

  addFieldToDatabase(constantFieldGroupName, newFields){
    var uniqNewFields = new Set(newFields);
    newFields = Array.from(uniqNewFields.values())
    var jsonData = {"constantFieldGroupName" : constantFieldGroupName, "newFields" : newFields}
    this.RestApiService.addConstantFields(jsonData).subscribe(
      (data_from_server) => {
        this.ToastService.showToast('success', 'נשמר בהצלחה!', '') 
        this.uploadLoading = false
      },
      err => {
        this.ToastService.showToast('fail', 'לא נשמר בהצלחה!', '')
        this.uploadLoading = false
      }
    )
  }


  reloadFieldOptions(){
    if(this.fieldOptions){
      this.source.load(this.fieldOptions);
    }
  }

  setTable(loadedFields : string[]){
    loadedFields = this.removeDuplicatesFormArray(loadedFields)
    this.fieldOptions = loadedFields.map(el => { return { field: el } });
    this.reloadFieldOptions();
  }

  getFieldValue(){
    return (this.fieldOptions)?this.fieldOptions.map(el => { return el.field } ):[];
  }

  xlDropped(event){
    event.preventDefault();
    var data = event.dataTransfer.getData("text").split('\n');
    data.splice(-1, 1);
    this.inputFieldOptions.push(...data);

    setTimeout(() => {
      this.text = "";
    }, 0);
  }

  onPaste(event){
    let data = (event.clipboardData || event.originalEvent.clipboardData).getData('text').split('\n');
    data.splice(-1, 1);
    this.inputFieldOptions.push(...data);

    setTimeout(() => {
      this.text = "";
    }, 0);
  }
  addToInput(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our field
    if ((value || '').trim()) {
      this.inputFieldOptions.push( value.trim() );
      this.inputFieldOptions = this.removeDuplicatesFormArray(this.inputFieldOptions)
      this.inputFieldOptions = this.removeFieldIsAlreadyInDatabase(this.inputFieldOptions)
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeFromInput(field: string): void {
    const index = this.inputFieldOptions.indexOf(field);

    if (index >= 0) {
      this.inputFieldOptions.splice(index, 1);
    }
  }

  onDeleteConfirm(event){
     if (window.confirm('האם אתה בטוח שברצונך למחוק? מחיקה תסיר את השדה משימוש עתידי, אך לא תשנה את ערכו באירועים קיימים')) {
      this.deleteField(this.fieldName, event.data)
      // Delete item from array
      let index = this.fieldOptions.indexOf(event.data);
      this.fieldOptions.splice(index, 1);

      // Update the local datasource
      this.reloadFieldOptions();
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  deleteField(constantFieldGroupName, fieldToDelete){
    var jsonData = {"constantFieldGroupName" : constantFieldGroupName, "fieldToDelete" : fieldToDelete['field']}
     this.RestApiService.deleteConstantField(jsonData).subscribe(
      (data_from_server) => {
        this.uploadLoading = false
        this.ToastService.showToast('success', 'נשמר בהצלחה!', '')
      },
      err => {
        this.ToastService.showToast('fail', 'לא נשמר בהצלחה!', '')
        this.uploadLoading = false
      }
    )
  }
  onEditConfirm(event) {
    for(var field in this.fieldOptions){
      if(this.fieldOptions[field].field == event.newData['field']){
        this.ToastService.showToast('fail', 'השם כבר קיים במערכת', '') 
        return;
      }
    }
    if (window.confirm('האם אתה בטוח שברצונך לערוך את השדה? עריכה תשנה את ערכו של השדה בכל האירועים, רטרואקטיבית')) {
      this.editField(this.fieldName, event.data, event.newData)
      event.confirm.resolve(event.newData);

    } else {
      event.confirm.reject();
    }
  }

  editField(constantFieldGroupName, previousField, newField){
    var jsonData = {"constantFieldGroupName" : constantFieldGroupName,
     "previousField" : previousField['field'],
     "newField" : newField['field']}
     
     this.RestApiService.editConstantField(jsonData).subscribe(
      (data_from_server) => {
        this.ToastService.showToast('success', 'נשמר בהצלחה!', '') 
        this.uploadLoading = false
      },
      err => {
        this.ToastService.showToast('fail', 'לא נשמר בהצלחה!', '')
        this.uploadLoading = false
      }
    )
  }
}