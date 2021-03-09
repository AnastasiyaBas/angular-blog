import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';

export interface Users {
    id: number;
    name: string;
}

@Injectable({
    providedIn: 'root'
})
export class UsersService{
    user: any;
    userList: BehaviorSubject<Users[]> = new BehaviorSubject<Users[]>([]);

    constructor(private http: HttpClient){}

    getUsersList(): void{
        this.http.get<Users[]>('https://jsonplaceholder.typicode.com/users?_limit=3', {})
        .subscribe(resolve => this.userList.next(resolve));
    }

    getUser(postId): Users {
        return this.userList.getValue().find(valueUser => valueUser.id === postId);
    }
}
