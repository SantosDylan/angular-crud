import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/class/custom-validators/custom-validators';
import { from } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interface/user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  hide: boolean = true;

  test = this.fb;

  signUpForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      Validators.compose([
        Validators.required,
        // check whether the entered password has a number
        CustomValidators.patternValidator(/\d/, {
          hasNumber: true,
        }),
        // check whether the entered password has upper case letter
        CustomValidators.patternValidator(/[A-Z]/, {
          hasCapitalCase: true,
        }),
        // check whether the entered password has a lower case letter
        CustomValidators.patternValidator(/[a-z]/, {
          hasSmallCase: true,
        }),
        // check whether the entered password has a special character
        CustomValidators.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
          hasSpecialCharacters: true,
        }),
        Validators.minLength(8),
      ]),
    ],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private elem: ElementRef
  ) {}

  ngOnInit(): void {}

  signUp(): void {
    this.userService.register(this.signUpForm.value).subscribe({
      next: (newUser: User) => {
        localStorage['loggedInUser'] = JSON.stringify(newUser);
        this.router.navigate(['/login']);
      },
    });
  }
}
