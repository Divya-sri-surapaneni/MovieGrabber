import { Component } from '@angular/core';
import { FiltersComponent } from './filters.component'

@Component({
  selector: 'my-app',
  template: '<h1>Movies Finder</h1><filters></filters>'
  //directives : [ FiltersComponent ]
})
export class AppComponent  { }

