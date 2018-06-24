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
    //return of(COURSEWORKS[id]);
    //console.log(COURSEWORKS.filter(x => x.id === id)[0]);
    //console.log(COURSEWORKS[0]);
    //console.log(id);
    //console.log("hello");
    return of(COURSEWORKS.filter(x => x.id === id)[0]);
  }
}
