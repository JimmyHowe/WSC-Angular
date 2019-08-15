import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wsc-body',
  styleUrls: ['wsc-body.component.scss'],
  template: `
      <div id="wsc-body">
          <wsc-splash [user]="user"></wsc-splash>
      </div>
  `
})
export class WscBodyComponent implements OnInit {

  user: string = "Jimmy";

  ngOnInit(): void {

  }

}
