import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ConfigDto } from '../models/config-dto';
import { AffectationDto } from '../models/affectation-dto';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private tempsEvent = new Subject<ConfigDto>(); // Événement pour "temps"
  private messageEvent = new Subject<ConfigDto>(); // Événement pour "message"
  private affectationEvent = new Subject<AffectationDto>(); // Événement pour les affectations

  // Observables pour s'abonner aux événements
  tempsEvent$ = this.tempsEvent.asObservable();
  messageEvent$ = this.messageEvent.asObservable();
  affectationEvent$ = this.affectationEvent.asObservable();

  // Méthodes pour émettre les événements
  emitTempsEvent(config: ConfigDto): void {
    this.tempsEvent.next(config);
  }

  emitMessageEvent(config: ConfigDto): void {
    this.messageEvent.next(config);
  }

  emitAffectationEvent(affectation: AffectationDto): void {
    this.affectationEvent.next(affectation);
  }
}
