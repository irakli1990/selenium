import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DecoderService {
    constructor() {}

    generateCode(): number[] {
        const randomNumbers: number[] = [];
        for (let i = 0; i < 4; i++) {
            randomNumbers[i] = Math.floor(Math.random() * 6);
        }
        return randomNumbers;
    }
}
