import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigSelectorComponent } from "./config-selector/config-selector.component";
import { MainPageComponent } from "./main-page/main-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConfigSelectorComponent, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'saeSimulator';
}
