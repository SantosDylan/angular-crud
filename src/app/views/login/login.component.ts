import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interface/user.interface';
import { UserService } from 'src/app/shared/service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  error_message: string = '';

  loginForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit(): void {}

  signIn(): void {
    this.userService.login(this.loginForm.value).subscribe({
      next: (loggedInUser: User) => {
        localStorage['loggedInUser'] = JSON.stringify(loggedInUser);
        this.router.navigate(['/comments']);
      },
      error: error => {
        this.error_message = error.error;
      },
      complete: () => {},
    });
  }
}
