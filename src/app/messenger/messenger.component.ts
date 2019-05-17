import { Component, OnInit } from '@angular/core';
import { MessageModel } from './models/message.model';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  messages: Array<MessageModel> = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmitMessage(event) {
    const newMessage = {
      author: 'NekouSama',
      text: event.target.value
    };
    this.messages.push(newMessage);
    event.target.value = '';
  }

}
