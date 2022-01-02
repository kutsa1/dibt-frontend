import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutnavComponent } from './logoutnav.component';

describe('LogoutnavComponent', () => {
  let component: LogoutnavComponent;
  let fixture: ComponentFixture<LogoutnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
