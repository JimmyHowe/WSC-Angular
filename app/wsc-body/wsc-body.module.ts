import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { WscBodyComponent } from "./containers/wsc-body/wsc-body.component";
import { WscSplashComponent } from "./components/wsc-splash/wsc-splash.component";

@NgModule({
  declarations: [
    WscBodyComponent,
    WscSplashComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WscBodyComponent
  ]
})
export class WscBodyModule {

  user: string = "Jimmy"

}
