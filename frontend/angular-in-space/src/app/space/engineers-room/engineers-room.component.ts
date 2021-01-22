import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { OrderFormValue } from '../order-form-value';
import { SpaceShipType } from '../space-ship-type.enum';
import { SpaceShipService } from '../space-ship.service';

interface ShipType {
    label: string;
    value: SpaceShipType;
}

@Component({
    selector: 'app-engineers-room',
    templateUrl: './engineers-room.component.html',
    styleUrls: ['./engineers-room.component.css'],
})
export class EngineersRoomComponent implements OnInit {
    isProducing = false;
    spaceShipTypes: ShipType[] = [
        { label: 'Myśliwiec', value: SpaceShipType.Fighter },
        { label: 'Bombowiec', value: SpaceShipType.Bomber },
    ];

    form = new FormGroup({
        shipType: new FormControl(SpaceShipType.Fighter, {
            validators: [Validators.required],
        }),
        shipCount: new FormControl(1, {
            validators: [
                Validators.required,
                Validators.min(1),
                Validators.max(5),
            ],
        }),
    });

    shipsCount = this.spaceShipService.hangarShips.pipe(
        map(ships => ships.length)
    );

    constructor(private spaceShipService: SpaceShipService) {}

    ngOnInit(): void {}

    orderSpaceShips(formValues: OrderFormValue): void {
        this.isProducing = true;
        this.spaceShipService.produceShips(formValues).subscribe({
            complete: () => (this.isProducing = false),
        });
    }
}
