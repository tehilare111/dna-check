import { Component, OnInit, Input, ElementRef, ViewChild,HostListener } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { ToastService } from '../../services/toast.service';
import { FieldBoxComponent } from './components/field-box.component';
import { Router } from '@angular/router';

import { Observable } from 'rxjs';
import {componentCanDeactivate}from '../pending-changes-guard.guard';
class ConstantsFields{
  equipmentType: string[];
  materialType: string[];
  equipmentMakat: string[];
  eventStatus: string[];
  rank: string[];
  handlingStatus: string[];
}

@Component({
  selector: 'ngx-constants-fields',
  templateUrl: './constants-fields.component.html',
  styleUrls: ['./constants-fields.component.scss']
})
export class ConstantsFieldsComponent implements OnInit {
  uploadLoading = false
  ConstantsFields: ConstantsFields = new ConstantsFields();

  @ViewChild('eventStatus') eventStatus: FieldBoxComponent;
  @ViewChild('materialType') materialType: FieldBoxComponent;
  @ViewChild('equipmentType') equipmentType: FieldBoxComponent;
  @ViewChild('rank') rank: FieldBoxComponent;
  @ViewChild('handlingStatus') handlingStatus: FieldBoxComponent;
  @ViewChild('equipmentMakat') equipmentMakat: FieldBoxComponent;

  constructor(private RestApiService: RestApiService  ,private ToastService: ToastService) { }

  ngOnInit(): void {
    this.loadData();
  }
  
  loadData(){
    this.uploadLoading = true
    this.RestApiService.getConstatnsFields().subscribe(
      (data: ConstantsFields) => {
        this.ConstantsFields = data;
        let allComponents = {'eventStatus': this.eventStatus, 'materialType': this.materialType, 'equipmentType': this.equipmentType, 'equipmentMakat': this.equipmentMakat, 'rank': this.rank, 'handlingStatus': this.handlingStatus}
        
        for(let [key, value] of Object.entries(allComponents)){
          value.setTable(this.ConstantsFields[key]);
        }
        
        this.uploadLoading = false
      },
      err => {

        this.ConstantsFields = {eventStatus: [], materialType: [], equipmentType:[], equipmentMakat:[], handlingStatus:[], rank:[]};
        this.uploadLoading = false
      } 
    )
  }

  saveData(){
    this.uploadLoading = true
    
    this.ConstantsFields.eventStatus = this.eventStatus.getFieldValue()
    
    this.ConstantsFields.materialType = this.materialType.getFieldValue()
    this.ConstantsFields.equipmentType = this.equipmentType.getFieldValue()
    this.ConstantsFields.rank = this.rank.getFieldValue()
    this.ConstantsFields.handlingStatus = this.handlingStatus.getFieldValue()
    this.ConstantsFields.equipmentMakat = this.equipmentMakat.getFieldValue()
    
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