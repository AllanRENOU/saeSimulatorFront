import { Component, Input } from '@angular/core';
import { ConfigDto } from '../../../models/config-dto';
import { StoppointnDto } from '../../../models/stoppoint-dto';
import { DataService } from '../../../services/data.service';
import { StoppointComponent } from "./stoppoint/stoppoint.component";

@Component({
  selector: 'app-list-stoppoint',
  imports: [StoppointComponent],
  templateUrl: './list-stoppoint.component.html',
  standalone: true,
  styleUrl: './list-stoppoint.component.css'
})
export class ListStoppointComponent {
  @Input()
  config?: ConfigDto;
  stoppoints: StoppointnDto[] = [];
  isLoading: boolean = true;


  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    if( this.config){
      this.isLoading = true;
      this.dataService.getStoppoints(this.config).subscribe(
        (data) => {
          this.stoppoints = data;
          this.isLoading = false;
        },
        (error) => {
          console.error('Erreur lors de la récupération des stoppoints :', error);
          this.isLoading = false;
        }
      );
    }

  }

}
