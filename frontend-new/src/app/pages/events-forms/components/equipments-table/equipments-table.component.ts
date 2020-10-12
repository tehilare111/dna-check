import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { LocalDataSource, Cell } from 'ng2-smart-table';
import { EventEquipments, EquipmentReviewTemplate, Form, EventForm } from '../../events-forms.templates';
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
  
  currentRow:any[];
  @Input () equipmentsType:any[];
  @Input () materialsType:any[];
  @Input () units:any[];
  @Input() editStateBlocked:boolean;
  @Input () equipmentArray:any[]
  @Input() form: Form = new Form();
  // equipments=[]

  
  reference1=""

  @Input () reference:any

  count_flag=0
  auth:AuthService=new AuthService()
 
  equipmentsTypeOptions = []  
  
  eventEquipments:EventEquipments=new EventEquipments();
  equipmentType: any;
  source: LocalDataSource
  data_table = [
  ];
  constructor(private router:Router) { 
    
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
    equipmentType: {
      title: 'סוג ציוד/חומר',
      type: 'html',
      filter:'false', 
      editor: {
        type: 'custom',
        component:EquipmentsTypeCustomComponent
      },
    },
    equipmentMark: {
      title: 'סימון ציוד/חומר',
      filter:'false', 
      type:"html",
      editor:{
      type: 'custom',
        component:EquipmentsMarkCustomInputComponent
    },
  },
    equipmentMakat: {
      title: 'מק"ט ציוד/עותק חומר',
      type:"html",
      editor:{
      type: 'custom',
      component:EquipmentsMakatCustomInputComponent
    }
  },
  },
};
settings2 = {
  actions:false,
  add: {
    addButtonContent: '<i class="nb-plus"></i>',
    createButtonContent: '<i class="nb-checkmark"></i>',
    cancelButtonContent: '<i class="nb-close"></i>',
    
  },

  edit: {
  editButtonContent: '<i class="nb-edit"></i>',
  saveButtonContent: '<i class="nb-checkmark"></i>',
  cancelButtonContent: '<i class="nb-close"></i>',
  
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
    component:EquipmentsCustomComponentComponent,
    editable: false
  },
  },    
  equipmentType: {
    title: 'סוג ציוד/חומר',
    type: 'html',
    filter:'false', 
    editor: {
      type: 'custom',
      component:EquipmentsTypeCustomComponent,
      editable: false
    },
  },
  equipmentMark: {
    title: 'סימון ציוד/חומר',
    filter:'false', 
    type:"html",
    editor:{
    type: 'custom',
      component:EquipmentsMarkCustomInputComponent,
      editable: false
  },
},
  equipmentMakat: {
    title: 'מק"ט ציוד/עותק חומר',
    type:"html",
    editor:{
    type: 'custom',
    component:EquipmentsMakatCustomInputComponent,
    editable: false
  }
},
}, 
}



  ngOnInit() {
    console.log("reference:",this.editStateBlocked)
    this.reference1 = this.router.parseUrl(this.router.url).root.children.primary.segments[2].parameters.reference;
    if(this.editStateBlocked||this.auth.checkPermissions(['מנהלן מערכת', 'מדווח אירועים']))
        {

          console.log(this.settings)
          this.settings.actions.add=true
          this.settings.actions.edit=true
          this.settings.actions.delete=true
          this.settings=Object.assign({},this.settings)
         
        }else{
          this.settings.actions.add=false
          this.settings.actions.edit=false
          this.settings.actions.delete=false
          this.settings=Object.assign(this.settings2,this.settings)
        }
        
        

  }
  exisitingFormLoadData(array:any[]){
    console.log(array)
      this.data_table=array
      this.source.load(this.data_table)
  }
  stateBlocked(editStateBlockeds)
  {
    this.editStateBlocked=editStateBlockeds
    if(editStateBlockeds)
        {
          this.settings.actions.add=false
          this.settings.actions.edit=false
          this.settings.actions.delete=false
          this.settings=Object.assign({},this.settings)
        }
        else{
          this.settings.actions.add=true
          this.settings.actions.edit=true
          this.settings.actions.delete=true
          this.settings=Object.assign({},this.settings)
        }
        this.settings=Object.assign({},this.settings)

  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  // onCreateConfirm(event): void {
  //   event.confirm.resolve();
  // }
  

    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false her
}