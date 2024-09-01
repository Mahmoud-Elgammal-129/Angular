import { Component, Output, EventEmitter } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Output() homeNavigate = new EventEmitter<void>();
  @Output() rankingNavigate = new EventEmitter<void>();
  @Output() activityTitleNavigate = new EventEmitter<void>();
  @Output() rewardsNavigate = new EventEmitter<void>();
  @Output() signinNavigate = new EventEmitter<void>();

  selectedButton: string = 'home';  // Default selected button

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Determine which route is active and set selectedButton accordingly
        if (event.urlAfterRedirects.includes('/home')) {
          this.selectedButton = 'home';
        } else if (event.urlAfterRedirects.includes('/ranking')) {
          this.selectedButton = 'ranking';
        } else if (event.urlAfterRedirects.includes('/activity-title')) {
          this.selectedButton = 'activity';
        } else if (event.urlAfterRedirects.includes('/rewards')) {
          this.selectedButton = 'rewards';
        } else if (event.urlAfterRedirects.includes('/signin')) {
          this.selectedButton = 'signin';
        }
      }
    });
  }

  navigateToHome() {
    this.selectedButton = 'home';
    this.homeNavigate.emit();
  }

  navigateToRanking() {
    this.selectedButton = 'ranking';
    this.rankingNavigate.emit();
  }

  navigateToActivityTitle() {
    this.selectedButton = 'activity';
    this.activityTitleNavigate.emit();
  }

  navigateToRewards() {
    this.selectedButton = 'rewards';
    this.rewardsNavigate.emit();
  }

  navigateToSignin() {
    this.selectedButton = 'signin';
    this.signinNavigate.emit();
  }
}
