import { Pilot } from './pilot';

export class SpaceShip {
    modelName: string;
    imageUrl: string;
    pilot: Pilot;
    health = 100;
    activeShields = true;
    activeWeapons = true;

    constructor(modelName: string, imageUrl: string, pilot: Pilot) {
        this.modelName = modelName;
        this.imageUrl = imageUrl;
        this.pilot = pilot;
    }
}
