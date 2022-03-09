import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Comments } from 'src/app/shared/interface/comments.interface';
import { LoggedInUser } from 'src/app/shared/interface/logged-in-user.interface';
import { CommentsService } from 'src/app/shared/service/comments/comments.service';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  loggedInUser: LoggedInUser;
  displayedColumns: string[] = ['id', 'created_at', 'title', 'description'];
  data: Comments[] = [];

  constructor(private commentsService: CommentsService) {
    this.loggedInUser = JSON.parse(localStorage['loggedInUser']);
  }

  ngOnInit(): void {
    this.commentsService.get(this.loggedInUser).subscribe({
      next: (_comments: Comments[]) => (this.data = _comments),
    });
  }
}
