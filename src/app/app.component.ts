import {
  Component,
  signal,
} from '@angular/core';
import { BannerComponent } from './banner/banner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  showMore = signal(false);
  // showMore = false;

  
  handler() {
    console.log('hi there')
  }
}
