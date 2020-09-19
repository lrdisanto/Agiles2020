import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogindosComponent } from './logindos.component';

describe('LogindosComponent', () => {
  let component: LogindosComponent;
  let fixture: ComponentFixture<LogindosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogindosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogindosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
