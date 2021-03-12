import { Component, OnInit } from '@angular/core';
import { UsersService, Users } from '../../../services/users.service';
import { PostsService, Posts} from '../../../services/posts.service';
import { PostModalComponent } from '../../../post-modal/post-modal.component';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { Comments, CommentsService } from 'src/app/services/comments.service';
@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.scss'],
    providers: [PostsService]
})
export class PostComponent implements OnInit {
    user: Users;
    postList: Posts[] = [];
    commentList: Comments[] = [];
    modalRef: MDBModalRef;
    constructor(private postsService: PostsService,
                private usersService: UsersService,
                private commentsService: CommentsService,
                private modalService: MDBModalService) { }

    openPostModal(post: Posts): void {
        this.user = this.usersService.getUser(post.userId);
        console.log(this.user);
        this.commentList = this.commentsService.getComments(post.userId);
        this.modalRef = this.modalService.show(PostModalComponent, {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: false,
            ignoreBackdropClick: false,
            class: 'modal-dialog modal-dialog-centered',
            containerClass: 'top',
            animated: true,
            data: {content: post, user: this.user, commentList: this.commentList}
        });

    }
    ngOnInit(): void{
        this.postsService.getPostList().subscribe((responce) => {
            this.postList = responce;
        });
    }
}
