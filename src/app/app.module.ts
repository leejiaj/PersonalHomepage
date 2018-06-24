import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { CourseworkComponent } from './coursework/coursework.component';
import { RecentComponent } from './recent/recent.component';
import { AboutComponent } from './about/about.component';
import { CourseworkDetailComponent } from './coursework-detail/coursework-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseworkComponent,
    RecentComponent,
    AboutComponent,
    CourseworkComponent,
    CourseworkDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
