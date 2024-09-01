import { RankingOfPlayerComponent } from './components/ranking-of-player/ranking-of-player.component';
import { RewardsComponent } from './components/rewards/rewards.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ActivityTitleComponent } from './components/activity-title/activity-title.component';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {SinginComponent} from './components/singin/singin.component';
import { ActivityComponent } from './components/activity/activity.component';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; // Import CommonModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NotificationComponent } from './components/notification/notification.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient} from '@angular/common/http';










@NgModule({
  declarations: [
     
     
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SinginComponent,
    AppComponent ,
    ActivityComponent,
    ActivityTitleComponent,
    HomeComponent,
    ProfileComponent,
    RewardsComponent,
    RankingOfPlayerComponent,
    NotificationComponent,
    CommonModule,  // Import CommonModule here
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:'en',
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
 
    // Add other modules here
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: []
})
export class AppModule { }
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
