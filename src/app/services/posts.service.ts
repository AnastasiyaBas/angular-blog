import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Posts {
    userId: number;
    title: string;
    body: string;
    id?: number;
}
@Injectable({
    providedIn: 'root'
})

export class PostsService{
    constructor(private http: HttpClient){}

    getPostList(): Observable<Posts[]>{
        return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts?_limit=18', {});

    }
}
