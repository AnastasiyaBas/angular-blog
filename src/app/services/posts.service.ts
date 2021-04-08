import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Posts } from '../modules/interface';
import { ApiUrl } from '../modules/enum';
@Injectable({
    providedIn: 'root'
})

export class PostsService{
    postList: BehaviorSubject<Posts[]> = new BehaviorSubject<Posts[]>([]);
    postsById: Posts[];
    constructor(private http: HttpClient){
        this.getPostList();
    }

    getPostList(): void{
        this.http.get<Posts[]>(`${ApiUrl.BASE}${ApiUrl.POST}?_limit=18`, {})
        .subscribe(resolve => this.postList.next(resolve));
    }
    getPostsById(userId: number): Posts[]{
        return this.postList.getValue().filter(valuePost => valuePost.userId === userId);
    }

    addPost(post: Posts): Observable<Posts>{
        return  this.http.post<Posts>(`${ApiUrl.BASE}${ApiUrl.POST}`, post);
    }
}
