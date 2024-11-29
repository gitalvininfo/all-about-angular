import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import {
  concat,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  Observable,
  switchMap,
} from 'rxjs';
import { User, UsersService } from '../users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switch-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch-map.component.html',
  styleUrl: './switch-map.component.scss',
})
export class SwitchMapComponent {
  @ViewChild('searchInput', { static: true }) input!: ElementRef;

  usersService = inject(UsersService);
  users$!: Observable<User[]>;

  ngAfterViewInit() {
    const searchUsers$ = fromEvent<any>(this.input.nativeElement, 'keyup').pipe(
      map((event) => event.target.value),
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((search) => this.loadUsers(search))
    );

    const initialUsers$ = this.loadUsers();

    this.users$ = concat(initialUsers$, searchUsers$);
  }

  loadUsers(search = ''): Observable<User[]> {
    return this.usersService.findUsers({ userName: search });
  }
}
