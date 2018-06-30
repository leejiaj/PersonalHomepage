import { Component, OnInit } from '@angular/core';
import { COURSEWORKS } from '../mock-coursework'; 
import { CourseworkService } from '../coursework.service';
import { Courseworkstructure } from '../courseworkstructure';

@Component({
  selector: 'app-coursework',
  templateUrl: './coursework.component.html',
  styleUrls: ['./coursework.component.scss']
})
export class CourseworkComponent implements OnInit {

  courseworks : Courseworkstructure[];  
  

  constructor(private courseworkService : CourseworkService) {
   }

  ngOnInit() {
    this.getCourseworks();
  }

  getCourseworks(): void{
    this.courseworkService.getCourseworks()
    .subscribe(courseworks => this.courseworks = courseworks);
  }

}
