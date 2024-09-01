import { Component, Inject, OnInit, Output, EventEmitter } from '@angular/core';
import { TASK_DATA } from '../home/home.component';
import { Task } from '../../Models/Task.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../Services/api.service';
import { PointsService } from '../../Services/points.service';
import { UserService } from '../../Services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-multi-choice',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './multi-choice.component.html',
  styleUrls: ['./multi-choice.component.css'],
})
export class MultiChoiceComponent implements OnInit {
  @Output() answerSelected = new EventEmitter<string>();

  selectedAnswer: string | null = null;
  questionDetails: any[] = [];

  constructor(@Inject(TASK_DATA) public task: Task,
  private userService: UserService,
  private router: Router, 
  private apiService: ApiService ,
  private pointsService: PointsService) {}

  ngOnInit(): void {
    if (this.task && this.task.Questions_Details) {
      this.questionDetails = this.task.Questions_Details;
    } else {
      console.error('Task or Question Details are not defined');
    }
  }

  selectAnswer(answer: string): void {
    this.selectedAnswer = answer;
    this.answerSelected.emit(this.selectedAnswer);
  }

  submitAnswer(): void {
    if (this.selectedAnswer) {
      const userId = this.userService.getUserId();
      const campId = this.userService.getCampaignId();
      const brandId = this.userService.getBrandId();

      if (userId !== null && campId !== null && brandId !== null) {
        const isCorrect = this.selectedAnswer === this.task.BX_Questions_Correct_Answer_EN;
        const pointsToAdd = isCorrect ? this.task.BX_Questions_Correct_Point : this.task.BX_Questions_Wrong_Point;

        const answerData = {
          BX_User_Questions_Mission_Mission_Questions_ID_FK: this.task.BX_Mission_Questions_ID_PK,
          BX_User_Questions_Mission_User_ID_FK: userId,
          BX_User_Questions_Mission_Answer: this.selectedAnswer,
          BX_User_Questions_Mission_Correct: isCorrect ? 1 : 0,
          BX_User_Score_Game_Type_ID_FK: 11,
          BX_User_Score_User_ID_FK: userId,
          BX_User_Score_Point: pointsToAdd,
          BX_User_Score_Comment: '',
          BX_User_Score_DateTime: new Date(),
          BX_User_Score_Camp_ID_FK: campId,
          BX_User_Score_Brand_ID_FK: brandId,
          BX_User_Score_Questions_Mission_ID_FK: this.task.BX_Questions_ID_PK
        };

        this.apiService.insertAnswer(userId, answerData).subscribe(
          response => {
            console.log('Answer submitted:', response);
            this.pointsService.addPoints(pointsToAdd);
            Swal.fire('Answer submitted successfully!', '', 'success').then(() => {
              this.router.navigate(['/home']);
              this.refreshPage(); // Navigate to home after submission
            });
          },
          error => {
            console.error('Error submitting answer:', error);
            Swal.fire('Error!', 'Error submitting answer.', 'error');
          }
        );
      }
    } else {
      Swal.fire('Please select an answer.', '', 'warning');
    }
  }
  refreshPage() {
    window.location.reload();
  }
  
  
}

