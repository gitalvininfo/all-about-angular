import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { FakeUserService } from '../fake-user.service';

@Component({
  selector: 'app-use-factory',
  standalone: true,
  imports: [],
  templateUrl: './use-factory.component.html',
  styleUrl: './use-factory.component.scss',
  providers: [
    { provide: 'USE_FAKE', useValue: false },
    {
      provide: UserService,
      useFactory: (USE_FAKE: boolean, httpClient: HttpClient) => {
        return USE_FAKE ? new FakeUserService() : new UserService();
      },
      deps: ['USE_FAKE', HttpClient],
    },
  ],
})
export class UseFactoryComponent {
  constructor(private userService: UserService) {
    console.log('userService', this.userService.getData())
  }
}
