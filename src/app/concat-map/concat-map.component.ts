import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { concatMap } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-concat-map',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './concat-map.component.html',
  styleUrl: './concat-map.component.scss',
})
export class ConcatMapComponent {
  usersService = inject(UsersService);

  form = new FormGroup({
    name: new FormControl<string | null>(null),
    phone: new FormControl<string | null>(null),
  });

  ngOnInit() {
    this.form.valueChanges
      .pipe(concatMap(() => this.usersService.findUsers({})))
      .subscribe();
  }
}
