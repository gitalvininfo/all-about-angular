import { Injectable } from '@angular/core';

@Injectable()
export class FakeUserService {

  constructor() { }

  getData(): string {
    return 'Fake data'
  }
}
