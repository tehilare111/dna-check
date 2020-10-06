import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { LocalDataSource, Cell } from 'ng2-smart-table';
import { EventEquipments, EquipmentReviewTemplate, Form } from '../../events-forms.templates';
import { RestApiService } from '../../../../services/rest-api.service';
import { ObjectUnsubscribedError } from 'rxjs';
import { EquipmentsCustomComponentComponent } from './equipments-custom-component/equipments-custom-component.component';
import { EquipmentsTypeCustomComponent } from './equipments-type-custom/equipments-type-custom.component';
import { EquipmentsMarkCustomInputComponent } from './equipments-mark-custom-input/equipments-mark-custom-input.component';
import { EquipmentsMakatCustomInputComponent } from './equipments-makat-custom-input/equipments-makat-custom-input.component';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
@Component({
  selector: 'ngx-equipments-table',
  templateUrl: './equipments-table.component.html',
  styleUrls: ['./equipments-table.component.scss'],
})
export class EquipmentsTableComponent implements OnInit {
  
  currentRow:any[]
  @Input () equipmentsType:any[]
  @Input () materialsType:any[]
  @Input () units:any[]
  @Input () equipments:any[]
  @Input() form: Form = new Form();
  flag_true_or_false=true
  selected=""
  reference=""
  count_flag=0
  counts_flag_change=0
  auth:AuthService=new AuthService()
 
  equipmentsTypeOptions = []  
  
  eventEquipments:EventEquipments=new EventEquipments();
  equipmentType: any;

  constructor(private RestApiService:RestApiService,private router:Router) { 
    const data= this.source= new LocalDataSource(this.data_table);}
    settings = {
      actions:{
        add:true,
        edit:true,
        delete:true,     
       
      },
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
        
      },
   
      edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      edit:true
      },

      delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
      delete:true
      },
    
    
    
    columns: {
      equipment: {
        title:'ציוד/חומר',
        type: 'html', 
        filter:'False', 
        editor: {
        type: 'custom',
        component:EquipmentsCustomComponentComponent
      },
      },    
      equipmentstype: {
        title: 'סוג ציוד/חומר',
        type: 'html',
        filter:'false', 
        editor: {
          type: 'custom',
          component:EquipmentsTypeCustomComponent
        },
      },
      equipmentsMark: {
        title: 'סימון ציוד/חומר',
        filter:'false', 
        type:"html",
        editor:{
        type: 'custom',
          component:EquipmentsMarkCustomInputComponent
      },
    },
      equipmentsMakat: {
        title: 'מק"ט ציוד/עותק חומר',
        type:"html",
        editor:{
        type: 'custom',
        component:EquipmentsMakatCustomInputComponent
      }
    },
    },
  };
  source: LocalDataSource
  data_table = [
  ];
  ngOnInit() {
    console.log("reference:",this.router.parseUrl(this.router.url).root.children.primary.segments[2].parameters.reference)
    this.reference = this.router.parseUrl(this.router.url).root.children.primary.segments[2].parameters.reference;
    this.exisitingFormLoadData(this.reference)
    this.source.load(this.data_table)
  }
  exisitingFormLoadData(reference: string){
    this.RestApiService.getExistingEventForm(reference).subscribe((data_from_server: EquipmentReviewTemplate) => {
      this.data_table =data_from_server["equipments"]
      this.source.load(this.data_table)
      console.log("edit block",this.form.editStateBlocked)
      if(this.form.editStateBlocked||this.auth.checkPermissions(['מנהלן מערכת', 'מדווח אירועים']))
        {
          console.log(this.settings)
          this.settings.actions.add=false
          this.settings.actions.edit=false
          this.settings.actions.delete=false
          this.settings=Object.assign({},this.settings)
         
        }else{
          this.settings.actions.edit=true
          this.settings.actions.delete=true
          this.settings=Object.assign({},this.settings)
        }
       
    });
    


  }

  onDeleteConfirm(event): void {
    console.log("Deleting...");

    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  onCreateConfirm(event): void {
    event.confirm.resolve();
  }
  

    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false her
}