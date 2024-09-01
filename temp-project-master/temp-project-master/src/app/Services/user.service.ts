// user.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userIdKey = 'userId';
  private brandIdKey = 'brandId';
  private campaignIdKey = 'campaignId';
  private missionIdKey = 'missionId';

  setUserId(id: number) {
    localStorage.setItem(this.userIdKey, id.toString());
  }

  getUserId(): number | null {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      const userId = localStorage.getItem('userId');
      return userId ? parseInt(userId, 10) : null;
    } else {
      console.error('localStorage is not available');
      return null;
    }
  }
  setBrandId(id: number) {
    localStorage.setItem(this.brandIdKey, id.toString());
  }

  getBrandId(): number | null {
    const brandId = localStorage.getItem(this.brandIdKey);
    return brandId ? +brandId : null;
  }

  setCampaignId(id: number) {
    localStorage.setItem(this.campaignIdKey, id.toString());
  }

  getCampaignId(): number | null {
    const campaignId = localStorage.getItem(this.campaignIdKey);
    return campaignId ? +campaignId : null;
  }

  setMissionId(id: number) {
    localStorage.setItem(this.missionIdKey, id.toString());
  }

  getMissionId(): number | null {
    if (typeof window !== 'undefined' && typeof window.localStorage !== 'undefined') {
      const missionId = localStorage.getItem('missionId');
      return missionId ? parseInt(missionId, 10) : null;
    } else {
      console.error('localStorage is not available');
      return null;
    }
  }
}
