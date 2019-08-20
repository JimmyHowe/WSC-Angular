import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'wsc-suite-detail',
  template: `
      <div>
          <input type="text" [value]="url" [readOnly]="true">
          <button>
              Test
          </button>
          <button (click)="onDelete($event)">
              Delete
          </button>
      </div>
  `
})
export class WscSuiteDetailComponent {

  @Input()
  url: string;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  delete: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;

  toggleEdit() {
    this.editing = !this.editing;
  }

  onEdit(event) {
    this.edit.emit(this.url);
  }

  onDelete(event) {
    this.delete.emit(this.url)
  }

  onUrlChange() {

  }

}
