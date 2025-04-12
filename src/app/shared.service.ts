import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ConfigDto } from './config-selector/config-dto';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private tempsEvent = new Subject<ConfigDto>(); // Événement pour "temps"
  private messageEvent = new Subject<ConfigDto>(); // Événement pour "message"

  // Observables pour s'abonner aux événements
  tempsEvent$ = this.tempsEvent.asObservable();
  messageEvent$ = this.messageEvent.asObservable();

  // Méthodes pour émettre les événements
  emitTempsEvent(config: ConfigDto): void {
    this.tempsEvent.next(config);
  }

  emitMessageEvent(config: ConfigDto): void {
    this.messageEvent.next(config);
  }
}
