import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { concat, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-concat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './concat.component.html',
  styleUrl: './concat.component.scss',
})
export class ConcatComponent {
  destroyRef = inject(DestroyRef);
  logs: string[] = [];
  started = false;

  startConcat(): void {
    this.started = true;
    const observable1 = of(1, 2, 3).pipe(
      map((value) => `observable1 - ${value}`)
    );
    const observable2 = interval(2000).pipe(
      map((value) => `observable2 - ${value * 2}`)
    );

    const concatenatedObservable = concat(observable1, observable2);

    concatenatedObservable
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        this.logs.push(value);
      });
  }
}
