import { Component, Input } from "@angular/core";

@Component({
  selector: 'wsc-splash',
  template: `
      <div>
          Welcome {{ userOrNot() }}
      </div>
  `
})
export class WscSplashComponent {

  @Input()
  user: string;

  userOrNot() {
    if (this.user)
      return this.user;

    return "Random Person";
  }
}
