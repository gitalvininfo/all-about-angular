import {
  Component,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { ExhaustMapComponent } from './exhaust-map/exhaust-map.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule, SwitchMapComponent, MergeMapComponent, ConcatMapComponent, ExhaustMapComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  operatorForm = new FormGroup({
    operatorType: new FormControl(1, { nonNullable: true }),
  });
  

  ngOnInit() {
    this.operatorForm.valueChanges.subscribe(type => console.log(type))
  }
}
