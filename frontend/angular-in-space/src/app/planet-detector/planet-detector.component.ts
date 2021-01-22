import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-planet-detector',
    templateUrl: './planet-detector.component.html',
    styleUrls: ['./planet-detector.component.css'],
})
export class PlanetDetectorComponent implements OnInit {
    @ViewChild('gameElement', { static: true }) gameElement: ElementRef<
        HTMLDivElement
    >;
    targetPosition: { x: number; y: number };
    currentPosition: { x: number; y: number } = { x: 1, y: 1 };
    distance: number;

    constructor() {}

    ngOnInit(): void {
        const dimensions = this.gameElement.nativeElement.getBoundingClientRect();
        this.distance = this.calculcateDistance();
        this.targetPosition = {
            x: Math.floor(Math.random() * dimensions.width),
            y: Math.floor(Math.random() * dimensions.height),
        };
    }

    update(target: { x: number; y: number }): void {
        this.currentPosition.x = target.x;
        this.currentPosition.y = target.y;
        this.distance = this.calculcateDistance();
    }

    calculcateDistance(): number {
        const dx = this.currentPosition?.x - this.targetPosition?.x;
        const dy = this.currentPosition?.y - this.targetPosition?.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
