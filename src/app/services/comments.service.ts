import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';

export interface Comments {
    id: number;
    postId: number;
    name: string;
    body: string;
}

@Injectable({
    providedIn: 'root'
})

export class CommentsService{
    comment: any;
    commentList: BehaviorSubject<Comments[]> = new BehaviorSubject<Comments[]>([]);
    constructor(private http: HttpClient){
        this.getCommentList();
    }

    getCommentList(): void {
        this.http.get<Comments[]>('https://jsonplaceholder.typicode.com/comments?_limit=10', {})
        .subscribe(resolve => this.commentList.next(resolve));

    }
    getComments(postId): Comments[] {
        return this.commentList.getValue().filter(valueComment => valueComment.postId === postId);
    }

}
