import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { SnackbarService } from '../../services/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  myForm!: FormGroup;
  emailForm!: FormGroup;
  value!: string;
  constructor(
    private fb: FormBuilder,
    private snackBar: SnackbarService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: [''],
      emails: this.fb.array([], Validators.required),
      password: [''],
    });
    this.addLesson();
  }

  get emails() {
    return this.myForm.controls['emails'] as FormArray;
  }

  addLesson() {
    const emailForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.emails.push(emailForm);
    this.emailForm = emailForm;
  }

  viewStatistics() {
    this.router.navigate(['/dashboard']);
  }
  onSubmit() {
    this.snackBar.popUpMessage(this.myForm.value.name);
    console.log(this.myForm.value);
  }
}
