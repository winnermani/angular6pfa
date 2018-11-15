import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Trns101Component } from './trns101.component';

describe('Trns101Component', () => {
  let component: Trns101Component;
  let fixture: ComponentFixture<Trns101Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Trns101Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Trns101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
