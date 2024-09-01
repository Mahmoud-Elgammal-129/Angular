import { Component, Output,Input, EventEmitter  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-success-dialog',
  standalone: true,
  imports: [CommonModule],
 
  templateUrl: './success-dialog.component.html',
  styleUrl: './success-dialog.component.css',
})
export class SuccessDialogComponent {
  isDialogVisible = true; // Set to true to display the dialog initially

  closeDialog() {
    this.isDialogVisible = false;
  }
  @Input() visible: boolean = false;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  continueGame() {
    // Additional logic for continuing the game can be added here
    this.onClose();
  }
}
