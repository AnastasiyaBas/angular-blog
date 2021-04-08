import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { PostsService } from '../../services/posts.service';
import { PostModalComponent } from '../../shared/dialog/post-modal/post-modal.component';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { CommentsService } from 'src/app/services/comments.service';
import { Comments, Posts, Users } from 'src/app/modules/interface';
import { ActivatedRoute, NavigationEnd, ResolveEnd, Router, RouterEvent } from '@angular/router';
@Component({
    selector: 'app-post',
    templateUrl: './post-page.component.html',
    styleUrls: ['./post-page.component.scss'],
    providers: [PostsService]
})
export class PostPageComponent implements OnInit {
    user: Users;
    postList: any;
    commentList: Comments[] = [];
    modalRef: MDBModalRef;
    constructor(private postsService: PostsService,
                private usersService: UsersService,
                private commentsService: CommentsService,
                private modalService: MDBModalService,
                private router: Router) { }

    private PostModalOptions = {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: 'modal-dialog modal-dialog-centered',
        containerClass: 'top',
        animated: true,
        data: {}
    };

    openPostModal(post: Posts): void {
        this.user = this.usersService.getUser(post.userId);
        this.commentList = this.commentsService.getComments(post.userId);

        const PostModalOptions = Object.assign(
            {},
            this.PostModalOptions,
            {data: {
                content: post,
                user: this.user,
                commentList: this.commentList
            }}
        );

        this.modalRef = this.modalService.show(PostModalComponent, PostModalOptions);

        this.router.events.subscribe((event: RouterEvent) => {
            if (ResolveEnd) {
                // console.log(ResolveEnd);
                // this.modalService.close();
            }
        });
    }
    ngOnInit(): void{
        this.postsService.postList.subscribe(posts => {
            if (!posts) {
                return;
            }
            this.postList = posts;
        });
    }
}
