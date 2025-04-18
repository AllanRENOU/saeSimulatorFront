import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';
import { ConfigDto } from '../models/config-dto';
import { ListMessageComponent } from "./listes/list-message/list-message.component";
import { ListTimesComponent } from "./listes/list-times/list-times.component";
import { ListAffectationsComponent } from "./listes/list-affectations/list-affectations.component";
import { ActiveComponent } from './active-component.enum';
import { ListStoppointComponent } from "./listes/list-stoppoint/list-stoppoint.component";
import { AffectationDto } from '../models/affectation-dto';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  standalone: true,
  imports: [ListMessageComponent, ListTimesComponent, ListAffectationsComponent, ListStoppointComponent]
})
export class MainPageComponent implements OnInit {
  message: string = '';
  activeComponent: ActiveComponent = ActiveComponent.Vide; // Composant actif par défaut
  currentConfig? : ConfigDto;
  currentAffectation? : AffectationDto;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // S'abonne à l'événement "temps"
    this.sharedService.tempsEvent$.subscribe((config: ConfigDto) => {
      this.currentConfig = config;
      this.activeComponent = ActiveComponent.ListStoppoints;
    });

    // S'abonne à l'événement "message"
    this.sharedService.messageEvent$.subscribe((config: ConfigDto) => {
      this.currentConfig = config;
      this.activeComponent = ActiveComponent.ListMessage;
    });

    // S'abonne à l'événement "affectation"
    this.sharedService.affectationEvent$.subscribe((affectation: AffectationDto) => {
      console.log('Affectation sélectionnée :', affectation);
      this.currentAffectation = affectation;
      this.activeComponent = ActiveComponent.ListTimes; // Passe à ListTimes
    });
  }
}
