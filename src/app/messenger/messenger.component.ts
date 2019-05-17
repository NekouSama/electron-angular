import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css']
})
export class MessengerComponent implements OnInit {

  texts: Array<string> = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmitMessage(event) {
    this.texts.push(event.target.value);
    event.target.value = '';
  }

}
