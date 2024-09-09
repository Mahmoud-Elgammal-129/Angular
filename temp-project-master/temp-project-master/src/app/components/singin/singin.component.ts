

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../../Services/api.service';
import { UserSignin } from '../../Models/UserSignin.model';
import { UserService } from '../../Services/user.service';
import { InsertUserBrand } from '../../Models/insert-user-brand.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-singin',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,HttpClientModule],
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css'],
  providers: [ApiService]
})
export class SinginComponent implements OnInit {
  signinForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.signinForm = this.fb.group({
      mobileNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^(010|011|012|015)\d{8}$/)
        ]
      ],
      username: ['', Validators.required] 
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      const userSigninData: UserSignin = {
        BX_User_Mobile_Number: this.signinForm.value.mobileNumber,
        BX_User_Name: this.signinForm.value.username 

      };

      this.apiService.userSignin(0, userSigninData).subscribe(
        response => {
          console.log('Sign-in successful:', response);
          this.userService.setUserId(response.BX_User_ID_PK);
          this.router.navigate(['/activity']);
          // this.insertUserBrand(response.BX_User_ID_PK);
        },
        error => {
          console.error('Sign-in error:', error);
        }
      );
    }
    else{
      this.signinForm.markAllAsTouched();
    }
  }

  insertUserBrand(userId: number) {
    const insertUserBrandData: InsertUserBrand = { User_ID: userId, Brand_ID: 7 };  // Replace with actual Brand_ID

    this.apiService.insertUserBrand(0, insertUserBrandData).subscribe(
      response => {
        console.log('User brand inserted:', response);
        this.userService.setBrandId(7);  // Store Brand_ID in UserService
        this.router.navigate(['/activity']);  // Navigate to activity page
      },
      error => {
        console.error('Error inserting user brand:', error);
      }
    );
  }
}
