import { Component, Input } from "@angular/core";

@Component({
  selector: 'wsc-splash',
  template: `
    <div>
        Welcome {{ user }}
    </div>
  `
})
export class WscSplashComponent {

  @Input()
  user: string;

  constructor() {
  }
}
