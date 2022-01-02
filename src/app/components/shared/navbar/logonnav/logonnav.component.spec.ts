import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogonnavComponent } from './logonnav.component';

describe('LogonnavComponent', () => {
  let component: LogonnavComponent;
  let fixture: ComponentFixture<LogonnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogonnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogonnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
