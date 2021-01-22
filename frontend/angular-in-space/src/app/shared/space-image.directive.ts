import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appSpaceImage]',
})
export class SpaceImageDirective {
    zoom = 1.0;

    constructor() {}

    @HostBinding('style.transform') get scale(): string {
        return `scale(${this.zoom})`;
    }

    @HostListener('mousemove') zoomIn(): void {
        this.zoom += 0.005;
    }

    @HostListener('mouseout') zoomOut(): void {
        this.zoom = 1.0;
    }
}
