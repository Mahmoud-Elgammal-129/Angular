// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserSignin } from '../Models/UserSignin.model';
import { GetBrandById } from '../Models/get-brand-by-id.model';
import { InsertUserBrand } from '../Models/insert-user-brand.model';
import { GetCampaignByBrandId } from '../Models/get-campaign-by-brand-id.model';
import { GetMissionByCampaignId } from '../Models/get-mission-by-campaign-id.model';
import { InsertUserMission } from '../Models/insert-user-mission.model';
import { GetTasksByMissionId } from '../Models/get-tasks-by-mission-id.model';
import { InsertAnswer } from '../Models/insert-answer.model';
import { Task } from '../Models/Task.model';

@Injectable({
    providedIn: 'root'
  })
  export class ApiService {
    private apiUrl = 'https://apps.thebegames.com/Be-Game/BE-Game-API/api';
  
    constructor(private http: HttpClient) {}
  
    userSignin(userID: number, data: UserSignin): Observable<any> {
      return this.http.post(`${this.apiUrl}/Users/UserSignin`, { userID, data });
    }
  
    getBrandById(userID: number, data: GetBrandById): Observable<any> {
      return this.http.post(`${this.apiUrl}/Brands/GetBrnadById`, { userID, data });
    }
  
    insertUserBrand(userID: number, data: InsertUserBrand): Observable<any> {
      return this.http.post(`${this.apiUrl}/Brands/User_Brand_insert`, { userID, data });
    }
  
    getCampaignByBrandId(userID: number, data: GetCampaignByBrandId): Observable<any> {
      return this.http.post(`${this.apiUrl}/V2/Camp/GetAllCampsById`, { userID, data });
    }
  
    getMissionByCampaignId(userID: number, data: GetMissionByCampaignId): Observable<any> {
      return this.http.post(`${this.apiUrl}/Mission/GetMissionByCampId_Date_V2`, { userID, data });
    }
  
    insertUserMission(userID: number, data: InsertUserMission): Observable<any> {
      return this.http.post(`${this.apiUrl}/Mission/Insert_User_Mission`, { userID, data });
    }
  
    getTasksByMissionId(userID: number, data: { id: number }): Observable<Task[]> {
      return this.http.post<Task[]>(`${this.apiUrl}/User_Tasks/GetTasksByMissionId`, { userID, data });
    }
  
    insertAnswer(userID: number, data: InsertAnswer): Observable<any> {
      return this.http.post(`${this.apiUrl}/Users/Questions_Mission_Answre`, { userID, data });
    }
    getLeaderboardByCampId(userID: number, data: { id: number }): Observable<any> {
      return this.http.post(`${this.apiUrl}/UserLDR/GetldrCamp_ID`, { userID, data });
    }
    getUserScoreByCampId(userID: number, data: { id: number }): Observable<any> {
      return this.http.post(`${this.apiUrl}/UserScore/GetUserScoreByCampId`, { userID, data });
  }
  }