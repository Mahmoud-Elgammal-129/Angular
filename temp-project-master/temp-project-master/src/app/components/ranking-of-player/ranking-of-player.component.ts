import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../Services/api.service';
import { UserService } from '../../Services/user.service';
import { NotificationComponent } from '../notification/notification.component';
import { HeaderLogoComponent } from '../header-logo/header-logo.component';
import { HeaderMainComponent } from '../header-main/header-main.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-ranking-of-player',
  standalone: true,
  imports: [NotificationComponent, CommonModule, FormsModule, HttpClientModule,FooterComponent,HeaderMainComponent,HeaderLogoComponent],
  templateUrl: './ranking-of-player.component.html',
  styleUrl: './ranking-of-player.component.css',
  providers: [ApiService]
})
export class RankingOfPlayerComponent implements OnInit {
  leaderboard: any[] = []; // to store the leaderboard data
  userScore: number = 0;   // to store the user's score

  constructor(
    private router: Router,
    private userService: UserService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.fetchLeaderboard();  // Fetch leaderboard data on component initialization
    this.fetchUserScore();    // Fetch user's score on component initialization
  }

  // Fetch leaderboard data from the API
  fetchLeaderboard(): void {
    const userID = this.userService.getUserId();
    const campID = this.userService.getCampaignId();

    if (userID !== null && campID !== null) {
      const DataCampId = { id: campID };
      this.apiService.getLeaderboardByCampId(userID, DataCampId).subscribe(
        (data) => {
          this.leaderboard = data;
        },
        (error) => {
          console.error('Error fetching leaderboard:', error);
        }
      );
    } else {
      console.error('User ID or Campaign ID is null. User might not be signed in.');
    }
  }

  // Fetch the user's score from the API
  fetchUserScore(): void {
    const userID = this.userService.getUserId();
    const campID = this.userService.getCampaignId();

    if (userID !== null && campID !== null) {
      const DataCampId = { id: campID };
      this.apiService.getUserScoreByCampId(userID, DataCampId).subscribe(
        (data) => {
          this.userScore = data[0]?.UserScore || 0; // Assuming the API returns an array with at least one item
        },
        (error) => {
          console.error('Error fetching user score:', error);
        }
      );
    }
  }

  // Helper method to get ordinal suffix (st, nd, rd, th)
  getOrdinalSuffix(i: number): string {
    const j = i % 10;
    const k = i % 100;
    if (j == 1 && k != 11) {
      return "st";
    }
    if (j == 2 && k != 12) {
      return "nd";
    }
    if (j == 3 && k != 13) {
      return "rd";
    }
    return "th";
  }

  // Method to get profile image path, defaulting if empty
  getProfileImagePath(path: string): string {
    return path && path.trim() !== ' ' ? path : '../../../assets/img/man.jpg';
  }

  // Navigation methods
  navigateToRewards() {
    this.router.navigate(['/rewards']);
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }

  navigateToNotifications() {
    this.router.navigate(['/Notification']);
  }

  navigateToSignin() {
    this.router.navigate(['/signin']);
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

  // Toggle notification visibility
  showNotifications(): void {
    this.notificationVisible = !this.notificationVisible;
  }

  // Close notification
  onCloseNotification(): void {
    this.notificationVisible = false;
  }

  // To track notification visibility
  notificationVisible = false;
}
