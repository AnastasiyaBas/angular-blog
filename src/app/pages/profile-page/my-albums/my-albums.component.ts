import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { Albums, Photos } from 'src/app/modules/interface';
import { AlbumsService } from 'src/app/services/albums.service';
import { SliderComponent } from 'src/app/shared/dialog/slider/slider.component';

@Component({
  selector: 'app-my-albums',
  templateUrl: './my-albums.component.html',
  styleUrls: ['./my-albums.component.scss']
})
export class MyAlbumsComponent implements OnInit {
    albumList: Albums[] = [];
    photos: Photos[] = [];
    modalRef: MDBModalRef;

    constructor( private albumsService: AlbumsService,
                 private route: ActivatedRoute,
                 private modalService: MDBModalService) { }

    private SliderModalOptions = {
        backdrop: true,
        keyboard: true,
        focus: true,
        show: false,
        ignoreBackdropClick: false,
        class: 'modal-dialog modal-dialog-centered',
        containerClass: 'top',
        animated: true,
        data: {}
    };

    openSliderModal(albumId: number): void {
        this.albumsService.getPhotos(albumId).subscribe({
            next: (resolve) => {
                this.photos = resolve;
                const SliderModalOptions = Object.assign(
                    {},
                    this.SliderModalOptions,
                    {data: {
                        slides: this.photos
                    }}
                );
                this.modalRef = this.modalService.show(SliderComponent, SliderModalOptions);
            },
            error: () => console.log('error')
        });
    }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.albumsService.albumList.subscribe(albums => {
                if (!albums) {
                    return;
                }
                this.albumList = this.albumsService.getAlbums(+params.id);
            });
        });
    }

}
