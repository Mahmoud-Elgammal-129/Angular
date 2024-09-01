import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { TASK_DATA } from '../home/home.component';
import { Task } from '../../Models/Task.model';
import { CommonModule } from '@angular/common';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';
import { ApiService } from '../../Services/api.service';
import { PointsService } from '../../Services/points.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-image-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-question.component.html',
  styleUrls: ['./image-question.component.css'],
})
export class ImageQuestionComponent {
  @Output() imageUploaded = new EventEmitter<File>(); // Event emitted when an image is uploaded
  selectedFile: File | null = null; // Holds the selected file

  constructor(@Inject(TASK_DATA) public task: Task,
  private userService: UserService,
  private router: Router, 
  private apiService: ApiService ,
  private pointsService: PointsService) {}

  // Handle the file input change event
  handleFileInput(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0]; // Save the selected file
    }
  }


  submitImage() {
    if (this.selectedFile) {
      const userId = this.userService.getUserId();
      const campId = this.userService.getCampaignId();
      const brandId = this.userService.getBrandId();

      if (userId !== null && campId !== null && brandId !== null) {
        const isCorrect = true; // For example, you might have some logic to determine correctness
        const pointsToAdd = this.task.BX_Questions_Correct_Point; // Assuming it's correct for this example

        const answerData = {
          BX_User_Questions_Mission_Mission_Questions_ID_FK: this.task.BX_Mission_Questions_ID_PK,
          BX_User_Questions_Mission_User_ID_FK: userId,
          BX_User_Questions_Mission_Answer: 'Image uploaded',
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
              
              // Navigate to home after submission
            });
          },
          error => {
            console.error('Error submitting answer:', error);
            Swal.fire('Error!', 'Error submitting answer.', 'error');
          }
        );
      }
    } else {
      alert('Please choose an image before submitting.');
    }
  }
  refreshPage() {
    window.location.reload();
  }
  
}
