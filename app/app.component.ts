import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
      <div class="app">
          <wsc-header></wsc-header>
          <wsc-menu></wsc-menu>
          <wsc-body></wsc-body>
      </div>
  `
})
export class AppComponent {

}
