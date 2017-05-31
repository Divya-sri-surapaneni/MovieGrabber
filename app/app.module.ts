import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { FiltersComponent } from './filters.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, FiltersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
