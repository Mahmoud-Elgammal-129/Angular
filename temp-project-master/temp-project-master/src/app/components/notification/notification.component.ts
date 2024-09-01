// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-notification',
//   standalone: true,
//   imports: [],
//   templateUrl: './notification.component.html',
//   styleUrl: './notification.component.css'
// })
// export class NotificationComponent {

// }
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notification.component.html',
 styleUrl: './notification.component.css'
})
export class NotificationComponent {
  @Input() visible = false;
  @Output() closeEvent = new EventEmitter<void>();

  newNotifications = [
    { message: 'New mission has been added, check it now to gain more points.', time: '2 hours ago' },
    { message: 'New Prize has been added, gain more points to win more prizes.', time: '3 hours ago' }
  ];

  earlierNotifications = [
    { message: 'New mission has been added, check it now to gain more points.', time: '1 day ago' },
    { message: 'New Prize has been added, gain more points to win more prizes.', time: '2 days ago' }
  ];

  close(): void {
    this.visible = false;
    this.closeEvent.emit();
  }
}