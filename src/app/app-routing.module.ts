import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {appRoutes} from "../environments/environment";

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    {enableTracing: false} // <-- debugging purposes only
    // {enableTracing: !environment.production} // <-- debugging purposes only
  )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
