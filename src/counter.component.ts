import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
   <div>{{count}}</div>
  `,
})
export class Counter implements OnChanges {
  @Input({ required: true }) count: number = 0;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Component changed!')
  }
}
