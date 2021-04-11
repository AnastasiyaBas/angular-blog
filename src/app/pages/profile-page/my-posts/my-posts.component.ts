import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/app/modules/interface';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.scss']
})
export class MyPostsComponent implements OnInit {
    userId: number;
    postList: Posts[] = [];
    id = 300;
    postForm = this.formBuilder.group({
        title: ['', Validators.required],
        body: ['', Validators.required]
    });
    constructor(private postsService: PostsService,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.postsService.postList.subscribe(posts => {
                if (!posts) {
                    return;
                }
                this.postList = this.postsService.getPostsById(+params.id);
                this.userId = +params.id;
            });
        });
    }

    submit(): void {
        const formData: any = new FormData();
        formData.append('title', this.postForm.get('title').value);
        formData.append('body', this.postForm.get('body').value);
        formData.append('userId', this.userId);
        this.postsService.addPost(formData).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        );
        this.postForm.reset();

        this.postList.push({
            userId: this.userId,
            title: formData.get('title'),
            body: formData.get('body')
        });
    }

}

