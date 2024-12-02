import { Component } from '@angular/core';
import { FakeUserService } from '../fake-user.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-use-existing',
  standalone: true,
  imports: [],
  templateUrl: './use-existing.component.html',
  styleUrl: './use-existing.component.scss',
  providers: [
    {
      provide: UserService, useClass: UserService
    },
    {
      provide: FakeUserService, useExisting: UserService
    }
  ]
})
export class UseExistingComponent {

  constructor(private fakeuserService: FakeUserService) {
    console.log('fakeuserService', fakeuserService.getData());
  }
}
