import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaceImageDirective } from './space-image.directive';
import { TickizePipe } from './tickize.pipe';
import { OpacityDirective } from './opacity.directive';

@NgModule({
    declarations: [SpaceImageDirective, TickizePipe, OpacityDirective],
    imports: [CommonModule],
    exports: [SpaceImageDirective, TickizePipe, OpacityDirective],
})
export class SharedModule {}
