import { Component, OnInit, Input } from '@angular/core';

import { RestApiService } from '../../../../services/rest-api.service';
import { ToastService } from '../../../../services/toast.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  @Input() messages: any[];
  @Input() reference: string;

  primaryUrl = '/msgs/'
  secondaryUrl = '/msg-read/'
  unreadedMessage;
  unreadedMessageAmount: number = 0;

  constructor(private RestApiService: RestApiService, private ToastService:ToastService) {}

  ngOnInit(): void { 
    this.loadData();
    this.unreadedMessage = JSON.parse(localStorage.getItem('unreadedMessages'))
    this.unreadedMessageAmount = this.unreadedMessage[this.reference]
  }

  loadData(){
    this.RestApiService.get(`${this.primaryUrl}${this.reference}`).subscribe(
      (data) => {
        this.messages = data.messages.map( msg => { return JSON.parse(msg); } )
      },
      (error) => { this.ToastService.showToast('fail', 'בעיה בטעינת ההודעות מהשרת', ''); }
    )
  }

  sendMessage(event: any) {
    let msg = {
      text: event.message,
      date: new Date("12/9/2020"),
      type: 'text',
      //files: files,
      user: { 
        name: localStorage.getItem("firstName"),
        //avatar: 'https://i.gifer.com/no.gif',
      },
    }

    let messagesArray = this.messages.map(massage => {return JSON.stringify(massage);})
    messagesArray.push(JSON.stringify(msg));

    if (this.reference) {
      this.RestApiService.put(`${this.primaryUrl}${this.reference}`, {'messages': messagesArray})
        .subscribe(
          data => { this.messages.push(msg); },
          error => { this.ToastService.showToast('fail', 'ההודעה לא נשלחה בהצלחה', ''); }
        )
    }
  }

  isReply(msgSenderName){
    return msgSenderName!=localStorage.getItem('firstName')
  }

  updateMessagesRead(){
    this.RestApiService.put(`${this.secondaryUrl}${this.reference}`, {}).subscribe(
      (data) => {
        this.unreadedMessageAmount = 0;
        this.unreadedMessage[this.reference] = this.unreadedMessageAmount;
        localStorage.setItem("unreadedMessages", JSON.stringify(this.unreadedMessage))
      },
      (error) => { this.ToastService.showToast('fail', 'בעיה בעדכון השרת', ''); }
    )
  }
  
  open() {
    if(this.unreadedMessageAmount > 0) { this.updateMessagesRead() }
    var el = document.getElementById("myDIV");
      if (el.classList.contains('open')) {
		    el.classList.remove("open");
		  } else {
		    el.classList.add("open");
		  }
  }
}