import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trns100Component } from './trns100.component';

describe('Trns100Component', () => {
  let component: Trns100Component;
  let fixture: ComponentFixture<Trns100Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trns100Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trns100Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
