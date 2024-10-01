import {Component, NgModule, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'my-component',
  encapsulation: ViewEncapsulation.Emulated,
  styleUrls: ['./style-A.css', './style-B.css'],
  template: '...'
})
export class MyComponent {
}

@NgModule({declarations: [MyComponent]})
export class MyModule {
}
