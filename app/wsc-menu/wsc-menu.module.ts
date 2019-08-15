import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { WscMenuComponent } from "./containers/wsc-menu/wsc-menu.component";

@NgModule({
  declarations: [
    WscMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    WscMenuComponent
  ]
})
export class WscMenuModule {
}
