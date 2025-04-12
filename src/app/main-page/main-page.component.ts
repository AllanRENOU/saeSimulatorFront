import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ConfigDto } from '../config-selector/config-dto';
import { ListMessageComponent } from "./listes/list-message/list-message.component";
import { ListTimesComponent } from "./listes/list-times/list-times.component";
import { ListAffectationsComponent } from "./listes/list-affectations/list-affectations.component";
import { ActiveComponent } from './active-component.enum'; // Import de l'enum

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  imports: [ListMessageComponent, ListTimesComponent, ListAffectationsComponent]
})
export class MainPageComponent implements OnInit {
  message: string = '';
  activeComponent: ActiveComponent = ActiveComponent.Vide; // Composant actif par défaut
  currentConfig? : ConfigDto;

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // S'abonne à l'événement "temps"
    this.sharedService.tempsEvent$.subscribe((config: ConfigDto) => {
      this.activeComponent = ActiveComponent.ListAffectations; 
      this.currentConfig = config;
    });

    // S'abonne à l'événement "message"
    this.sharedService.messageEvent$.subscribe((config: ConfigDto) => {
      this.activeComponent = ActiveComponent.ListMessage; 
      this.currentConfig = config;
    });
  }
}
