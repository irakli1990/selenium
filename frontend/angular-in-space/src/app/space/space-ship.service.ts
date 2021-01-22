import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { BomberShip } from './bomber-ship';
import { FighterShip } from './fighter-ship';
import { OrderFormValue } from './order-form-value';
import { SpaceShip } from './space-ship';
import { SpaceShipType } from './space-ship-type.enum';

@Injectable({
    providedIn: 'root',
})
export class SpaceShipService {
    constructor() {}
    static shipProductionTime = 2000;
    hangarShips = new BehaviorSubject<SpaceShip[]>([]);

    produceShips(formValues: OrderFormValue): Observable<SpaceShip> {
        const shipClass =
            formValues.shipType === SpaceShipType.Fighter
                ? FighterShip
                : BomberShip;
        return interval(SpaceShipService.shipProductionTime).pipe(
            map(() => new shipClass()),
            take(formValues.shipCount),
            tap(spaceShip =>
                this.hangarShips.next([
                    ...this.hangarShips.getValue(),
                    spaceShip,
                ])
            )
        );
    }

    removeShip(shipIndex: number): void {
        const ships = [...this.hangarShips.getValue()];
        ships.splice(shipIndex, 1);
        this.hangarShips.next(ships);
    }
}
