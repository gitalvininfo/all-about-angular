import {
  ChangeDetectionStrategy,
  Component,
  inject
} from '@angular/core';
import { Comments, UserService } from './user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  comments: Comments[] = [];
  userService = inject(UserService);
  
  constructor() {}

  ngOnInit(): void {
    this.userService.getComments().subscribe(data => {
      console.log(data);
      this.comments = data;
    })
  }
}
