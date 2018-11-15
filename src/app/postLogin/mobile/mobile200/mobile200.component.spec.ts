import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mobile200Component } from './mobile200.component';

describe('Mobile200Component', () => {
  let component: Mobile200Component;
  let fixture: ComponentFixture<Mobile200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mobile200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mobile200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
