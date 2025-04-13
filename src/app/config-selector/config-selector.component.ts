import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ConfigDto } from '../models/config-dto';
import { ConfigComponent } from "../config/config.component";
import { ConfigDialogComponent } from "../config-dialog/config-dialog.component";

@Component({
  selector: 'app-config-selector',
  templateUrl: './config-selector.component.html',
  styleUrls: ['./config-selector.component.css'],
  imports: [ConfigComponent, ConfigDialogComponent]
})
export class ConfigSelectorComponent implements OnInit {
  configs: ConfigDto[] = [];
  showDialog: boolean = false;

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

  onCreateConfig(): void {
    //const newConfig = new ConfigDto('Nouvelle Config', 'http://localhost:3000');
    //this.configs.push(newConfig);
    //console.log('Configuration créée :', newConfig);
    this.showDialog = true; // Ouvre la popup
  }

  onConfigCreated(newConfig: ConfigDto): void {
    this.configs.push(newConfig);
    console.log('Configuration créée :', newConfig);
    this.showDialog = false; // Ferme la popup
  }

  onCloseDialog(): void {
    this.showDialog = false; // Ferme la popup
  }
}
