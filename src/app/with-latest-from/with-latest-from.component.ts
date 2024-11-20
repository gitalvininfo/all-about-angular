import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, map, Observable, timer, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-with-latest-from',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './with-latest-from.component.html',
  styleUrl: './with-latest-from.component.scss'
})
export class WithLatestFromComponent {
  destroyRef = inject(DestroyRef);
  logs: string[] = [];
  started = false;
  timer$!: Observable<number>;

  startWithLatestFrom(): void {
    this.timer$ = interval(1000).pipe(
      map((value) => value + 1),
      takeUntilDestroyed(this.destroyRef),
    );
    this.started = true;


    const triggerObservable = timer(10000).pipe(
      map((value) => `<span class='text-success'>triggerObservable - ${value}</span>`)
    );
    const dataObservable = interval(5000).pipe(
      map((value) => `<span class='text-danger'>dataObservable - ${value}</span>`)
    );

    const combinedObservable = dataObservable.pipe(
      withLatestFrom(triggerObservable)
    );

    combinedObservable
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(([dataValue, triggerValue]) => {
      this.logs.push([dataValue, triggerValue].join(', '));
    });
  }
}
