import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

/*@Component({
  template: `
    {{renderValue}}
  `,
})*/
@Component({
  selector: 'ngx-not-read-msgs-col',
  templateUrl: './not-read-msgs-col.component.html',
  styleUrls: ['./not-read-msgs-col.component.scss']
})
export class NotReadMsgsColComponent implements ViewCell, OnInit {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;

  constructor() { }

  ngOnInit() {
    const v = this.value.toString().toUpperCase();
    this.renderValue = (v > 0) ? v : ' - ';
  }
}