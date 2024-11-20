import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest, interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.scss',
})
export class CombineLatestComponent {
  destroyRef = inject(DestroyRef);
  logs: string[] = [];
  started = false;
  timer$!: Observable<number>;

  startCombineLatest(): void {
    this.timer$ = interval(1000).pipe(takeUntilDestroyed(this.destroyRef));
    
    this.started = true;

    const observable1 = interval(5000).pipe(
      map((value) => `<span class='text-success'>observable1 - ${value}</span>`)
    );
    const observable2 = interval(10000).pipe(
      map((value) => `<span class='text-danger'>observable2 - ${value}</span>`)
    );

    const combinedObservable = combineLatest([observable1, observable2]);

    combinedObservable
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([value1, value2]) => {
        this.logs.push([value1, value2].join(', '));
      });
  }
}
