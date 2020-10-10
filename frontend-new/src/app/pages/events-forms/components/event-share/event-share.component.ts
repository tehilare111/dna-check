import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ToastService } from '../../../../services/toast.service';

@Component({
  selector: 'event-share',
  templateUrl: './event-share.component.html',
  styleUrls: ['./event-share.component.scss']
})


//usage: <event-share [eventAuthorizers]="eventAuthorizers" [editStateBlocked]="this.form.editStateBlocked" [events]='eventsSubject.asObservable()' (onEventSubmit)="updateEventAuthorizers($event)"></event-share>
// [eventAuthorizers] = Start value for the event authorizers list, used to load the existing event authorizers on a certain event. 
// [editStateBlicked] - The component should be in disable/enable status.
// [events] - The component listen to those events, used when submit button clicked in a form, the component will emit event to - 
// (onEventsSubmit) - that will send the eventAuthorizers to the parent component.

export class EventShareComponent implements OnInit { // Handling EVENT_AUTHORIZER permission add.
  factorId:string;
  private eventsSubscription: Subscription; // Used for listen to parent component event.
  
  @Output() onEventSubmit: EventEmitter<any> = new EventEmitter<any>() // Used for emitting the submit event when requested.

  @Input() editStateBlocked: boolean;
  @Input() events: Observable<void>; // The event the component should listen to.
  @Input() eventAuthorizers: string[];

  constructor( private ToastService:ToastService) {}

  ngOnInit(){
    this.eventsSubscription = this.events.subscribe(() => this.submitFactors()); // subscribing to the parent component event.
    console.log(this.editStateBlocked);
  }
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe(); // unsubscribing to the parent component event.
  }

  // The event emit function.
  public submitFactors(): void {
    this.onEventSubmit.emit(this.eventAuthorizers);
  }

  // Adding approving factors to the list.
  addEventAutorizer(eventAuthorizer:string){
    this.factorId = "";
    if (!this.eventAuthorizers.includes(eventAuthorizer)){
      this.eventAuthorizers.push(eventAuthorizer);
    }
    else{
      this.ToastService.showToast('fail', 'מאשר כבר התווסף', '');
    }
  }

  removeEventAuthorizer(eventAuthorizer: string){
    const index = this.eventAuthorizers.indexOf(eventAuthorizer);
    if (index > -1) {
      this.eventAuthorizers.splice(index, 1);
    }
  }

}
