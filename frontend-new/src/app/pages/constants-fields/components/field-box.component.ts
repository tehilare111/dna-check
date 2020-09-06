import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngx-field-box',
  templateUrl: './field-box.component.html',
  styleUrls: ['./field-box.component.scss']
})
export class FieldBoxComponent implements OnInit {
  
  @Input('fieldOptions') fieldOptions = [];
  @Input('fieldName') fieldName = '';
  currentField;
  uploadLoading:boolean = false
  tmpField:string = ''
  action: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  deleteField(){
    const index: number = this.fieldOptions.indexOf(this.currentField);
    this.fieldOptions.splice(index, 1);
    if(this.fieldOptions.length == 0) this.fieldOptions = []
    this.cancel()
  }

  addField(){
    this.fieldOptions.push(this.tmpField);
    this.cancel()
  }

  editField(){
    const index: number = this.fieldOptions.indexOf(this.currentField);
    this.fieldOptions.splice(index, 1);
    this.fieldOptions.push(this.tmpField);
    this.cancel()
  }

  cancel(){
    this.action = ''
    this.tmpField = ''
    this.currentField = 'שדה'
  }

  getFieldValue(){
    return (this.fieldOptions)?this.fieldOptions.slice():[];
  }

}