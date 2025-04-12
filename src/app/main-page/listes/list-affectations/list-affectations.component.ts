import { Component } from '@angular/core';

@Component({
  selector: 'app-list-affectations',
  templateUrl: './list-affectations.component.html',
  styleUrls: ['./list-affectations.component.css']
})
export class ListAffectationsComponent {
  affectations: string[] = ['Affectation 1', 'Affectation 2', 'Affectation 3'];
}
