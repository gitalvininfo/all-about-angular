import { CommonModule } from '@angular/common';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { interval, map, zip } from 'rxjs';

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

  startZip(): void {
    this.started = true;
    const observable1 = interval(2000).pipe(
      map(value => `<span class='text-success'>observable1 - ${value}</span>`)
    );
    const observable2 = interval(3000).pipe(
      map(value => `<span class='text-danger'>observable2 - ${value}</span>`)
    );;

    const zippedObservable = zip(observable1, observable2);

    zippedObservable
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(([value1, value2]) => {
        this.logs.push([value1, value2].join(", "))
      });
  }
}
