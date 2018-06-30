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
      this.courseworkid = +this.route.snapshot.paramMap.get('id');
      this.getCoursework(this.courseworkid);
    });
  }

  getCoursework(id: number): void{
    this.courseworkService.getCoursework(id)
    .subscribe(coursework => this.coursework = coursework);
  }

}
