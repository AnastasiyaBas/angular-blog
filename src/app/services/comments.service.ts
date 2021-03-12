import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
import { Comments } from '../modules/interface';
import { ApiUrl } from '../modules/enum';

@Injectable({
    providedIn: 'root'
})

export class CommentsService{
    comment: Comments;
    commentList: BehaviorSubject<Comments[]> = new BehaviorSubject<Comments[]>([]);
    constructor(private http: HttpClient){
        this.getCommentList();
    }

    getCommentList(): void {
        this.http.get<Comments[]>(`${ApiUrl.BASE}${ApiUrl.COMMENT}?_limit=10`, {})
        .subscribe(resolve => this.commentList.next(resolve));

    }
    getComments(postId): Comments[] {
        return this.commentList.getValue().filter(valueComment => valueComment.postId === postId);
    }

}
