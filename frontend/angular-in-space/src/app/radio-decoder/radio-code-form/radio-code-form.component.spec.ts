import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioCodeFormComponent } from './radio-code-form.component';

describe('RadioCodeFormComponent', () => {
    let component: RadioCodeFormComponent;
    let fixture: ComponentFixture<RadioCodeFormComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [RadioCodeFormComponent],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(RadioCodeFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
