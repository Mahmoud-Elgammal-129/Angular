

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { SinginComponent } from './components/singin/singin.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ActivityTitleComponent } from './components/activity-title/activity-title.component';
import { RankingOfPlayerComponent } from './components/ranking-of-player/ranking-of-player.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NotificationComponent } from './components/notification/notification.component';
import { MissionComponent } from './components/mission/mission.component';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';



export const routes: Routes = [
  { path: '', component: SinginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rewards', component: RewardsComponent },
{ path: 'signin', component: SinginComponent },
{ path: 'activity', component: ActivityComponent },
{ path: 'activity/title', component: ActivityTitleComponent },
{ path: 'ranking', component: RankingOfPlayerComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'Notification', component: NotificationComponent },
{ path: 'mission', component: MissionComponent },
{ path: 'successDialog', component: SuccessDialogComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }