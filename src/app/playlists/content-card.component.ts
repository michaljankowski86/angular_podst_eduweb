import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-content-card',
  template: `
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">{{ title }}</h4>
        <p class="card-text">{{ content }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      h4 {
        color: red;
      }
    `,
  ],
  // inputs: ['title', 'content'],
})
export class ContentCardComponent implements OnInit {
  @Input()
  title = '';

  @Input()
  content = '';

  constructor() {}

  ngOnInit(): void {}
}
