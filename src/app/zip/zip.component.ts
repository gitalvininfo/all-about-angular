import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, map, Observable, zip } from 'rxjs';

@Component({
  selector: 'app-zip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zip.component.html',
  styleUrl: './zip.component.scss',
})
export class ZipComponent {
  destroyRef = inject(DestroyRef);
  logs: string[] = [];
  started = false;
  timer$!: Observable<number>;

  startZip(): void {
    this.timer$ = interval(1000).pipe(
      map(value => value + 1),  
      takeUntilDestroyed(this.destroyRef)
    );

    this.started = true;
    const observable1 = interval(2000).pipe(
      map(value => `<span class='text-success'>observable1 (2secs) - ${value}</span>`)
    );
    const observable2 = interval(3000).pipe(
      map(value => `<span class='text-danger'>observable2 (3secs) - ${value}</span>`)
    );;

    const zippedObservable = zip(observable1, observable2);

    zippedObservable
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([value1, value2]) => {
        this.logs.push([value1, value2].join(", "))
      });
  }
}
