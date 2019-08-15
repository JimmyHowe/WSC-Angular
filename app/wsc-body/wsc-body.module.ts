import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { WscBodyComponent } from "./containers/wsc-body/wsc-body.component";

@NgModule({
  declarations: [
    WscBodyComponent
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
