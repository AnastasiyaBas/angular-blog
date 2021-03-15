import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Albums } from 'src/app/modules/interface';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-my-albums',
  templateUrl: './my-albums.component.html',
  styleUrls: ['./my-albums.component.scss']
})
export class MyAlbumsComponent implements OnInit {
    albumList: Albums[] = [];

    constructor( private albumsService: AlbumsService,
                 private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.albumsService.albumList.subscribe(albums => {
                if (!albums) {
                    return;
                }
                this.albumList = this.albumsService.getAlbums(+params.id);
                console.log(this.albumList);
            });
        });
    }

}
