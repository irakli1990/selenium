import { Component, OnInit, ViewChild } from '@angular/core';
import { BomberShip } from '../bomber-ship';
import { FighterShip } from '../fighter-ship';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';
import { SpaceShip } from '../space-ship';
import { SpaceShipService } from '../space-ship.service';

@Component({
    selector: 'app-hangar',
    templateUrl: './hangar.component.html',
    styleUrls: ['./hangar.component.css'],
})
export class HangarComponent implements OnInit {
    @ViewChild(PilotRoomComponent) pilotRoom: PilotRoomComponent;
    spaceShips = this.spaceShipService.hangarShips;
    selectedPilot: Pilot = null;

    constructor(private spaceShipService: SpaceShipService) {}

    ngOnInit(): void {}

    deassignPilot(spaceShip: SpaceShip): void {
        this.pilotRoom.pilotReturn(spaceShip.pilot);
        spaceShip.pilot = null;
    }

    assignPilot(spaceShip: SpaceShip) {
        spaceShip.pilot = this.selectedPilot;
        this.pilotRoom.pilotLeave();
    }
}
