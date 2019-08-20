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
          <div class="wsc-body-detail-area">
              <wsc-suite-detail *ngFor="let suite of suites"
                                [url]="suite.url"
                                (edit)="handleEdit($event)"
                                (delete)="handleDelete($event)"
                                class="wsc-suite-detail"
              ></wsc-suite-detail>
          </div>
      </div>
  `
})
export class WscBodyComponent implements OnInit {

  user: string = "Jimmy";

  suites: TestSuite[] = [];

  ngOnInit(): void {

    this.suites.push(new TestSuite("https://jimmyhowe.com"));
    this.suites.push(new TestSuite("https://agaandola.co.uk"));
    this.suites.push(new TestSuite("https://twilightcandleco.co.uk"));

  }

  handleEdit(event) {

  }

  handleDelete(event) {

    let index = this.suites.findIndex(i => i.url === event);

    this.suites.splice(index, 1)
  }

}
