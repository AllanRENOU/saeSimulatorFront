import { Component, Input } from '@angular/core';
import { ConfigDto } from '../../../models/config-dto';

@Component({
  selector: 'app-list-times',
  templateUrl: './list-times.component.html',
  styleUrls: ['./list-times.component.css']
})
export class ListTimesComponent {
  @Input()
  config?: ConfigDto;
  times: string[] = ['10:00', '12:00', '14:00'];
}
