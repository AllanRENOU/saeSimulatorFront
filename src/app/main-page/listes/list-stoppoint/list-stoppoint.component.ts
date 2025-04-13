import { Component, Input } from '@angular/core';
import { ConfigDto } from '../../../models/config-dto';
import { StoppointnDto } from '../../../models/stoppoint-dto';
import { DataService } from '../../../services/data.service';
import { StoppointComponent } from "./stoppoint/stoppoint.component";

@Component({
  selector: 'app-list-stoppoint',
  imports: [StoppointComponent],
  templateUrl: './list-stoppoint.component.html',
  styleUrl: './list-stoppoint.component.css'
})
export class ListStoppointComponent {
  @Input()
  config?: ConfigDto;
  stoppoints: StoppointnDto[] = [];


  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getStoppoints().subscribe(
      (data) => {
        this.stoppoints = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des stoppoints :', error);
      }
    );
  }

}
