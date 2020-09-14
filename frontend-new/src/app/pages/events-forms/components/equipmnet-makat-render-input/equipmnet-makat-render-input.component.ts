import { Component, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  template:`eventEquipments.equipmentMark:{{value.makat}}`
})
export class EquipmnetMakatRenderInputComponent implements ViewCell {
  
  @Input() value: string | number;
  @Input() rowData: any;

  
}
