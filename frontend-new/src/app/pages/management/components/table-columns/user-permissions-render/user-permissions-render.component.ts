import { Component, OnInit, Input } from '@angular/core';
import {ViewCell} from 'ng2-smart-table';

@Component({
  selector: 'ngx-user-permissions-render',
  templateUrl: './user-permissions-render.component.html',
  styleUrls: ['./user-permissions-render.component.scss']
})
export class UserPermissionsRenderComponent implements ViewCell, OnInit {
  renderValue: string;

  @Input() value: string| number;
  @Input() rowData: any;

  ngOnInit() {
    this.renderValue = this.value.toString();
  }

}
