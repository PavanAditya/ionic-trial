import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SetThemeService {
  private theme: BehaviorSubject<string>;

  constructor() {
    this.theme = new BehaviorSubject('dark-theme');
  }

  public setActiveTheme(val): void {
    this.theme.next(val);
  }

  public getActiveTheme(): Observable<string> {
    return this.theme.asObservable();
  }
}
