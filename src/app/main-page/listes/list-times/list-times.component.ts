import { Component, Input } from '@angular/core';
import { ConfigDto } from '../../../models/config-dto';
import { TimeDto } from '../../../models/time-dto';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-list-times',
  templateUrl: './list-times.component.html',
  styleUrls: ['./list-times.component.css']
})
export class ListTimesComponent {
  @Input()
  config?: ConfigDto;
  times: TimeDto[] = [];
  isLoading = true;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getTimes().subscribe(
      (data) => {
        this.times = data;
        this.isLoading = false; // Fin du chargement
      },
      (error) => {
        console.error('Erreur lors de la récupération des affectations :', error);
        this.isLoading = false; // Fin du chargement même en cas d'erreur
      }
    );
  }

}
