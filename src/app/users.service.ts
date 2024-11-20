import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

export interface SearchConfig {
  userName?: string;
  resultLimit?: number;
}
export interface User {
  id: string;
  name: string;
}

export interface Todos {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface Comments {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  httpClient = inject(HttpClient);

  findUsers({ userName = '', resultLimit = 5 }: SearchConfig) {
    return this.httpClient.get<User[]>(
      `https://jsonplaceholder.typicode.com/users?name_like=^${userName}&_limit=${resultLimit}`
    );
  }

  getTodos() {
    return this.httpClient.get<Todos[]>(
      `https://jsonplaceholder.typicode.com/todos`
    );
  }

  getComments() {
    return this.httpClient.get<Comments[]>(
      `https://jsonplaceholder.typicode.com/comments`
    );
  }
}
