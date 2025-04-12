import { Component } from '@angular/core';

@Component({
  selector: 'app-list-times',
  templateUrl: './list-times.component.html',
  styleUrls: ['./list-times.component.css']
})
export class ListTimesComponent {
  times: string[] = ['10:00', '12:00', '14:00'];
}
