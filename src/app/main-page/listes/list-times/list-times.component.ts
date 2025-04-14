import { Component, Input } from '@angular/core';
import { ConfigDto } from '../../../models/config-dto';
import { TimeDto } from '../../../models/time-dto';
import { DataService } from '../../../services/data.service';
import {AffectationDto} from '../../../models/affectation-dto';
import {ConfigDialogComponent} from '../../../config-selector/config-dialog/config-dialog.component';
import {TimeDialogComponent} from './time-dialog/time-dialog.component';

@Component({
  selector: 'app-list-times',
  templateUrl: './list-times.component.html',
  standalone: true,
  imports: [
    ConfigDialogComponent,
    TimeDialogComponent
  ],
  styleUrls: ['./list-times.component.css']
})
export class ListTimesComponent {
  @Input()
  config?: ConfigDto;

  @Input()
  affectation? : AffectationDto;

  times: TimeDto[] = [];
  isLoading = true;
  showDialog = false;
  timeToEdit?: TimeDto;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    if( this.config && this.affectation){
      this.dataService.getTimes(this.config, this.affectation).subscribe(
        (data) => {
          this.times = data.sort((t1, t2)=>t1.heureTheo>t2.heureTheo?1:-1);
          this.isLoading = false; // Fin du chargement
        },
        (error) => {
          console.error('Erreur lors de la récupération des affectations :', error);
          this.isLoading = false; // Fin du chargement même en cas d'erreur
        }
      );
    }

  }

  onClickTime(time: TimeDto) {
    this.timeToEdit = time;
    this.showDialog = true;
  }

  onCloseDialog(): void {
    this.showDialog = false;
  }

}
