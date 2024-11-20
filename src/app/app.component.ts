import {
  Component,
  signal,
} from '@angular/core';
import { UserSearchComponent } from './user-search/user-search.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MergeComponent } from './merge/merge.component';
import { ConcatComponent } from './concat/concat.component';
import { ZipComponent } from './zip/zip.component';
import { CombineLatestComponent } from "./combine-latest/combine-latest.component";
import { WithLatestFromComponent } from "./with-latest-from/with-latest-from.component";
import { ForkJoinComponent } from "./fork-join/fork-join.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserSearchComponent, ReactiveFormsModule, MergeComponent, ConcatComponent, ZipComponent, CombineLatestComponent, WithLatestFromComponent, ForkJoinComponent],
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
