import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ArticleCommentsComponent } from './article-comments/article-comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ArticleCommentsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'demo-app';
}
