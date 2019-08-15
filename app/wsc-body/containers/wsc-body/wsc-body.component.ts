import { Component, OnInit } from '@angular/core';

class TestSuite {

  public url: string;

  constructor(url: string) {
    this.url = url;
  }

}

@Component({
  selector: 'wsc-body',
  styleUrls: ['wsc-body.component.scss'],
  template: `
      <div id="wsc-body">
          <wsc-splash [user]="user"></wsc-splash>
          <wsc-suite-detail *ngFor="let suite of suites" [url]="suite.url"></wsc-suite-detail>
      </div>
  `
})
export class WscBodyComponent implements OnInit {

  user: string = "Jimmy";

  suites: TestSuite[] = [];

  ngOnInit(): void {

    this.suites.push(new TestSuite("https://jimmyhowe.com"))

  }

}
