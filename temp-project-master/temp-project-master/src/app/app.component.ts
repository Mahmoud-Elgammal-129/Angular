import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SinginComponent } from './components/singin/singin.component';
import { ActivityComponent } from './components/activity/activity.component';
import { ActivityTitleComponent } from './components/activity-title/activity-title.component';
import { RankingOfPlayerComponent } from './components/ranking-of-player/ranking-of-player.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { NotificationComponent } from './components/notification/notification.component';
import { HttpClientModule } from '@angular/common/http';
import { MissionComponent } from './components/mission/mission.component';
import { SuccessDialogComponent } from './components/success-dialog/success-dialog.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SinginComponent,
    ActivityComponent,
    ActivityTitleComponent,
    RankingOfPlayerComponent,
    RewardsComponent,
    ProfileComponent,
    HomeComponent,
    NotificationComponent,
    HttpClientModule,
    MissionComponent,
    SuccessDialogComponent,
    TranslateModule , 

    
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // constructor(private translate: TranslateService) {
    
  //   translate.use('en');
  // }
  title = 'temp-project';
}
