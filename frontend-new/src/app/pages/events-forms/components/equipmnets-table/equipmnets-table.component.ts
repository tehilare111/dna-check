import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { LocalDataSource, Cell } from 'ng2-smart-table';
import { EventEquipments } from '../../events-forms.templates';
import { RestApiService } from '../../../../services/rest-api.service';
import { ObjectUnsubscribedError } from 'rxjs';
import { EquipmantsCustomComponentComponent } from '../equipmants-custom-component/equipmants-custom-component.component';
import { EquipmnetTypeCustomComponent } from '../equipmnet-type-custom/equipmnet-type-custom.component';
import { EquipmnetMarkCustomInputComponent } from '../equipmnet-mark-custom-input/equipmnet-mark-custom-input.component';
import { EquipmnetMakatCustomInputComponent } from '../equipmnet-makat-custom-input/equipmnet-makat-custom-input.component';
import { EquipmnetMakatRenderInputComponent } from '../equipmnet-makat-render-input/equipmnet-makat-render-input.component';
@Component({
  selector: 'ngx-equipmnets-table',
  templateUrl: './equipmnets-table.component.html',
  styleUrls: ['./equipmnets-table.component.scss'],
})
export class EquipmnetsTableComponent implements OnInit {
  
  // arrayEquipments={"equipment":"hjhkhjk","equipmentType": " kjghjkhk","equipmentMark": "liuhguih ","equipmentMakat": " ;iugiugui"}
  currentRow:any[]
  constans_array=[]
  // results = ["טופל", "טרם טופל"]
  // units = ["מצוב", "מעוף", "מצפן"]
  // ranks = ["סמל", "רבט", "טוראי"]
  // equipmentsType = ["סוג 1", "סוג 2", "סוג 3"]
  // materialsType = ["חומר 1" , "חומר 2", "חומר 3"]
  @Input () equipmentsType:any[]
  @Input () materialsType:any[]
  @Input () units:any[]
  @Input() equipments:any[]
  selected=""
  
  array_fields=[]
  array_equipmentType=[]
  array_materialsType=[]
  count_flag=0
  counts_flag_change=0
  equipments122 = [{"value": "ציוד","title":"ציוד"} , {"value": "חומר פיסי", "title" : "חומר פיסי"}, {"value": "חומר לוגי", "title":"חומר לוגי"}]
  equipmentsTypeOptions = []  
  
  eventEquipments:EventEquipments=new EventEquipments();
  equipmentType: any;

  constructor(private RestApiService:RestApiService) { 
    const data= this.source= new LocalDataSource(this.data_table);}
    settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate:true
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave:true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      equipment: {
        selectMode:"multi",
        title:'ציוד/חומר',
        type: 'text', 
        filter:'False', 
        editor: {
        type: 'custom',
        // config: {
        //   list:this.equipments122 && this.equipments122.map((grp)=>{
        //     return {'value':grp.value,'title':grp.title}
        
        // }),
              
        // },
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
      },
      renderComponent:EquipmnetMakatRenderInputComponent
    },
    },
  };
  source: LocalDataSource
  data_table = [
  ];
  ngOnInit() {
    
    this.source.load(this.data_table)
    // this.get_constas_feilds()
  }
//   onUpdateshorted(select){
//   console.log(select)
//   if(new String(select).valueOf()==new String("ציוד").valueOf()){
   
//     for(let i in this.equipmentsType){
//       if(this.array_equipmentType.length!=3){
//       this.array_equipmentType.push({"value": this.equipmentsType[i],"title": this.equipmentsType[i]})
//     }
//     }
//   }
//   else{
//     if(new String(select).valueOf()==new String('חומר פיסי').valueOf()|| new String(select).valueOf()==new String("חומר לוגי").valueOf()){
    
//       this.count_flag+=1
//       for(let i in this.materialsType){
//         if(this.array_materialsType.length!=3){
//         this.array_materialsType.push({"value": this.materialsType[i],"title": this.materialsType[i]})
//       }
      
//     } 
//   }
// }

//   }
  loadTable(){
    console.log("bar")
  }
  onCreateConfirm(event): void {
    if (window.confirm('Are you sure you want to save?')) {
    event.confirm.resolve()
    // this.settings = Object.assign({},this.settings);
    }
}

  onDeleteConfirm(event): void {
    console.log("Deleting...");

    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
  
  onEditConfirm(event): void {
    console.log("Editing...");
    console.log(event)
    if (window.confirm('Are you sure you want to save?')) {
      event.confirm.resolve(event.newData);
    } else {
      event.confirm.reject();
    }
  }
  // get_constas_feilds() {
  //   // this.constans_array=["equipmentType","rank","materialType","eventStatus"]
  //   // this.RestApiService.getConstansFialdsNotPermissions(this.constans_array).subscribe((data_from_server) => {
  //   //   console.log(data_from_server.data)
  //   //   this.equipmentsType=data_from_server.data.equipmentType
  //   //   this.materialsType=data_from_server.data.materialType
  //   //   // this.results=data_from_server.data.eventStatus
  //   //   this.equipments = [{"name": "ציוד", "list":this.equipmentsType} , {"name": "חומר פיסי", "list" : this.materialsType}, {"name": "חומר לוגי", "list" : this.materialsType}]
  //   // });
   
  //   for(let i in this.equipments){
  //     this.array_fields.push({"value":this.equipments[i]["name"],"title":this.equipments[i]["name"]})
  //   }
  // }
  // formClicked(event) {
  //   console.log("bar",this.selected)
  //   console.log(this.array_equipmentType,this.array_materialsType)
  // }
    // second parameter specifying whether to perform 'AND' or 'OR' search 
    // (meaning all columns should contain search query or at least one)
    // 'AND' by default, so changing to 'OR' by setting false her
}