import { Component, model, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  expand = model.required<boolean>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('expand: ', this.expand())
    console.log(changes)
  }
}
