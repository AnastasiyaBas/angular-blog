import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Posts } from '../modules/interface';
import { ApiUrl } from '../modules/enum';
@Injectable({
    providedIn: 'root'
})

export class PostsService{
    constructor(private http: HttpClient){}

    getPostList(): Observable<Posts[]>{
        return this.http.get<Posts[]>(`${ApiUrl.BASE}${ApiUrl.POST}?_limit=18`, {});

    }
}
