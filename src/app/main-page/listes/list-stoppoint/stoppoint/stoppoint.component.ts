import { Component, Input } from '@angular/core';
import { ConfigDto } from '../../../../models/config-dto';
import { StoppointnDto } from '../../../../models/stoppoint-dto';
import { ListAffectationsComponent } from "../../list-affectations/list-affectations.component";

@Component({
  selector: 'app-stoppoint',
  imports: [ListAffectationsComponent],
  templateUrl: './stoppoint.component.html',
  styleUrl: './stoppoint.component.css'
})
export class StoppointComponent {

  @Input()
  config?: ConfigDto;

  @Input()
  stoppoint?: StoppointnDto;

  showAffectations: boolean = false; 

  toggleAffectations(): void {
    this.showAffectations = !this.showAffectations;
  }
}
