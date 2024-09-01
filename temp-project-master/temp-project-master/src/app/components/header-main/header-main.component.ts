import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ApiService } from '../../Services/api.service';
import { NotificationComponent } from '../notification/notification.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header-main',
  standalone: true,
  imports: [NotificationComponent, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.css'],
  providers: [ApiService]
})
export class HeaderMainComponent {
  @Input() points: number = 0; // Receive points from parent component

  @Output() missionNavigate = new EventEmitter<void>();
  @Output() profileNavigate = new EventEmitter<void>();
  @Output() showNotifications = new EventEmitter<void>();

  navigateToMission() {
    this.missionNavigate.emit();
  }

  navigateToProfile() {
    this.profileNavigate.emit();
  }

  showNotifications1() {
    this.showNotifications.emit();
  }
}
