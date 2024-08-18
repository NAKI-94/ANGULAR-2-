import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalEjemplo7Component } from './signal-ejemplo7.component';

describe('SignalEjemplo7Component', () => {
  let component: SignalEjemplo7Component;
  let fixture: ComponentFixture<SignalEjemplo7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEjemplo7Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalEjemplo7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
