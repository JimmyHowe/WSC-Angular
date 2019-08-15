import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { WscHeaderModule } from "./wsc-header/wsc-header.module";
import { WscMenuModule } from "./wsc-menu/wsc-menu.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    WscHeaderModule,
    WscMenuModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
