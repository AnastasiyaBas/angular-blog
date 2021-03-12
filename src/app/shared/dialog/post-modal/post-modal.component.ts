import { Component, OnInit } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Comments, Posts, Users } from 'src/app/modules/interface';


@Component({
  selector: 'app-post-modal',
  templateUrl: './post-modal.component.html',
  styleUrls: ['./post-modal.component.scss']
})
export class PostModalComponent implements OnInit {
    content: Posts;
    user: Users;
    commentList: Comments[];

    constructor(public modalRef: MDBModalRef) { }
    ngOnInit(): void {
    }

}
