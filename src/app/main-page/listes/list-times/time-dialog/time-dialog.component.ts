import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TimeDto} from '../../../../models/time-dto';
import {DataService} from '../../../../services/data.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-time-dialog',
  imports: [
    FormsModule
  ],
  templateUrl: './time-dialog.component.html',
  standalone: true,
  styleUrl: './time-dialog.component.css'
})
export class TimeDialogComponent {

  @Input()
  time?: TimeDto;
  newTime: TimeDto = new TimeDto('', 0, false, 0, '', '','', '', '', '', '');

  @Output() send = new EventEmitter<TimeDto>();
  @Output() closeDialog = new EventEmitter<void>();

  constructor(private dataService: DataService) {

  }
  ngOnInit(): void {
    if( this.time){
      this.newTime = new TimeDto(
        this.time.course,
        this.time.flag,
        this.time.isAQuai,
        this.time.delais,
        this.time.heureTheo,
        this.time.heureReel,
        this.time.quai,
        this.time.via,
        this.time.line,
        this.time.destination,
        this.time.stopPoint);
    }
  }

  onSend(): void {
    if (this.newTime) {
      this.send.emit(this.newTime);
    }
  }

  onCancel(): void {
    this.closeDialog.emit();
  }
}
