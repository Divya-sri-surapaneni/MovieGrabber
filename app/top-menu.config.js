"use strict";
exports.routerConfig = [
    {
        path: 'home',
        component: AppComponent
    },
    {
        path: 'filters',
        component: FiltersComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
//# sourceMappingURL=top-menu.config.js.map