import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { from } from 'rxjs';
import {ServerComponent} from './server/server.component';
import { PracticeComponent } from './practice/practice.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
