import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseworkComponent } from './coursework/coursework.component';
import { CourseworkDetailComponent } from './coursework-detail/coursework-detail.component'
import { RecentComponent } from './recent/recent.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'coursework', component: CourseworkComponent},
  { path: 'courseworkdetail/:id', component: CourseworkDetailComponent },
  { path: 'recent', component: RecentComponent },
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
