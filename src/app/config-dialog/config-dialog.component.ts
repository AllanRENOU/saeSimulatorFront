import { Component, EventEmitter, Output } from '@angular/core';
import { ConfigDto } from '../models/config-dto';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [
    //BrowserModule,
    FormsModule // Add FormsModule to imports
  ],
  selector: 'app-config-dialog',
  templateUrl: './config-dialog.component.html',
  styleUrl: './config-dialog.component.css'
})
export class ConfigDialogComponent {
  
  config: ConfigDto = new ConfigDto('', '');

  @Output() configCreated = new EventEmitter<ConfigDto>();
  @Output() closeDialog = new EventEmitter<void>();

  onCreate(): void {
    if (this.config.name && this.config.host) {
      this.configCreated.emit(this.config);
    }
  }

  onCancel(): void {
    this.closeDialog.emit();
  }
}
