import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationComponent } from '../notification/notification.component';
import { HeaderLogoComponent } from '../header-logo/header-logo.component';
import { HeaderMainComponent } from '../header-main/header-main.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NotificationComponent,FooterComponent,HeaderMainComponent,HeaderLogoComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  profileImgSrc: string = '/assets/profile.jpeg';

  onImageUpload(event: any): void {
    const reader = new FileReader();
    reader.onload = () => {
      this.profileImgSrc = reader.result as string;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
  constructor(private router: Router) {}
  navigateToNotifications() {
    this.router.navigate(['/Notification']);
  }
  navigateToRewards() {
    this.router.navigate(['/rewards']);
  }
  notificationVisible = false;

  showNotifications(): void {
    this.notificationVisible = !this.notificationVisible; // Toggle visibility
  }
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
  onCloseNotification(): void {
    this.notificationVisible = false;
  }
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}


