import { Component, OnInit, Input } from '@angular/core';
import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder, NbComponentStatus } from '@nebular/theme';
import { Observable } from 'rxjs';

//import { Customer } from '../events-forms.templates';
import { CustomerService } from '../../../services/rest-api.service';

interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

interface FSEntry {
  eventType: string;
  reference: string;
  date: string;
  reporterName: string;
  reporterUnit: string;
  items?: number;
}

@Component({
  selector: 'ngx-control-table',
  templateUrl: './control-table.component.html',
  styleUrls: ['./control-table.component.scss'],
  providers: [
    NbTreeGridDataSourceBuilder,
  ]
})
export class ControlTableComponent implements OnInit{

  customColumn = 'eventType';
  customColumn2 = 'סוג האירוע'
  // columns keys to read from json and its name in hebrew to display in the table
  columns = {'reference': 'סימוכין', 'date': 'תאריך', 'reporterName': 'שם מדווח', 'reporterUnit': 'יחידת מדווח'};
  allColumns = [ this.customColumn, ...Object.keys(this.columns) ];

  dataSource: NbTreeGridDataSource<FSEntry>;

  sortColumn: string;
  sortDirection: NbSortDirection = NbSortDirection.NONE;

  constructor(private dataSourceBuilder: NbTreeGridDataSourceBuilder<FSEntry>, private customerService: CustomerService) {
    //this.dataSource = this.dataSourceBuilder.create(this.data);
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.customerService.getCustomersList().subscribe((data_from_server) => {
      let new_data: TreeNode<FSEntry>[] = data_from_server.map((event) => {
        return {'data': event}
      })
      new_data = new_data.concat(this.data);
      console.log(new_data)
      this.dataSource = this.dataSourceBuilder.create(new_data);
    });
  }

  updateSort(sortRequest: NbSortRequest): void {
    this.sortColumn = sortRequest.column;
    this.sortDirection = sortRequest.direction;
  }

  getSortDirection(column: string): NbSortDirection {
    if (this.sortColumn === column) {
      return this.sortDirection;
    }
    return NbSortDirection.NONE;
  }

  private data: TreeNode<FSEntry>[] = [
    {
      data: {'eventType': 'אובדן', 'reference': '12345', 'date': '12.12.21', 'reporterName': 'עדי בן לולו', 'reporterUnit': 'הנועזים'},
      children: [
        { data: {'eventType': 'אובדן', 'reference': 'עוד מידע', 'date': 'עוד מידע', 'reporterName': 'עוד מידע', 'reporterUnit': 'עוד מידע'} },
        { data: {'eventType': 'אובדן', 'reference': 'עוד מידע', 'date': 'עוד מידע', 'reporterName': 'עוד מידע', 'reporterUnit': 'עוד מידע'} },
      ],
    },
    {
      data: {'eventType': 'אובדן', 'reference': 'עוד מידע', 'date': 'עוד מידע', 'reporterName': 'עוד מידע', 'reporterUnit': 'עוד מידע'},
    }
  ];

  getShowOn(index: number) {
    const minWithForMultipleColumns = 400;
    const nextColumnStep = 100;
    return minWithForMultipleColumns + (nextColumnStep * index);
  }

}

@Component({
  selector: 'ngx-fs-icon',
  template: `
    <nb-tree-grid-row-toggle [expanded]="expanded" *ngIf="isDir(); else fileIcon">
    </nb-tree-grid-row-toggle>
    <ng-template #fileIcon>
      <nb-icon icon="file-text-outline"></nb-icon>
    </ng-template>
  `,
})
export class FsIconComponent {
  @Input() kind: string;
  @Input() expanded: boolean;

  isDir(): boolean {
    return this.kind === 'dir';
  }
}