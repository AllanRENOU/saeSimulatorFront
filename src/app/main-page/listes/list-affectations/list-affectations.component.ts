import { Component, Input } from '@angular/core';
import { ConfigDto } from '../../../models/config-dto';
import { DataService } from '../../../services/data.service';
import { AffectationDto } from '../../../models/affectation-dto';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-list-affectations',
  templateUrl: './list-affectations.component.html',
  styleUrls: ['./list-affectations.component.css']
})
export class ListAffectationsComponent {
  @Input() 
  config?: ConfigDto;
  affectations: AffectationDto[] = [];
  isLoading: boolean = true; // État de chargement

  constructor(private dataService: DataService, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.dataService.getAffectations().subscribe(
      (data) => {
        this.affectations = data;
        this.isLoading = false; // Fin du chargement
      },
      (error) => {
        console.error('Erreur lors de la récupération des affectations :', error);
        this.isLoading = false; // Fin du chargement même en cas d'erreur
      }
    );
  }

  onAffectationClick(affectation: AffectationDto): void {
    this.sharedService.emitAffectationEvent(affectation); // Émet l'événement
  }
}
