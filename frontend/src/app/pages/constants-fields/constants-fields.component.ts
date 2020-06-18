import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { RestApiService } from '../../services/rest-api.service';
import { ToastService } from '../../services/toast.service';
import { FieldBoxComponent } from './components/field-box.component';
import { JwtService } from '../../services/jwt.service';
import { Router } from '@angular/router';

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

  constructor(private router:Router,private jwt:JwtService,private RestApiService: RestApiService  ,private ToastService: ToastService) { }

  ngOnInit(): void {
    this.loadData();
  }
  
  loadData(){
    this.uploadLoading = true
    this.jwt.getConstatnsFields().subscribe(
      (data: ConstantsFields) => {
        this.ConstantsFields = data;
        this.uploadLoading = false
        console.log(data)
      },
      err => {

        this.ConstantsFields = {eventStatus: [''], materialType: [''], equipmentType:[''], equipmentMakat:[''], handlingStatus:[''], rank:['']};
        this.ToastService.showToast('fail', 'שגיאה בקריאה מהשרת', '')
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
    
    this.jwt.postConstatnsFields(this.ConstantsFields).subscribe(
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
