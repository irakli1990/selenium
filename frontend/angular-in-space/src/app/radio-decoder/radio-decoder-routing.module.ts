import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DecoderComponent } from './decoder/decoder.component';

const routes: Routes = [
    { path: 'decoder', component: DecoderComponent },
    { path: '', redirectTo: 'decoder', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RadioDecoderRoutingModule {}
