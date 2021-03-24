import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Users } from '../../modules/interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

    user: any;

    constructor(private usersService: UsersService,
                private route: ActivatedRoute) {}

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
