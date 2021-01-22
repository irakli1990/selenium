import { PhotosObject, NasaPhotosObject, PhotoObject } from './nasa-photos';
export class NasaPhotos {
    photos: Photos;

    constructor(attrs: Partial<NasaPhotosObject> = {}) {
        this.photos = attrs.photos;
    }
}

export class Photos {
    page: number;
    pages: number;
    perpage: number;
    total: string;
    photo: Photo[];

    constructor(attrs: Partial<PhotosObject> = {}) {
        this.page = attrs.page;
        this.pages = attrs.pages;
        this.perpage = attrs.perpage;
        this.total = attrs.total;
        this.photo = attrs.photo;
    }
}

export class Photo {
    id: string;
    title: string;
    url_l: string;
    height_l: string;
    width_l: string;

    constructor(attrs: Partial<PhotoObject> = {}) {
        this.id = attrs.id;
        this.title = attrs.title;
        this.url_l = attrs.url_l;
        this.height_l = attrs.height_l;
        this.width_l = attrs.width_l;
    }
}
