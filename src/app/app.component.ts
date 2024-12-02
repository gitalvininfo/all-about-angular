import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UseClassComponent } from './use-class/use-class.component';
import { UseValueComponent } from './use-value/use-value.component';
import { UseFactoryComponent } from "./use-factory/use-factory.component";
import { UseExistingComponent } from './use-existing/use-existing.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, UseClassComponent, UseValueComponent, UseFactoryComponent, UseExistingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  operatorForm = new FormGroup({
    operatorType: new FormControl(1, { nonNullable: true }),
  });
}
