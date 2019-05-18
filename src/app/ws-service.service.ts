import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer } from 'rxjs';

import * as socketIo from 'socket.io-client';

const SERVER_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class WsServiceService {
  private socket;

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public send(message: string): void {
    this.socket.emit('chat message', message);
  }

  public onMessage(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('chat message', (data: any) => observer.next(data));
    });
  }

  public onEvent(event: any): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }
}
