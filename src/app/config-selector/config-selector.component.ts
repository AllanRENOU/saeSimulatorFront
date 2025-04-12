import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ConfigDto } from '../models/config-dto';
import { ConfigComponent } from "../config/config.component";

@Component({
  selector: 'app-config-selector',
  templateUrl: './config-selector.component.html',
  styleUrls: ['./config-selector.component.css'],
  imports: [ConfigComponent]
})
export class ConfigSelectorComponent implements OnInit {
  configs: ConfigDto[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getConfigs().subscribe(
      (data) => {
        this.configs = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des configurations :', error);
      }
    );
  }
}
