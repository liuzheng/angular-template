import { Routes } from '@angular/router';
import { PageHomeComponent } from "./home"
import { PageNotFoundComponent } from "./not-found"

export const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  // { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) }
  { path: '', component: PageHomeComponent },
  { path: 'home', component: PageHomeComponent },
  { path: '**', component: PageNotFoundComponent }
];
