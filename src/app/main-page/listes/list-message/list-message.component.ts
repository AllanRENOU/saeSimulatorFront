import { Component } from '@angular/core';

@Component({
  selector: 'app-list-message',
  templateUrl: './list-message.component.html',
  styleUrls: ['./list-message.component.css']
})
export class ListMessageComponent {
  messages: string[] = ['Message 1', 'Message 2', 'Message 3'];
}
