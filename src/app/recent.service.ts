import { Injectable } from '@angular/core';
import { Recentstructure } from './recentstructure';
import { RECENTS } from './mock-recent';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecentService {

  constructor() { }

  getRecents(): Observable<Recentstructure[]>{
    return of(RECENTS);
  }

  getRecent(id: number): Observable<Recentstructure>{
    return of(RECENTS.filter(x => x.id === id)[0]);
  }

}