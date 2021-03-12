import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
import { ApiUrl } from '../modules/enum';

export interface Users {
    id: number;
    name: string;
    website: string;
    email: string;
    city?: string;
}

@Injectable({
    providedIn: 'root'
})
export class UsersService{
    // user: Users;
    userList: BehaviorSubject<Users[]> = new BehaviorSubject<Users[]>([]);
    apiUrl = 'https://jsonplaceholder.typicode.com';
    constructor(private http: HttpClient){
        this.getUsersList();
    }
    // getUserById(userId: number): void {
    //     this.http.get(`${this.apiUrl}/users/${userId}`, {});
    // }

    getUsersList(): void {
        this.http.get<Users[]>(`${this.apiUrl}${ApiUrl.USER}?_limit=3`, {})
        .subscribe(resolve => {
            console.log('object');
            this.userList.next(resolve)
        });
    }

    getUser(userId): Users {
        return this.userList.getValue().find(valueUser => valueUser.id === userId);
    }
}
