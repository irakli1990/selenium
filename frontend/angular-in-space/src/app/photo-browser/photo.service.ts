import { NasaPhotosObject } from './nasa-photos';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { NasaPhotos } from './photo';

@Injectable({
    providedIn: 'root',
})
export class PhotoService {
    constructor(private http: HttpClient) {}

    getPhotos(
        userId: string,
        apiKey: string,
        page: number,
        perPage: number,
        method = 'flickr.people.getPhotos',
        format = 'json',
        extras = 'url_l',
        nojsoncallback = '1'
    ): Observable<NasaPhotos> {
        const params = {
            user_id: String(userId),
            api_key: String(apiKey),
            page: String(page),
            per_page: String(perPage),
            extras,
            format,
            method,
            nojsoncallback,
        };
        console.log(params);
        return this.http
            .get<NasaPhotosObject>(`https://api.flickr.com/services/rest`, {
                params,
                headers: {
                    Accept: 'application/json',
                },
            })
            .pipe(
                map(photos => {
                    console.log(photos);
                    return new NasaPhotos(photos);
                })
            );
    }
}
