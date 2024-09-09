import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../Services/api.service';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderLogoComponent } from '../header-logo/header-logo.component';
import { HeaderMainComponent } from '../header-main/header-main.component';
import { FooterComponent } from '../footer/footer.component';
import { NotificationComponent } from '../notification/notification.component';

@Component({
  selector: 'app-mission',
  standalone: true,
  imports: [CommonModule, NotificationComponent,FormsModule, HttpClientModule,HeaderLogoComponent,HeaderMainComponent,FooterComponent],
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css'],
  providers: [ApiService]
})
export class MissionComponent implements OnInit {
  points: number = 0;
  notificationVisible = false;

  missions: Array<any> = []; // Variable to store missions

  constructor(private router: Router, private apiService: ApiService, private userService: UserService) {}

  ngOnInit() {
    this.fetchMissions();
  }

  fetchMissions() {
    const campaignId = this.userService.getCampaignId();
    let userId=this.userService.getUserId();
    console.log("campaignId is :"+campaignId);
    console.log("userId is :"+userId);
    
    if (campaignId !== null) {
      const missionData = { BX_Mission_Camp_ID_FK: campaignId, BX_Mission_DateTime: new Date() };
if(userId==null){
  userId=0;
}
      this.apiService.getMissionByCampaignId(userId, missionData).subscribe(
        response => {
          this.missions = response;
        },
        error => {
          console.error('Error fetching missions:', error);
        }
      );
    } else {
      console.error('Campaign ID is null. User might not be signed in.');
    }
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  navigateToProfile() {
    this.router.navigate(['/profile']);
  }



  navigateToActivityTitle() {
    this.router.navigate(['/activity/title']);
  }


  
  navigateToNotifications() {
    this.router.navigate(['/Notification']);
  }

  showNotifications(): void {
    this.notificationVisible = !this.notificationVisible;
  }

  onCloseNotification(): void {
    this.notificationVisible = false;
  }

  storeMissionId(missionId: number) {
    this.userService.setMissionId(missionId);
    this.router.navigate(['/home']);  // Adjust navigation as needed
  }
}
