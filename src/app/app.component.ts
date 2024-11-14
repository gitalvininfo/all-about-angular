import {
  Component,
  signal,
} from '@angular/core';
import { ChildComponentComponent } from './child-component/child-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  firstName = signal<string>("");
  lastName = signal<string>("");
  
  setName(): void {
    this.firstName.set("Alvin");
  }

  setLastName(): void {
    this.lastName.set("Yanson");
  }
}
