import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, map, merge, Observable, of } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-merge',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './merge.component.html',
  styleUrl: './merge.component.scss',
})
export class MergeComponent {
  destroyRef = inject(DestroyRef);
  logs: any[] = [];
  started = false
  timer$!: Observable<number>;

  usersService = inject(UsersService);

  startMerge(): void {
    this.timer$ = interval(1000).pipe(
      map(value => value + 1),  
      takeUntilDestroyed(this.destroyRef)
    );

    this.started = true;
    const observable1 = interval(5000).pipe(
      map((value) => `observable1 (5secs) - ${value}`)
    );

    // const observable1 = this.usersService.getTodos();

    // const observable2 = this.usersService.getComments();

    const observable2 = interval(10000).pipe(
      map((value) => `observable2 (10secs) - ${value}`)
    );

    const mergedObservable = merge(observable1, observable2);

    mergedObservable
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((value) => {
        console.log(value)
        this.logs.push(value);
      });
  }
}
