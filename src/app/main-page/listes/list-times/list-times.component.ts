import { Component, Input } from '@angular/core';
import { ConfigDto } from '../../../models/config-dto';
import { TimeDto } from '../../../models/time-dto';
import { DataService } from '../../../services/data.service';
import {AffectationDto} from '../../../models/affectation-dto';

@Component({
  selector: 'app-list-times',
  templateUrl: './list-times.component.html',
  standalone: true,
  styleUrls: ['./list-times.component.css']
})
export class ListTimesComponent {
  @Input()
  config?: ConfigDto;

  @Input()
  affectation? : AffectationDto;

  times: TimeDto[] = [];
  isLoading = true;

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
    console.log('onClickTime:', time);
  }

}
