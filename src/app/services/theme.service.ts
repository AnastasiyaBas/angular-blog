import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ThemeObject } from '../modules/interface';

@Injectable({
    providedIn: 'root'
})

export class ThemingService {

    initialSetting: ThemeObject = {
      oldValue: null,
      newValue: 'light-theme'
    };

    themeSelection: BehaviorSubject<ThemeObject> =  new BehaviorSubject<ThemeObject>(this.initialSetting);

    constructor() { }

    setTheme(theme: string): void {

      this.themeSelection.next(
        {
          oldValue: this.themeSelection.value.newValue,
          newValue: theme
        });
    }

    themeChanges(): Observable<ThemeObject> {
      return this.themeSelection.asObservable();
    }
  }
