import { Component } from '@angular/core';
@Component({
  selector: 'filters',
  template: `
  <h2>filters<h2>
  {{ title }}
  <input type = "text"
  <ul>
  <li *ngFor = "#filter of filters">
  {{ filter }}
  </li>
  </ul>`,
})
export class FiltersComponent  {
    title = "The filters of filter page"
    filters = ["Year","Genre","Language"];

 }