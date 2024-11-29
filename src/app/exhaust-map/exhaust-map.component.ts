import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { exhaustMap, mergeMap } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-exhaust-map',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './exhaust-map.component.html',
  styleUrl: './exhaust-map.component.scss',
})
export class ExhaustMapComponent {
  usersService = inject(UsersService);

  form = new FormGroup({
    name: new FormControl<string | null>(null),
    phone: new FormControl<string | null>(null),
  });

  ngOnInit() {
    this.form.valueChanges
      .pipe(exhaustMap(() => this.usersService.findUsers({})))
      .subscribe();
  }
}
