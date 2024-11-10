import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  http = inject(HttpClient);

  constructor() { }

  isLoggedIn(): boolean {
    return true;
  }

  loadPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts'); // Dummy endpoint
  }
}
