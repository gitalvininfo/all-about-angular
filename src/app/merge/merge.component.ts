import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, map, merge } from 'rxjs';

@Component({
  selector: 'app-merge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './merge.component.html',
  styleUrl: './merge.component.scss',
})
export class MergeComponent {
  destroyRef = inject(DestroyRef);
  logs: string[] = [];
  started = false

  startMerge(): void {
    this.started = true;
    const observable1 = interval(5000).pipe(
      map((value) => `observable1 (5secs) - ${value}`)
    );
    const observable2 = interval(10000).pipe(
      map((value) => `observable2 (10secs) - ${value}`)
    );

    const mergedObservable = merge(observable1, observable2);

    mergedObservable
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.logs.push(value);
      });
  }
}
