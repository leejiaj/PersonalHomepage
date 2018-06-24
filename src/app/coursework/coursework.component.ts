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

  // testMethod(){
  //   console.log("hello");
  //   console.log(this.courseworks);
  // }
  

  constructor(private courseworkService : CourseworkService) {
    // this.testMethod();
   }

  ngOnInit() {
    // this.testMethod();
    this.getCourseworks();
  }

  getCourseworks(): void{
    this.courseworkService.getCourseworks()
    .subscribe(courseworks => this.courseworks = courseworks);
  }

}
