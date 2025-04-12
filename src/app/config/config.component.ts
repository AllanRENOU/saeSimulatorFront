import { Component, Input } from '@angular/core';
import { ConfigDto } from '../models/config-dto';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {
  @Input() config!: ConfigDto; // Configuration passée en paramètre
  showButtons: boolean = false; // État pour afficher ou masquer les boutons

  constructor(private sharedService: SharedService) {}

  toggleButtons() {
    this.showButtons = !this.showButtons;
  }

  onTempsClick() {
    this.sharedService.emitTempsEvent(this.config); // Émet l'événement "temps"
  }

  onMessageClick() {
    this.sharedService.emitMessageEvent(this.config); // Émet l'événement "message"
  }
}
