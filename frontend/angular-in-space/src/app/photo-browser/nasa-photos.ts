export interface NasaPhotosObject {
    photos: PhotosObject;
}

export interface PhotosObject {
    page: number;
    pages: number;
    perpage: number;
    total: string;
    photo: PhotoObject[];
}

export interface PhotoObject {
    id: string;
    title: string;
    url_l: string;
    height_l: string;
    width_l: string;
}
