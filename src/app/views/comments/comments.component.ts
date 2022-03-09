import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Comments } from 'src/app/shared/interface/comments.interface';
import { LoggedInUser } from 'src/app/shared/interface/logged-in-user.interface';
import { CommentsService } from 'src/app/shared/service/comments/comments.service';
import { UserService } from 'src/app/shared/service/user.service';
import { CreationPopup } from './components/creation-popup/creation-popup.component';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent implements OnInit {
  loggedInUser: LoggedInUser;
  displayedColumns: string[] = ['id', 'created_at', 'title', 'description'];
  data: Comments[] = [];

  @ViewChild(MatTable) table: MatTable<Comments>;

  constructor(private commentsService: CommentsService, private dialog: MatDialog) {
    this.loggedInUser = JSON.parse(localStorage['loggedInUser']);
  }

  ngOnInit(): void {
    this.commentsService.get(this.loggedInUser).subscribe({
      next: (_comments: Comments[]) => (this.data = _comments),
    });
  }

  openCreationPopUp() {
    const dialogRef = this.dialog.open(CreationPopup);

    dialogRef.afterClosed().subscribe(newComment => {
      if (newComment) {
        newComment = { ...newComment, createdAt: new Date().toUTCString(), userId: this.loggedInUser.user.id };
        this.commentsService.post(newComment).subscribe({
          next: (_newComment: Comments) => {
            this.data.push(_newComment);
            this.table.renderRows();
          },
        });
      }
    });
  }
}
