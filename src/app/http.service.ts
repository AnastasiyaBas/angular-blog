import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
  
@Injectable()
export class HttpService{
  
    constructor(private http: HttpClient){ }
      
    getPostList(){
        return this.http.get<any>('https://jsonplaceholder.typicode.com/posts?_limit=18', {})
        
    }
    getUsersList(){
        return this.http.get<any>('https://jsonplaceholder.typicode.com/users?_limit=3', {})
        
    }
    getCommentsList(){
        return this.http.get<any>('https://jsonplaceholder.typicode.com/comments?_limit=10', {})
        
    }
}