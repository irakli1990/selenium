import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoComponent } from './photo/photo.component';

const routes: Routes = [
    { path: 'photo-browser', component: PhotoComponent },
    { path: '', redirectTo: 'photo-browser', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PhotoBrowserRoutingModule {}
