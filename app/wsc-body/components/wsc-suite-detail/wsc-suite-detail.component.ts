import { Component, Input } from "@angular/core";

@Component({
  selector: 'wsc-suite-detail',
  template: `
      <div class="wsc-suite-detail">
          {{ url }}
      </div>
  `
})
export class WscSuiteDetailComponent {

  @Input()
  url: string;

}
