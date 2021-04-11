import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable} from 'rxjs';
import { Albums, Photos } from '../modules/interface';
import { ApiUrl } from '../modules/enum';
@Injectable({
    providedIn: 'root'
})

export class AlbumsService{
    albumList: BehaviorSubject<Albums[]> = new BehaviorSubject<Albums[]>([]);
    photoList: Photos[] = [];
    constructor(private http: HttpClient){
        this.getAlbumList();
    }

    getAlbumList(): void {
        this.http.get<Albums[]>(`${ApiUrl.BASE}${ApiUrl.ALBUM}`, {})
        .subscribe(resolve => this.albumList.next(resolve));
    }

    getAlbums(postId: number): Albums[] {
        return this.albumList.getValue().filter(valueAlbum => valueAlbum.userId === postId);
    }

    getPhotos(albumId: number): Observable<Photos[]> {
        return this.http.get<Photos[]>(`${ApiUrl.BASE}${ApiUrl.ALBUM}/${albumId}${ApiUrl.PHOTO}`, {});
    }
}
