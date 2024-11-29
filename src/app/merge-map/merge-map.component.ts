import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { mergeMap } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-merge-map',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './merge-map.component.html',
  styleUrl: './merge-map.component.scss',
})
export class MergeMapComponent {
  usersService = inject(UsersService);

  form = new FormGroup({
    name: new FormControl<string | null>(null),
    phone: new FormControl<string | null>(null),
  });

  ngOnInit() {
    this.form.valueChanges
      .pipe(mergeMap(() => this.usersService.findUsers({})))
      .subscribe();
  }
}
