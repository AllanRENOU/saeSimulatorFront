import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ConfigDto } from '../config-selector/config-dto';
import { ListMessageComponent } from "./listes/list-message/list-message.component";
import { ListTimesComponent } from "./listes/list-times/list-times.component";
import { ListAffectationsComponent } from "./listes/list-affectations/list-affectations.component";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  imports: [ListMessageComponent, ListTimesComponent, ListAffectationsComponent]
})
export class MainPageComponent implements OnInit {
  message: string = '';
  activeComponent: string = 'list-message'; // Composant actif par défaut


  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    // S'abonne à l'événement "temps"
    this.sharedService.tempsEvent$.subscribe((config: ConfigDto) => {
      this.message = `Click temps: ${config.name}`;
    });

    // S'abonne à l'événement "message"
    this.sharedService.messageEvent$.subscribe((config: ConfigDto) => {
      this.message = `Click message: ${config.name}`;
    });

  }
    showComponent(component: string): void {
      this.activeComponent = component; // Change le composant actif
    }
}
