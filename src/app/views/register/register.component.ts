import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'src/app/shared/class/custom-validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide: boolean = true

  signUpForm : FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['',   Validators.compose([
      Validators.required,
      // check whether the entered password has a number
      CustomValidators.patternValidator(/\d/, {
        hasNumber: true
      }),
      // check whether the entered password has upper case letter
      CustomValidators.patternValidator(/[A-Z]/, {
        hasCapitalCase: true
      }),
      // check whether the entered password has a lower case letter
      CustomValidators.patternValidator(/[a-z]/, {
        hasSmallCase: true
      }),
      // check whether the entered password has a special character
      CustomValidators.patternValidator(
        /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
        {
          hasSpecialCharacters: true
        }
      ),
      Validators.minLength(8)
    ])]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  signUp(): void {
    console.log(this.signUpForm.value)
  }
}
