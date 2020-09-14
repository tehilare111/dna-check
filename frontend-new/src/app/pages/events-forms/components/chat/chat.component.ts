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

  url = '/msgs/'

  constructor(private RestApiService: RestApiService, private ToastService:ToastService) {}

  ngOnInit(): void { this.loadData() }

  loadData(){
    this.RestApiService.get(`${this.url}${this.reference}`).subscribe(
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
      this.RestApiService.put(`${this.url}${this.reference}`, {'messages': messagesArray})
        .subscribe(
          data => { this.messages.push(msg); },
          error => { this.ToastService.showToast('fail', 'ההודעה לא נשלחה בהצלחה', ''); }
        )
    }
  }

  isReply(msgSenderName){
    return msgSenderName!=localStorage.getItem('firstName')
  }


  /*$(function() {
    $("#test").focus();
  });*/
  
  open() {
    var x = document.getElementById("myDIV");
      if (x.classList.contains('open')) {
		    x.classList.remove("open");
		  } else {
		    x.classList.add("open");
		    document.getElementById("test").focus();
		  }
  }
}
