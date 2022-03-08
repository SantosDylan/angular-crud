import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interface/user.interface';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  loggedInUser: User;

  constructor(private userService: UserService) {
    this.loggedInUser = JSON.parse(localStorage['loggedInUser']);
  }

  ngOnInit(): void {}
}
