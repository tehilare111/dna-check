import { Component, OnInit, Input } from '@angular/core';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-field-box',
  templateUrl: './field-box.component.html',
  styleUrls: ['./field-box.component.scss']
})
export class FieldBoxComponent implements OnInit {
  
  @Input('fieldOptions') fieldOptions = [''];
  @Input('fieldName') fieldName = '';
  currentField = this.fieldOptions[0]
  uploadLoading:boolean = false
  tmpField:string = ''
  action: string = ''

  constructor(iconsLibrary: NbIconLibraries) {
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' }); 
  }

  ngOnInit(): void {
  }

  deleteField(){
    const index: number = this.fieldOptions.indexOf(this.currentField);
    this.fieldOptions.splice(index, 1);
    this.cancel()
  }

  addField(){
    this.fieldOptions.push(this.tmpField);
    this.cancel()
  }

  editField(){
    const index: number = this.fieldOptions.indexOf(this.currentField);
    this.fieldOptions.splice(index, 1);
    console.log('currentField', this.currentField, ' ;fieldOptions: ', this.fieldOptions)
    console.log(this.tmpField)
    this.fieldOptions.push(this.tmpField);
    this.cancel()
  }

  cancel(){
    this.action = ''
    this.tmpField = ''
    this.currentField = ''
  }

  getFieldValue(){
    return (this.fieldOptions)?this.fieldOptions.slice():[];
  }

}
