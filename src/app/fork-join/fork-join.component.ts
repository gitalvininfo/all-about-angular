import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { forkJoin, interval, map, Observable, take, takeWhile } from 'rxjs';

@Component({
  selector: 'app-fork-join',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fork-join.component.html',
  styleUrl: './fork-join.component.scss'
})
export class ForkJoinComponent {
  destroyRef = inject(DestroyRef);
  logs: string[] = [];
  started = false;
  timer$!: Observable<number>;
  
  startForkJoin(): void {
    this.timer$ = interval(1000).pipe(
      map(value => value + 1),  
      takeWhile(value => value <= 3),
      takeUntilDestroyed(this.destroyRef)
    );
    
    this.started = true;

    const observable1 = interval(1000).pipe(
      map((value) => `<span class='text-success'>observable1 - ${value}</span>`),
      take(3)
    ); // Emits values every second, completes after 3 emissions
    const observable2 = interval(1500).pipe(
      map((value) => `<span class='text-danger'>observable2 - ${value}</span>`),
      take(2)
    ); // Emits values every 1.5 seconds, completes after 2 emissions

    forkJoin([observable1, observable2])
    .pipe(takeUntilDestroyed(this.destroyRef))
    .subscribe(values => {
      this.logs.push(...values);
    });
  }
}
