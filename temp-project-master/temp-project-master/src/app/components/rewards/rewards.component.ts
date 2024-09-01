//import { Component } from '@angular/core';

// @Component({
//   selector: 'app-rewards',
//   standalone: true,
//   imports: [],
//   templateUrl: './rewards.component.html',
//   styleUrl: './rewards.component.css'
// })
//export class RewardsComponent {}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NotificationComponent } from '../notification/notification.component';
import { HeaderLogoComponent } from '../header-logo/header-logo.component';
import { HeaderMainComponent } from '../header-main/header-main.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-rewards',
  standalone: true,
  imports: [CommonModule,NotificationComponent,FooterComponent,HeaderMainComponent,HeaderLogoComponent],  // Import CommonModule here
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent {
  rewards = [
    {
      image: 'path/to/mcdonalds-image.jpg',
      title: 'McDonalds Reward',
      description: 'Text description of reward and conditions for redemption.'
    },
    {
      image: 'path/to/movie-image.jpg',
      title: 'Movie Reward',
      description: 'Text description of reward and conditions for redemption.'
    },
    {
      image: 'path/to/kfc-image.jpg',
      title: 'KFC Reward',
      description: 'Text description of reward and conditions for redemption.'
    }
  ];
  constructor(private router: Router) {}

  navigateToSignin() {
    this.router.navigate(['/signin']);
  }

  navigateToRewards() {
    this.router.navigate(['/rewards']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToActivityTitle() {
    this.router.navigate(['/activity/title']);
  }

  navigateToRanking() {
    this.router.navigate(['/ranking']);
  }
  navigateToProfile() {
    this.router.navigate(['/profile']);
  }
  navigateToNotifications() {
    this.router.navigate(['/Notification']);
  }
  notificationVisible = false;

  showNotifications(): void {
    this.notificationVisible = !this.notificationVisible; // Toggle visibility
  }

  onCloseNotification(): void {
    this.notificationVisible = false;
  }
}