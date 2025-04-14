import { Component, Input } from '@angular/core';
import { ConfigDto } from '../../../models/config-dto';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  standalone: true,
  styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent {
  @Input()
  config?: ConfigDto;
  messages: string[] = ['Message 1', 'Message 2', 'Message 3'];
}
