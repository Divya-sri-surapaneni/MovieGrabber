export const routerConfig: Routes = [
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