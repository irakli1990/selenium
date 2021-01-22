import { Component, OnInit } from '@angular/core';
import { DecoderService } from '../decoder.service';
import { Subject } from 'rxjs';
import { Code } from '../radio-code-form/radio-code-form.component';

@Component({
    selector: 'app-decoder',
    templateUrl: './decoder.component.html',
    styleUrls: ['./decoder.component.css'],
})
export class DecoderComponent implements OnInit {
    constructor(private decoderService: DecoderService) {
        this.formCode = new Subject<number[]>();
    }

    randomNumbers: number[] = [];
    formCode: Subject<number[]>;

    ngOnInit(): void {
        this.randomNumbers = this.decoderService.generateCode();
    }

    addCode(data: Code): void {
        console.log(data);
        const codeArray: number[] = [];
        for (const x of data.code) {
            codeArray.push(Number(x));
        }
        console.log(codeArray);
        this.formCode.next(codeArray);
        this.compare();
    }

    compare(): void {
        this.formCode.subscribe(value => new Array(value));
    }
}
