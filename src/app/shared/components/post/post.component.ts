import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../http.service';
import { PostModalComponent } from '../../../post-modal/post-modal.component';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';

export interface Posts {
    title: string
    id?: number
    userId: number
}
export interface Users {
    id?: number
    name: string
    userId: number
}
export interface Comments {
    id?: number
    body: string
}

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    providers: [HttpService]
})
export class PostComponent implements OnInit {
    postList: Posts[] = [];
    userList: Users[] = [];
    commentList: Comments[] = [];

    modalRef: MDBModalRef;
    constructor(private httpService: HttpService,
                private modalService: MDBModalService) { }
    
    openPostModal(post) {
        this.modalRef = this.modalService.show(PostModalComponent, {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: false,
            ignoreBackdropClick: false,
            class: 'modal-dialog modal-dialog-centered',
            containerClass: 'top',
            animated: true,
            data: {content: post}
        })
    }
    ngOnInit() {
        this.httpService.getPostList().subscribe((response) => {
            this.postList = response
        });
        this.httpService.getUsersList().subscribe((response) => {
            this.userList = response
        });
        this.httpService.getCommentsList().subscribe((response) => {
            this.commentList = response
        });
    }
    checkId() {
        
    }

}