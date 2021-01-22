import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetDetectorComponent } from './planet-detector.component';

const routes: Routes = [
    { path: 'planet-detector', component: PlanetDetectorComponent },
    { path: '', redirectTo: 'planet-detector', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PlanetDetectorRootingModule {}
