import { Component, OnInit, Input, ElementRef, ViewChildren,ViewChild,QueryList } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { ToastService } from '../../services/toast.service';
import { FieldBoxComponent } from './components/field-box.component';
import { Router } from '@angular/router';

class ConstantsFields{
  equipmentType: string[];
  materialType: string[];
  equipmentMakat: string[];
  eventStatus: string[];
  rank: string[];
  handlingStatus: string[];
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
  uploadLoading = false
  ConstantsFields: ConstantsFields = new ConstantsFields();
  ConstantsFieldsnew: ConstantsFieldsnew = new ConstantsFieldsnew();
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
      this.fieldbox._results[category].setTable(fields)
    }
    
  }
  private getFieldArrayFromCategory(category) {

    let fields = []
    for (var field in this.listOfCategories[category][2]) {
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
  
  loadData(){
    this.uploadLoading = true
    //this.rank.setTable([])
    this.RestApiService.getConstatnsFields().subscribe(
      (data: ConstantsFieldsnew) => {
        
        this.fillListOfCategoryfromdata(data);
      },
      err => {
      }
    );
    this.ConstantsFields = {eventStatus: [], materialType: [], equipmentType:[], equipmentMakat:[], handlingStatus:[], rank:[]};
    this.uploadLoading = false
  }

  fillListOfCategoryfromdata(data) {
    this.ConstantsFieldsnew = data;
    for (var tableEntry in this.ConstantsFieldsnew) {
      if (this.ConstantsFieldsnew[tableEntry].isCategory) {
        let fieldsOfCategory = [];
        for (var field in this.ConstantsFieldsnew) {
          if (this.ConstantsFieldsnew[field].categroryId == this.ConstantsFieldsnew[tableEntry].idOfConstantField) {
            fieldsOfCategory.push([this.ConstantsFieldsnew[field].constantFieldName, this.ConstantsFieldsnew[field].fieldOfCategoryId]);
          }
        }
        this.listOfCategories.push([this.ConstantsFieldsnew[tableEntry].idOfConstantField, this.ConstantsFieldsnew[tableEntry].constantFieldName, fieldsOfCategory]);
      }
    }
  }

  saveData(){
    this.uploadLoading = true    
    this.RestApiService.postConstatnsFields(this.ConstantsFields).subscribe(
      (data_from_server: ConstantsFields) => {
        if(data_from_server) { this.ToastService.showToast('success', 'נשמר בהצלחה!', '') }
        this.uploadLoading = false
      },
      err => {
        this.ToastService.showToast('fail', 'לא נשמר בהצלחה!', '')
        this.uploadLoading = false
      }
    )
  }
}