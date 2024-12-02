import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

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


export class UserService {

  httpClient = inject(HttpClient);


  getComments() {
    return this.httpClient.get<Comments[]>(
      `https://jsonplaceholder.typicode.com/comments`
    );
  }
}
