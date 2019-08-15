import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { WscHeaderComponent } from "./containers/wsc-header/wsc-header.component";

@NgModule({
  declarations: [
    WscHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WscHeaderComponent
  ]
})
export class WscHeaderModule {
}
