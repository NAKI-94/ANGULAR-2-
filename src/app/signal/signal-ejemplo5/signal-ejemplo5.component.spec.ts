import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalEjemplo5Component } from './signal-ejemplo5.component';

describe('SignalEjemplo5Component', () => {
  let component: SignalEjemplo5Component;
  let fixture: ComponentFixture<SignalEjemplo5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalEjemplo5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalEjemplo5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
