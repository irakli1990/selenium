import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioDecoderRoutingModule } from './radio-decoder-routing.module';
import { DecoderComponent } from './decoder/decoder.component';
import { RadioCodeFormComponent } from './radio-code-form/radio-code-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [DecoderComponent, RadioCodeFormComponent],
    imports: [CommonModule, RadioDecoderRoutingModule, ReactiveFormsModule],
})
export class RadioDecoderModule {}
