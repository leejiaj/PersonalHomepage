import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Courseworkstructure } from '../courseworkstructure';
import { CourseworkService } from '../coursework.service'

@Component({
  selector: 'app-coursework-detail',
  templateUrl: './coursework-detail.component.html',
  styleUrls: ['./coursework-detail.component.scss']
})
export class CourseworkDetailComponent implements OnInit {

  courseworkid;
  coursework : Courseworkstructure;

  constructor(private route: ActivatedRoute, 
    private courseworkService : CourseworkService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      //console.log(params) //log the entire params object
      //console.log(params['id']) //log the value of id
      this.courseworkid = +this.route.snapshot.paramMap.get('id');
      //console.log(this.courseworkid);
      this.getCoursework(this.courseworkid);
    });
  }

  getCoursework(id: number): void{
    this.courseworkService.getCoursework(id)
    .subscribe(coursework => this.coursework = coursework);
    //console.log(id);
    //console.log(this.coursework.id);
    //console.log(this.coursework.coursename);
  }

}
