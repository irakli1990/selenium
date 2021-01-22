import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetDetectorComponent } from './planet-detector.component';
import { PlanetDetectorRootingModule } from './planet-detector-routing.module';

@NgModule({
    declarations: [PlanetDetectorComponent],
    imports: [CommonModule, SharedModule, PlanetDetectorRootingModule],
    exports: [PlanetDetectorComponent],
})
export class PlanetDetectorModule {}
