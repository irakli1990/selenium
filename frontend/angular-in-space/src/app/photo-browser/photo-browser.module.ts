import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoComponent } from './photo/photo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotoBrowserRoutingModule } from './photo-browser.routing.module';

@NgModule({
    declarations: [PhotoFormComponent, PhotoComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PhotoBrowserRoutingModule,
        HttpClientModule,
    ],
})
export class PhotoBrowserModule {}
