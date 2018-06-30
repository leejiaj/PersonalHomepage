import { Injectable } from '@angular/core';
import { Courseworkstructure } from './courseworkstructure';
import { COURSEWORKS } from './mock-coursework';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseworkService {

  constructor() { }

  getCourseworks(): Observable<Courseworkstructure[]>{
    return of(COURSEWORKS);
  }

  getCoursework(id: number): Observable<Courseworkstructure>{
    return of(COURSEWORKS.filter(x => x.id === id)[0]);
  }
}
