import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fpsection2Component } from './fpsection2.component';

describe('Fpsection2Component', () => {
  let component: Fpsection2Component;
  let fixture: ComponentFixture<Fpsection2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fpsection2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fpsection2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
