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
  @Input () reference:any
  // equipments=[]

  reference1=""



  count_flag=0
  auth:AuthService=new AuthService()
 
  equipmentsTypeOptions = []  
  
  eventEquipments:EventEquipments=new EventEquipments();
  equipmentType: any;
  source: LocalDataSource
  data_table = [
  ];
  
  settings = {
    hideSubHeader: false,
    actions: {
      add:true,
      edit:true,
      delete:true
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
      filter:true, 
      editor: {
      type: 'custom',
      component:EquipmentsCustomComponentComponent
    },
    },    
    equipmentType: {
      title: 'סוג ציוד/חומר',
      type: 'html',
      filter:true, 
      editor: {
        type: 'custom',
        component:EquipmentsTypeCustomComponent
      },
    },
    equipmentMark: {
      title: 'סימון ציוד/חומר',
      filter:true, 
      type:"html",
      editor:{
      type: 'custom',
        component:EquipmentsMarkCustomInputComponent
    },
  },
    equipmentMakat: {
      title: 'מק"ט ציוד/עותק חומר',
      type:"html",
      filter:true,
      editor:{
      type: 'custom',
      component:EquipmentsMakatCustomInputComponent
    }
  },
},
};

settings2 = {
  hideSubHeader: true,
  actions:{
    add:false,
    edit:false,
    delete:false,
  },
 
columns: {
  equipment: {
    title:'ציוד/חומר',
    type: 'html', 
    filter:true, 
    editor: {
    type: 'custom',
    component:EquipmentsCustomComponentComponent,
  },
  },    
  equipmentType: {
    title: 'סוג ציוד/חומר',
    type: 'html',
    filter:true, 
    editor: {
      type: 'custom',
      component:EquipmentsTypeCustomComponent,
    },
  },
  equipmentMark: {
    title: 'סימון ציוד/חומר',
    filter:true, 
    type:"html",
    editor:{
    type: 'custom',
      component:EquipmentsMarkCustomInputComponent,
  },
},
  equipmentMakat: {
    title: 'מק"ט ציוד/עותק חומר',
    type:"html",
    filter:true, 
    editor:{
    type: 'custom',
    component:EquipmentsMakatCustomInputComponent,
    editable: false
  }
},
}, 
}

constructor(private router:Router) {
  this.source = new LocalDataSource(this.data_table);
 }

  ngOnInit() {
    console.log("editStateBlocked",this.editStateBlocked)
    console.log("editStateBlocked form",this.form.editStateBlocked)
    this.source = new LocalDataSource(this.data_table);
    this.reference1 = this.router.parseUrl(this.router.url).root.children.primary.segments[2].parameters.reference;
    // if(!this.editStateBlocked||this.auth.checkPermissions(['מנהלן מערכת', 'מדווח אירועים']))
    //     {
    //       this.settings.hideSubHeader=true
    //       this.settings.actions.add=false
    //       this.settings.actions.edit=false
    //       this.settings.actions.delete=false
    //       this.settings=Object.assign({},this.settings)
         
    //     }else{
    //       this.settings.hideSubHeader=false
    //       this.settings.actions.add=true
    //       this.settings.actions.edit=true
    //       this.settings.actions.delete=true
    //       this.settings=Object.assign({},this.settings);
         
    //     }
        
        

  }
  exisitingFormLoadData(array:any[]){
      this.data_table=array
      this.source.load(this.data_table)
  }
  stateBlocked(editStateBlockeds)
  { 
    
    if(editStateBlockeds)
      {
        this.editStateBlocked=editStateBlockeds
        this.ngOnInit()
      }
    else{
        this.ngOnInit()
        }
    

  }
  returnStatBlock(){
    console.log(this.form.editStateBlocked)
    return this.editStateBlocked
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}