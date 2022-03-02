import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'register-email-error-message',
  templateUrl: './email-error-message.component.html',
  styleUrls: ['./email-error-message.component.scss']
})
export class EmailErrorMessageComponent implements OnInit {

  @Input() signUpForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
  }

}
