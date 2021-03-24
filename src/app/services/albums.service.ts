import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
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

    getAlbums(postId): Albums[] {
        return this.albumList.getValue().filter(valueAlbum => valueAlbum.userId === postId);
    }
}
