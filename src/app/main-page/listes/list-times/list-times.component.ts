import { Component, Input } from '@angular/core';
import { ConfigDto } from '../../../models/config-dto';
import { TimeDto } from '../../../models/time-dto';

@Component({
  selector: 'app-list-times',
  templateUrl: './list-times.component.html',
  styleUrls: ['./list-times.component.css']
})
export class ListTimesComponent {
  @Input()
  config?: ConfigDto;

  times: TimeDto[] = [
    new TimeDto('Course 1', 1, true, 5, '10:00', '10:05', 'Quai A', 'Via X', 'Ligne 1', 'Destination 1', 'StopPoint 1'),
    new TimeDto('Course 2', 0, false, 0, '12:00', '12:00', 'Quai B', 'Via Y', 'Ligne 2', 'Destination 2', 'StopPoint 2'),
    new TimeDto('Course 3', 1, true, -3, '14:00', '13:57', 'Quai C', 'Via Z', 'Ligne 3', 'Destination 3', 'StopPoint 3')
  ];
}
