import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
   <div>{{count}}</div>
  `,
})
export class Counter {
  @Input({ required: true }) count: number = 0;
}
