import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseValueComponent } from './use-value.component';

describe('UseValueComponent', () => {
  let component: UseValueComponent;
  let fixture: ComponentFixture<UseValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseValueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
