import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { WscBodyComponent } from "./containers/wsc-body/wsc-body.component";
import { WscSplashComponent } from "./components/wsc-splash/wsc-splash.component";
import { WscSuiteDetailComponent } from "./components/wsc-suite-detail/wsc-suite-detail.component";

@NgModule({
  declarations: [
    WscBodyComponent,
    WscSplashComponent,
    WscSuiteDetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WscBodyComponent
  ]
})
export class WscBodyModule {

}
