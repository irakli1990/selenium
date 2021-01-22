import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appOpacity]',
})
export class OpacityDirective {
    @Input() distance: number;
    opacityValue = 1.0;

    constructor() {}

    @HostBinding('style.opacity') get opacity(): string {
        console.log(this.distance);
        if (this.distance <= 10) {
            this.opacityValue = 0.0;
            return String(this.opacityValue);
        } else {
            return String(this.opacityValue);
        }
    }
}
