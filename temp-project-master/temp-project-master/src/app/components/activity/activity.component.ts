// activity.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../Services/api.service';
import { GetBrandById } from '../../Models/get-brand-by-id.model';
import { UserService } from '../../Services/user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InsertUserBrand } from '../../Models/insert-user-brand.model';
import { GetCampaignByBrandId } from '../../Models/get-campaign-by-brand-id.model';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css'],
  providers: [ApiService]
})
export class ActivityComponent implements OnInit {
  brandDescription: string = '';
  campaigns: any[] = []; // Variable to store campaigns

  constructor(private router: Router, private apiService: ApiService, private userService: UserService) {}

  ngOnInit() {
    this.insertUserBrand();
    console.log("userId is :" + this.userService.getUserId());
  }

  insertUserBrand() {
    const userId = this.userService.getUserId();
    
    if (userId !== null) {
      const insertUserBrandData: InsertUserBrand = { User_ID: userId, Brand_ID: 7 };  

      this.apiService.insertUserBrand(userId, insertUserBrandData).subscribe(
        response => {
          console.log('User brand inserted:', response);
          this.userService.setBrandId(7);  
          this.getBrandDescription();
          this.getCampaignsByBrandId(); // Fetch campaigns after inserting user brand
        },
        error => {
          console.error('Error inserting user brand:', error);
        }
      );
    } else {
      console.error('User ID is null. User might not be signed in.');
    }
  }

  getBrandDescription() {
    const brandData: GetBrandById = { id: 7};  

    this.apiService.getBrandById(0, brandData).subscribe(
      response => {
        this.brandDescription = response.BX_Brand_Disc_EN;
      },
      error => {
        console.error('Error fetching brand description:', error);
      }
    );
  }

  getCampaignsByBrandId() {
    let userId = this.userService.getUserId();
    const campaignData: GetCampaignByBrandId = { id: 7, Gen_Date: new Date()}; 
if(userId==null){
  userId=0;
}
    this.apiService.getCampaignByBrandId(userId, campaignData).subscribe(
      response => {
        this.campaigns = response; 
        console.log('campaigns :', response);
        
      },
      error => {
        console.error('Error fetching campaigns:', error);
      }
    );
  }

  activityTitle(campaignId: number) {
    this.userService.setCampaignId(campaignId);
    console.log('campaignId is  :', campaignId);
    this.router.navigate(['/activity/title']);
  }
}
