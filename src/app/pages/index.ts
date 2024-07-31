import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PluginModule } from "../plugins";

import { PageHomeComponent } from "./home"
import { PageNotFoundComponent } from "./not-found"
export { AppRootComponent } from "./root/root.component"

export const PageRoutes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    PluginModule,
    RouterModule.forRoot(
      PageRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
  ],
  exports: [
    RouterModule,
  ],
})
export class PageModule {
}
