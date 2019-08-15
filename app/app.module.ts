import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { WscHeaderModule } from "./wsc-header/wsc-header.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    WscHeaderModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
