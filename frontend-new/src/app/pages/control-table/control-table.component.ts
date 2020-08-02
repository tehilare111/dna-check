import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableData } from '../../@core/data/smart-table';

@Component({
  selector: 'ngx-control-table',
  templateUrl: './control-table.component.html',
  styleUrls: ['./control-table.component.scss']
})
export class ControlTableComponent implements OnInit {
  pickedUpEvent = {'name':undefined, 'route': undefined};
  eventsToPickUp = {
    'defaultForms': {
      'name': 'כלל הטפסים',
      'route': undefined,
      'columns': {'reference': {'title': 'סימוכין'}, 'date': {'title': 'תאריך'}, 'reporterName': {'title': 'שם מדווח'}, 'reporterUnit': {'title': 'יחידת מדווח'}, 'eventStatus': {'title': 'סטאטוס אירוע'}} 
    },
    'CorruptionForm': {
      'name': 'השמדת ציוד',
      'route': '/pages/events-forms/corruption-form',
      'columns': {'reference': {'title': 'סימוכין'}, 'reporterUnit': {'title': 'יחידת מדווח'}}
    },
    'LostForm': {
      'name': 'אובדן ציוד',
      'route': '/pages/events-forms/lost-form',
      'columns': {'reference': {'title': 'סימוכין', 'type': 'string'}, 'reporterName': {'title': 'שם מדווח', 'type': 'string'}, 'reporterUnit': {'title': 'יחידת מדווח', 'type': 'string'}}
  },
    'EquipmentReview': {
      'name': 'ביקורת ציוד',
      'route': '/pages/events-forms/equipment-review',
      'columns': {'reference': {'title': 'סימוכין'}, 'date': {'title': 'תאריך'}, 'reporterName': {'title': 'שם מדווח'}, 'reporterUnit': { 'title': 'יחידת מדווח'}}
    },
  }
  settings = {
    actions: false,
    columns: {...this.eventsToPickUp.defaultForms.columns}
  }

  source: LocalDataSource = new LocalDataSource();
  data = [
    {'eventType': 'אובדן', 'reference': '12345', 'date': '12.12.21', 'reporterName': 'עדי בן לולו', 'reporterUnit': 'הנועזים'},
    {'eventType': 'אובדן', 'reference': 'עוד מידע', 'date': 'עוד מידע', 'reporterName': 'עוד מידע', 'reporterUnit': 'עוד מידע'},
    {'eventType': 'אובדן', 'reference': 'עוד מידע', 'date': 'עוד מידע', 'reporterName': 'עוד מידע', 'reporterUnit': 'עוד מידע'},
    {'eventType': 'אובדן', 'reference': 'עוד מידע', 'date': 'עוד מידע', 'reporterName': 'עוד מידע', 'reporterUnit': 'עוד מידע'},
  ];

  constructor(private service: SmartTableData) {
  }

  ngOnInit() {
    this.source.load(this.data);
    // this.loadData('');
  }

  loadTable(value){
    ///this.loadData(value.route?value.name:'');

    this.settings.columns = value.columns;
    // Refresh the table values:
    this.settings = Object.assign({}, this.settings);
  }

  /*loadData(eventType: string) {
    this.RestApiService.getFormsList(eventType).subscribe((data_from_server) => {
      let new_data: TreeNode<FSEntry>[] = data_from_server.map((event) => {
        return {'data': event}
      })
      new_data = new_data.concat(this.data);
      console.log(new_data)
      this.dataSource = this.dataSourceBuilder.create(new_data);
    });
  }*/

  exportToXL(value){
    //this.RestApiService.getXlFile(value.route?value.name:'').subscribe(
      // data => { this.downloadFile(data); },
      // error => { this.ToastService.showToast('fail', 'בעיה בהורדת הקובץ', '') },
    //);
  }

  downloadFile(data) {
    var blob = new Blob([data], { type: 'text/csv' });
    var url = window.URL.createObjectURL(blob);
    var anchor = document.createElement("a");
    anchor.download = "סיכום טבלת שליטה.csv";
    anchor.href = url;
    anchor.click();
  }

}
