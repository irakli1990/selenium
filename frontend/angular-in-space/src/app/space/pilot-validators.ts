import { FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

export class PilotValidators {
    static pilotName(formControl: FormControl): { pilotName: true } {
        return !formControl.value || /^[A-Z]/.test(formControl.value)
            ? null
            : { pilotName: true };
    }

    static pilotForbidden(formControl: FormControl): Observable<any> {
        if (!formControl.value) {
            return of(null);
        }
        const url = `${environment.apiUrl}/forbidden-names?name=${formControl.value}`;
        return ajax
            .getJSON<Array<{ name: string }>>(url)
            .pipe(
                map(pilots =>
                    pilots.length > 0 ? { pilotForbidden: true } : null
                )
            );
    }
}
