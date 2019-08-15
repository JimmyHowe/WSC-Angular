import { Component, OnInit } from '@angular/core';

class MenuItem {

  text: string;

  url: string;

  constructor(text: string, url: string) {
    this.text = text;
    this.url = url;
  }
}

@Component({
  selector: 'wsc-menu',
  styleUrls: ['wsc-menu.component.scss'],
  template: `
      <div>
          <ul>
              <li *ngFor="let menu of menus">
                  <a [href]="menu.url">{{ menu.text }}</a>
              </li>
          </ul>
      </div>
  `
})
export class WscMenuComponent implements OnInit {

  menus: MenuItem[] = [];

  ngOnInit(): void {
    this.menus.push(new MenuItem("Home", "#"));
    this.menus.push(new MenuItem("Help", "#"));
  }

}
