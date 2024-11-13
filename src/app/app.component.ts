import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  Injector,
  Signal,
  signal,
  untracked,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  untrackedSignal: WritableSignal<number> = signal(1);

  writeTableSignal: WritableSignal<number> = signal(0);

  computedSignalValue: Signal<number> = computed(
    () => this.writeTableSignal() * 2
  );

  // assign the effect to a field
  // private loggingEffect = effect(() => {
  //   console.log(`The writeable signal is: ${this.writeTableSignal()}`);
  // });

  // 
  constructor(private injector: Injector) {
    effect(() => {
      console.log(`The writeable signal is: ${this.writeTableSignal()}, The untracked signal is : ${untracked(this.untrackedSignal)}`);
    });

    //  effect needs to invoke some external code which shouldn't be treated as a dependency:
    // effect(() => {
    //   console.log('EFFECT')
    //   untracked(() => {
    //     // If the `loggingService` reads signals, they won't be counted as
    //     // dependencies of this effect.
    //     console.log(`UntrackedSignal set to ${this.untrackedSignal()}`);
    //   });
    // });

    // cancel if the effect is destroyed or runs again before the first operation finished.
    // effect((onCleanup) => {
    //   const timer = setTimeout(() => {
    //     console.log(`The writeable signal is : ${this.writeTableSignal()}`);
    //   }, 1000);
    //   onCleanup(() => {
    //     console.log('clear')
    //     clearTimeout(timer);
    //   });
    // });
  }

  // CALL THE EFFECT OUTSIDE OF CONSTRUCTOR
  // ngOnInit() {
  //   this.initializeLogging();
  // }

  // initializeLogging(): void {
  //   effect(() => {
  //     console.log(`The writeable signal is: ${this.writeTableSignal()}`);
  //   }, {injector: this.injector});
  // }

  testWritableSignal(): void {
    this.writeTableSignal.update((value) => value + 1);

    // this.writeTableSignal.set(1);
  }

  testSignalWDependencies(): void {
    const showCount = signal(true);
    const count = signal(1);
    const conditionalCount = computed(() => {
      if (showCount()) {
        return `The count is ${count()}.`;
      } else {
        return 'Nothing to see here!';
      }
    });

    console.log("🚀 ~ AppComponent ~ conditionalCount ~ conditionalCount:", conditionalCount())
  }

  testUntrackedSignal(): void {
    this.untrackedSignal.update((value) => value + 1);
  }
}
