import { Component, OnInit, Input, ElementRef, ViewChildren,ViewChild,QueryList } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { ToastService } from '../../services/toast.service';
import { FieldBoxComponent } from './components/field-box.component';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import {componentCanDeactivate}from '../pending-changes-guard.guard';
class ConstantsFieldsWithId{
  idOfConstantField: number;
  constantFieldName: string;
  categroryId: number;
  fieldOfCategoryId: number;
  isCategory: boolean;
}
class ConstantsFieldsnew{
  idOfConstantField: number;
  constantFieldName: string;
  categroryId: number;
  fieldOfCategoryId: number;
  isCategory: boolean;
}



@Component({
  selector: 'ngx-constants-fields',
  templateUrl: './constants-fields.component.html',
  styleUrls: ['./constants-fields.component.scss']
})
export class ConstantsFieldsComponent implements OnInit {
  constantFieldCategoryName = ''
  constantFieldCategoryNameHebrew = ''
  uploadLoading = false
  ConstantsFieldsWithId: ConstantsFieldsWithId = new ConstantsFieldsWithId();
  listOfCategories = []

  @ViewChildren(FieldBoxComponent) fieldbox : QueryList<FieldBoxComponent>

  constructor(private RestApiService: RestApiService  ,private ToastService: ToastService) { }
  async putFieldsAfterdelay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>this.putFieldsInTable());
}
  
  putFieldsInTable(){
    let fields = []
    for (var category in this.listOfCategories){
      fields = this.getFieldArrayFromCategory(category);
      this.fieldbox.toArray()[category].setTable(fields);
    }
    
  }
  private getFieldArrayFromCategory(category) {

    let fields = []
    for (var field in this.listOfCategories[category][2]) {
      if(!this.listOfCategories[category][2][field][2])
      fields.push(this.listOfCategories[category][2][field][0]);
    }
    return fields
  }

  ngOnInit(): void {
    this.loadData();
  }
  ngAfterViewInit() {
    this.putFieldsAfterdelay(300);
  }
  getFieldsFromCategoryName(categoryName : string){
    for(let category in this.listOfCategories){
      if(this.listOfCategories[category][1]== categoryName){
        return this.getFieldArrayFromCategory(category);
      }
    }
  }
  addCategory(){
    var jsonData = {"constantFieldCategoryName" : this.constantFieldCategoryName, "constantFieldCategoryNameHebrew" : this.constantFieldCategoryNameHebrew}
     this.RestApiService.addFieldCategoryName(jsonData).subscribe(
      (data_from_server) => {
        this.ToastService.showToast('success', 'נשמר בהצלחה!', '') 
        this.ngOnInit
        this.uploadLoading = false
      },
      err => {
        this.ToastService.showToast('fail', 'לא נשמר בהצלחה!', '')
        this.uploadLoading = false
      }
    )
  }
    
  
  loadData(){
    this.uploadLoading = true
    this.RestApiService.getConstatnsFields().subscribe(
      (data: ConstantsFieldsWithId) => {
        
        this.fillListOfCategoryfromdata(data);
      },
      err => {
      }
    );
    this.uploadLoading = false
  }

  fillListOfCategoryfromdata(data) {
    this.ConstantsFieldsWithId = data;
    for (var tableEntry in this.ConstantsFieldsWithId) {
      if (this.ConstantsFieldsWithId[tableEntry].isCategory) {
        let fieldsOfCategory = [];
        for (var field in this.ConstantsFieldsWithId) {
          if (this.ConstantsFieldsWithId[field].categroryId == this.ConstantsFieldsWithId[tableEntry].idOfConstantField) {
              fieldsOfCategory.push([this.ConstantsFieldsWithId[field].constantFieldName, this.ConstantsFieldsWithId[field].fieldOfCategoryId, this.ConstantsFieldsWithId[field].isDeleted]);
          }
        }
        this.listOfCategories.push([this.ConstantsFieldsWithId[tableEntry].idOfConstantField, this.ConstantsFieldsWithId[tableEntry].constantFieldName, fieldsOfCategory, this.ConstantsFieldsWithId[tableEntry].constantFieldNameHebrew]);
      }
    }
  }
  
}