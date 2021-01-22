import { Data } from '../photo-form/photo-form.component';
import { PhotoService } from '../photo.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NasaPhotos, Photo } from '../photo';

@Component({
    selector: 'app-photo',
    templateUrl: './photo.component.html',
    styleUrls: ['./photo.component.css'],
})
export class PhotoComponent implements OnInit {
    $subject: Subject<NasaPhotos>;
    photos: Photo[] = [];
    page: number;

    constructor(private photoService: PhotoService) {
        this.$subject = new Subject<NasaPhotos>();
    }

    ngOnInit(): void {
        this.page = 1;
        this.$subject.subscribe(val => (this.photos = [...val.photos.photo]));
    }

    increment(): void {
        this.page++;
    }

    send(data: Data): void {
        this.photoService
            .getPhotos(data.userId, data.apiKey, this.page, 10)
            .subscribe(
                next => this.$subject.next(next),
                error => alert(error.message),
                () => this.increment()
            );
    }
}
