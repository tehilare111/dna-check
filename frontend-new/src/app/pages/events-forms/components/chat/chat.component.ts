import { Component, OnInit, Input } from '@angular/core';

import { RestApiService } from '../../../../services/rest-api.service';
// import { ToastService } from '../../../../services/toast.service';
import { ChatService } from './chat.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ ChatService ],
})
export class ChatComponent implements OnInit {

  @Input() messages: any[];
  @Input() reference: string;

  constructor(private RestApiService: RestApiService) {}

  ngOnInit(): void {}

  sendMessage(event: any) {
    let msg = {
      text: event.message,
      date: new Date(),
      reply: false,
      type: 'text',
      //files: files,
      user: {
        name: 'ישראל ישראלי',
        //avatar: 'https://i.gifer.com/no.gif',
      },
    }

    const formData: FormData = new FormData();
    let messagesArray = this.messages.map(massage => {return JSON.stringify(massage);})

    for(let m of messagesArray){
      formData.append('messages', m);
    }

    formData.append('messages', JSON.stringify(msg));

    if (this.reference) {
      this.RestApiService.updateExistingEventForm(this.reference, formData)
        .subscribe(
          data => { this.messages.push(msg); },
          error => {}
          // { this.ToastService.showToast('fail', 'ההודעה לא נשלחה בהצלחה', ''); }
        )
    }
  }
}
