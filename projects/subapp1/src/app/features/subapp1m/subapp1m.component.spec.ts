import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subapp1mComponent } from './subapp1m.component';

describe('Subapp1mComponent', () => {
  let component: Subapp1mComponent;
  let fixture: ComponentFixture<Subapp1mComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subapp1mComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subapp1mComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
