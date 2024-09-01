import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-title',
  standalone: true,
  imports: [],
  templateUrl: './activity-title.component.html',
  styleUrl: './activity-title.component.css'
})
export class ActivityTitleComponent {
  constructor(private router: Router) {}
  NavgaitetoHome() {
    this.router.navigate(['/home']);
  }
  NavgaitetoMission() {
    this.router.navigate(['/mission']);
  }
}



