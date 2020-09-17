import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { LocalDataSource, Cell } from 'ng2-smart-table';
import { EventEquipments, EquipmentReviewTemplate } from '../../events-forms.templates';
import { RestApiService } from '../../../../services/rest-api.service';
import { ObjectUnsubscribedError } from 'rxjs';
import { EquipmantsCustomComponentComponent } from '../equipmants-custom-component/equipmants-custom-component.component';
import { EquipmnetTypeCustomComponent } from '../equipmnet-type-custom/equipmnet-type-custom.component';
import { EquipmnetMarkCustomInputComponent } from '../equipmnet-mark-custom-input/equipmnet-mark-custom-input.component';
import { EquipmnetMakatCustomInputComponent } from '../equipmnet-makat-custom-input/equipmnet-makat-custom-input.component';
import { EquipmnetMakatRenderInputComponent } from '../equipmnet-makat-render-input/equipmnet-makat-render-input.component';
import { Router } from '@angular/router';
@Component({
  selector: 'ngx-equipmnets-table',
  templateUrl: './equipmnets-table.component.html',
  styleUrls: ['./equipmnets-table.component.scss'],
})
export class EquipmnetsTableComponent implements OnInit {
  
  currentRow:any[]
  @Input () equipmentsType:any[]
  @Input () materialsType:any[]
  @Input () units:any[]
  @Input() equipments:any[]
  @Input() disable:any
  selected=""
  reference=""
  count_flag=0
  counts_flag_change=0

  equipmentsTypeOptions = []  
  
  eventEquipments:EventEquipments=new EventEquipments();
  equipmentType: any;

  constructor(private RestApiService:RestApiService,private router:Router) { 
    const data= this.source= new LocalDataSource(this.data_table);}
    settings = {
    actions:{
      add:this.disable,
      edit:this.disable,
      delete:this.disable,
    },
    add:{
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
    },
    
    columns: {
     
      equipment: {
        selectMode:"multi",
        title:'ציוד/חומר',
        type: 'html', 
        filter:'False', 
        editor: {
        type: 'custom',
        component:EquipmantsCustomComponentComponent
      },
      },    
      equipmentType: {
        title: 'סוג ציוד/חומר',
        type: 'html',
        filter:'false', 
        editor: {
          type: 'custom',
          component:EquipmnetTypeCustomComponent
        },
      },
      equipmentMark: {
        title: 'סימון ציוד/חומר',
        filter:'false', 
        type:"html",
        editor:{
        type: 'custom',
          component:EquipmnetMarkCustomInputComponent
      },
    },
      equipmentMakat: {
        title: 'מק"ט ציוד/עותק חומר',
        type:"html",
        editor:{
        type: 'custom',
        component:EquipmnetMakatCustomInputComponent
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
    console.log(this.disable)
  }
  loadTable(){
    console.log("bar")
  }
  exisitingFormLoadData(reference: string){
    this.RestApiService.getExistingEventForm(reference).subscribe((data_from_server: EquipmentReviewTemplate) => {
      this.data_table =data_from_server["equipments"]
      this.source.load(this.data_table)
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
  

    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false her
}