import { Component, Input } from '@angular/core';
import { ConfigDto } from '../config-selector/config-dto';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent {
  @Input() config!: ConfigDto; // Configuration passée en paramètre
  showButtons: boolean = false; // État pour afficher ou masquer les boutons

  toggleButtons() {
    this.showButtons = !this.showButtons;
  }
}
