import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface User {
  id: string;
  name: string;
}

@Injectable()
export class UserService {
  httpClient = inject(HttpClient);
  
  getUsers() {
    return this.httpClient.get<User[]>(
      `https://jsonplaceholder.typicode.com/users`
    );
  }

  getComments() {
    return this.httpClient.get<Comments[]>(
      `https://jsonplaceholder.typicode.com/comments`
    );
  }

  getData(): string {
    return 'Real data'
  }
}
