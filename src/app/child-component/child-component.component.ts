import { Component, effect, input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.scss'
})
export class ChildComponentComponent {
  firstName = input<string>();
  lastName = input.required<string>();

  constructor() {
    effect(() => {
      console.log(this.firstName());
      console.log(this.lastName());
    });
  }

}
