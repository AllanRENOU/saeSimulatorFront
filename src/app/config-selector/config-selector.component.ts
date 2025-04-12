import { Component } from '@angular/core';
import { ConfigDto } from './config-dto';
import { ConfigComponent } from "../config/config.component";

@Component({
  selector: 'app-config-selector',
  templateUrl: './config-selector.component.html',
  styleUrls: ['./config-selector.component.css'],
  imports: [ConfigComponent]
})
export class ConfigSelectorComponent {
  configs: ConfigDto[] = [
    { name: 'Config 1', host: 'http://localhost:3000' },
    { name: 'Config 2', host: 'http://localhost:4000' },
    { name: 'Config 3', host: 'http://localhost:5000' }
  ];
}
