import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface Data {
    apiKey: string;
    userId: string;
}

@Component({
    selector: 'app-photo-form',
    templateUrl: './photo-form.component.html',
    styleUrls: ['./photo-form.component.css'],
})
export class PhotoFormComponent implements OnInit {
    @Output() formData = new EventEmitter<Data>();
    form: FormGroup;

    constructor() {}

    ngOnInit(): void {
        this.form = new FormGroup({
            apiKey: new FormControl('82a11a655207280d9c295129b1e8f480', {
                validators: [Validators.required],
            }),
            userId: new FormControl('136485307@N06', {
                validators: [Validators.required],
            }),
        });
    }

    send(): void {
        this.formData.emit(this.form.value);
    }
}
