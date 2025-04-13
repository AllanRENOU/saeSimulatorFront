import { Component, Input } from '@angular/core';
import { ConfigDto } from '../../../models/config-dto';
import { DataService } from '../../../data.service';
import { AffectationDto } from '../../../models/affectation-dto';

@Component({
  selector: 'app-list-affectations',
  templateUrl: './list-affectations.component.html',
  styleUrls: ['./list-affectations.component.css']
})
export class ListAffectationsComponent {
  @Input() 
  config?: ConfigDto;
  affectations: AffectationDto[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getAffectations().subscribe(
      (data) => {
        this.affectations = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des affectations :', error);
      }
    );
  }
}
