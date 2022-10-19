import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularRatingBarComponent } from './angular-rating-bar/angular-rating-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularRatingBarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
