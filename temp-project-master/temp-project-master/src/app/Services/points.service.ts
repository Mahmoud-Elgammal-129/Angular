import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  private pointsSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  points$: Observable<number> = this.pointsSubject.asObservable();

  getPoints(): number {
    return this.pointsSubject.value;
  }

  setPoints(points: number): void {
    this.pointsSubject.next(points);
  }

  addPoints(points: number): void {
    this.pointsSubject.next(this.pointsSubject.value + points);
  }
}
