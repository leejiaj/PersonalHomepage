import { Component, OnInit } from '@angular/core';
import { RECENTS } from '../mock-recent'; 
import { RecentService } from '../recent.service';
import { Recentstructure } from '../recentstructure';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.scss']
})
export class RecentComponent implements OnInit {

  recents : Recentstructure[];  

  constructor(private recentService : RecentService ) { }

  ngOnInit() {
    this.getRecents();
  }

  getRecents(): void{
    this.recentService.getRecents()
    .subscribe(recents => this.recents = recents);
  }

}
