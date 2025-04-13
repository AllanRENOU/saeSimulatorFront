import { Component, Input } from '@angular/core';
import { ConfigDto } from '../../../../models/config-dto';
import { StoppointnDto } from '../../../../models/stoppoint-dto';

@Component({
  selector: 'app-stoppoint',
  imports: [],
  templateUrl: './stoppoint.component.html',
  styleUrl: './stoppoint.component.css'
})
export class StoppointComponent {

  @Input()
  config?: ConfigDto;

  @Input()
  stoppoint?: StoppointnDto;
}
