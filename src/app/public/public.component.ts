import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss',
})
export class PublicComponent implements OnInit {
  authService = inject(AuthService);

  ngOnInit() {
    this.authService.loadPosts().subscribe((posts) => {
      console.log(
        '🚀 ~ PublicComponent ~ this.authService.loadPosts ~ posts:',
        posts
      );
    });
  }
}
