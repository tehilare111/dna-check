import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'ngx-form-top-buttons',
  templateUrl: './form-top-buttons.component.html',
  styleUrls: ['./form-top-buttons.component.scss']
})
export class FormTopButtonsComponent implements OnInit {

  @Output() sendEvent = new EventEmitter<any>();
  @Output() printForm = new EventEmitter<any>();
  @Output() saveEvent = new EventEmitter<any>();
  @Output() updateEditState = new EventEmitter<any>();
  @Output() deleteEventForm = new EventEmitter<any>();

  @Input() reference;
  @Input() reporterUnit;
  formIsOnEditState = true
  @Input() isDraft=false;
  constructor(private auth: AuthService) { }

  ngOnInit() {

  }

  checkPermissions(){
    return ((this.auth.check_permissions(['מדווח אירועים']) && localStorage.getItem('unit') == this.reporterUnit) || this.auth.check_permissions(['מנהלן מערכת']))
  }

  sendEventEmtr(){
    this.sendEvent.emit();
  }

  printFormEmtr(){
    this.printForm.emit();
  }

  updateEditStateEmtr(){
    this.updateEditState.emit();
    this.formIsOnEditState = !this.formIsOnEditState
    
  }

  saveEventEmtr(){
    this.saveEvent.emit();
  }
  
  deleteEventFormEmtr(){
    this.deleteEventForm.emit();
  }
}