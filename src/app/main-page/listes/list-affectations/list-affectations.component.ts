import { Component, Input } from '@angular/core';
import { ConfigDto } from '../../../models/config-dto';

@Component({
  selector: 'app-list-affectations',
  templateUrl: './list-affectations.component.html',
  styleUrls: ['./list-affectations.component.css']
})
export class ListAffectationsComponent {
  @Input() 
  config?: ConfigDto;
  affectations: string[] = ['Affectation 1', 'Affectation 2', 'Affectation 3'];
}
