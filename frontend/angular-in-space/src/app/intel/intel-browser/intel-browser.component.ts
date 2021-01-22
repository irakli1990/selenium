import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: 'app-intel-browser',
    templateUrl: './intel-browser.component.html',
    styleUrls: ['./intel-browser.component.css'],
})
export class IntelBrowserComponent implements OnInit {
    constructor(private sanitizer: DomSanitizer) {}
    options = [
        { name: 'ESA', url: 'http://www.esa.int/ESA' },
        { name: 'POLSA', url: 'https://www.polsa.gov.pl/pl' },
    ];

    source: SafeResourceUrl = null;

    ngOnInit(): void {}

    selectSource(value: string): void {
        this.source = value
            ? this.sanitizer.bypassSecurityTrustResourceUrl(value)
            : null;
    }
}
