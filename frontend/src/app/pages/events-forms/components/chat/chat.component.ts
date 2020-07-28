import { Component, OnInit, Input } from '@angular/core';
import { RestApiService } from '../../../../services/rest-api.service';
import { ToastService } from '../../../../services/toast.service';
import { ChatService } from './chat.service';
import { messages } from './messages';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  providers: [ ChatService ],

})
export class ChatComponent implements OnInit {
  
  //@Input() messages: any[] = [];
  messages: any[];

  constructor(protected chatService: ChatService) {
    this.messages = this.chatService.loadMessages();
    //if (!this.messages) { this.messages = []; }
  }

  ngOnInit(){
    //if (!this.messages) { this.messages = []; }
  }

  sendMessage(event: any) {
    const files = !event.files ? [] : event.files.map((file) => {
      return {
        url: file.src,
        type: file.type,
        icon: 'nb-compose',
      };
    });
    this.messages.push({
      text: event.message,
      date: new Date(),
      reply: false,
      type: files.length ? 'file' : 'text',
      files: files,

      user: {
        name: 'ישראל ישראלי',
        //avatar: 'https://i.gifer.com/no.gif',
      },

    //const botReply = this.chatService.reply(event.message);
    //if (botReply) {
    //  setTimeout(() => { this.messages.push(botReply); }, 500);
    //}
  })
}
}
