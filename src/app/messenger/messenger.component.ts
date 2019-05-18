import { Component, OnInit } from '@angular/core';
import { MessageModel } from './models/message.model';
import { WsServiceService } from '../ws-service.service';
import { Action, Event } from './models/client-enum';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {
  action = Action;
  user: string;
  messages: Array<string> = [];
  messageContent: string;
  ioConnection: any;

  constructor(private wsService: WsServiceService) {}

  ngOnInit() {
    this.initIoConnection();
  }

  onSubmitMessage(event) {
    const newMessage = {
      author: 'NekouSama',
      text: event.target.value
    };

    this.sendMessage(newMessage.text);

    //this.messages.push(newMessage);
    event.target.value = '';
  }

  private initIoConnection(): void {
    this.wsService.initSocket();

    this.ioConnection = this.wsService.onMessage().subscribe((message: string) => {
      this.messages.push(message);
    });

    this.wsService.onEvent(Event.CONNECT).subscribe(() => {
      console.log('connected');
    });

    this.wsService.onEvent(Event.DISCONNECT).subscribe(() => {
      console.log('disconnected');
    });
  }

  public sendMessage(message: string): void {
    if (!message) {
      return;
    }

    this.wsService.send(message);
    this.messageContent = null;
  }
}
