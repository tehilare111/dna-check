import { Component, OnInit, Input } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import {MatChipInputEvent} from '@angular/material';
import {ENTER} from '@angular/cdk/keycodes';

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
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash" nbPopover="מחיקה תסיר את השדה משימוש עתידי, אך לא תשנה את ערכו בטפסים קיימים" nbPopoverMode="hover"></i>',
      confirmDelete: true,
    },
    pager: {
      perPage: 5
    },
  }

  constructor() {  }

  ngOnInit(): void { }

  addFields(){
    this.fieldOptions = this.fieldOptions.concat(this.inputFieldOptions).map(
      el => { 
        if (el.field) return el; 
        
        
        // check if value already exists
        if (!this.fieldOptions.some(f => { return f['field']===el; })){
          return {field: el};
        }
      }
    ).filter(el => el != undefined);
    
    this.reloadFieldOptions();
    this.inputFieldOptions = [];
  }

  reloadFieldOptions(){
    if(this.fieldOptions){
      this.source.load(this.fieldOptions);
    }
  }

  setTable(loadedFields: []){
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
    // Delete item from array
    let index = this.fieldOptions.indexOf(event.data);
    this.fieldOptions.splice(index, 1);

    // Update the local datasource
    this.reloadFieldOptions();
  }
}