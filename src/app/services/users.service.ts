import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
import { ApiUrl } from '../modules/enum';
import { Users } from '../modules/interface';
@Injectable({
    providedIn: 'root'
})
export class UsersService{
    userList: BehaviorSubject<Users[]> = new BehaviorSubject<Users[]>([]);

    constructor(private http: HttpClient){
        this.getUsersList();
    }

    getUsersList(): void {
        this.http.get<Users[]>(`${ApiUrl.BASE}${ApiUrl.USER}?_limit=3`, {})
        .subscribe(resolve => {
            this.userList.next(resolve);
        });
    }

    getUser(userId: number): Users {
        return this.userList.getValue().find(valueUser => valueUser.id === userId);
    }
}
