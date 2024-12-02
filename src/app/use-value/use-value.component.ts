import { Component, Inject, InjectionToken } from '@angular/core';

const APP_CONFIG = Object.freeze({
  serviceURL: 'www.serviceUrl.comapi',
  IsDevleomentMode: true,
});

const API_URL= new InjectionToken<string>(''); 

@Component({
  selector: 'app-use-value',
  standalone: true,
  imports: [],
  templateUrl: './use-value.component.html',
  styleUrl: './use-value.component.scss',
  providers: [
    { provide: 'USE_FAKE', useValue: true },
    { provide: 'APP_CONFIG', useValue: APP_CONFIG },
    {
      provide: 'FUNC',
      useValue: () => {
        return 'hello';
      },
    },
    { provide: API_URL, useValue: 'http://SomeEndPoint.com/api' }
  ],
})
export class UseValueComponent {
  constructor(
    @Inject('USE_FAKE') public useFake: string,
    @Inject('APP_CONFIG') public appConfig: any,
    @Inject('FUNC') public someFunc: any,
    @Inject(API_URL) private apiURL: string
  ) {
    console.log('useFake', useFake);
    console.log('appConfig', appConfig);
    console.log('func', someFunc())
    console.log('apiurl', apiURL)
  }
}
