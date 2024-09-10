import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { Counter } from './counter.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Counter],
  template: `
    <h1>Counter Example</h1>
    <button (click)="incrementCount()">Increment</button>
    <app-counter [count]="count" />
    <p>If you want to simply update a component, no need to run fancy ngOnChanges stuff. The component will automatically rerender once a input will change.</p>
  `,
})
export class App {
  count = 1;

  incrementCount() {
    this.count++;
  }
}

bootstrapApplication(App);
