import { Component } from '@angular/core';
import { MyService } from '../my-service.service';

@Component({
  selector: 'app-test',
  template: `
    <button (click)="callService()">Click Me</button>
  `
})
export class TestComponent {
  constructor(private myService: MyService) {}

  callService(): void {
    this.myService.toDo('Hello, from the service!');
  }
}
