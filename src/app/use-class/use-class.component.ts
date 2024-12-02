import { Component, inject } from '@angular/core';
import { User, UserService } from '../user.service';

@Component({
  selector: 'app-use-class',
  standalone: true,
  imports: [],
  templateUrl: './use-class.component.html',
  styleUrl: './use-class.component.scss',
  providers: [{ provide: UserService, useClass: UserService }],
})
export class UseClassComponent {
  userService = inject(UserService);
  users: User[] = [];

  constructor() {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
      error: () => {
        console.log('error');
      },
      complete: () => {
        console.log('HTTP request completed.');
      },
    });
  }
}
