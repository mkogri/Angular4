import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FilterPipe } from './filter.pipe';
import {Item as UnderComponent} from './item' ;


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    UnderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
