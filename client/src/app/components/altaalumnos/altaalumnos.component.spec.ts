import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaalumnosComponent } from './altaalumnos.component';

describe('AltaalumnosComponent', () => {
  let component: AltaalumnosComponent;
  let fixture: ComponentFixture<AltaalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaalumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
