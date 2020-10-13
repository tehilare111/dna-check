import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

import { RestApiService } from '../../../../services/rest-api.service';
import { ToastService } from '../../../../services/toast.service';


@Component({
  selector: 'ngx-not-read-msgs-col',
  templateUrl: './not-read-msgs-col.component.html',
  styleUrls: ['./not-read-msgs-col.component.scss']
})
export class NotReadMsgsColComponent implements ViewCell, OnInit {

  renderValue;
  url = '/msg-read/'
  reference: string;

  @Input() value: string | number;
  @Input() rowData: any;

  @Output() updateMsgsInControlTable = new EventEmitter<any>();

  constructor(private RestApiService: RestApiService, private ToastService:ToastService) { }

  ngOnInit() {
    const values = this.value.toString().split(';')
    this.reference = values[1];
    const temp = parseInt(values[0]);

    switch(true){
      
      case temp > 0:
        this.renderValue = temp;
        break;
      case temp == -1:
        this.renderValue = '';
        break;
      default:
        this.renderValue = undefined;
        break;
    }
  }

  updateMessagesRead(){
    let unreadedMessages = JSON.parse(localStorage.getItem('unreadedMessages'));

    this.RestApiService.put(`${this.url}${this.reference}`, {}).subscribe(
      (data) => {
        this.renderValue = 0;
        delete unreadedMessages[this.reference];
        localStorage.setItem("unreadedMessages", JSON.stringify(unreadedMessages))
        this.updateMsgsInControlTable.emit({'value': this.renderValue, 'row': this.rowData});
      },
      (error) => { this.ToastService.showToast('fail', 'בעיה בעדכון השרת', ''); }
    )
  }
}