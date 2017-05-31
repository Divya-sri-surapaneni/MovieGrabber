"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FiltersComponent = (function () {
    function FiltersComponent() {
        this.title = "The filters of filter page";
        this.filters = ["Year", "Genre", "Language"];
    }
    return FiltersComponent;
}());
FiltersComponent = __decorate([
    core_1.Component({
        selector: 'filters',
        template: "\n  <h2>filters<h2>\n  {{ title }}\n  <input type = \"text\"\n  <ul>\n  <li *ngFor = \"#filter of filters\">\n  {{ filter }}\n  </li>\n  </ul>",
    })
], FiltersComponent);
exports.FiltersComponent = FiltersComponent;
//# sourceMappingURL=filters.component.js.map