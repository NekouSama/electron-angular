import { Injectable, Inject, Type } from '@angular/core';
import { WEBSOCKET, WEBSTOMP } from './app.tokens';
import { Observable, Observer } from 'rxjs';
import { Client, Subscription } from 'webstomp-client';

@Injectable({
  providedIn: 'root'
})
export class WsServiceService {

  constructor(@Inject(WEBSOCKET) private WebSocket: Type<WebSocket>, @Inject(WEBSTOMP) private Webstomp: any) { }

  connect<T>(channel: string): Observable<T> {
    return new Observable((observer: Observer<T>) => {
      const connection: WebSocket = new this.WebSocket(`ws://achex.ca:4010`);
      const stompClient: Client = this.Webstomp.over(connection);
      let subscription: Subscription;
      stompClient.connect({ login: null, passcode: null }, () => {
        subscription = stompClient.subscribe(channel, message => {
          const bodyAsJson = JSON.parse(message.body);
          observer.next(bodyAsJson);
        });
      }, error => observer.error(error));
      return () => {
        if (subscription) {
          subscription.unsubscribe();
        }
        connection.close();
      };
    });
  }
}
