import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    user: any;
    constructor(private usersService: UsersService,
                private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.usersService.userList.subscribe(users => {
                if (!users) {
                    return;
                }
                this.user = this.usersService.getUser(+params.id);
            });
        });
    }

}
