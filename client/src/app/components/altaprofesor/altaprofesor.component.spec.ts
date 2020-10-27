import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaprofesorComponent } from './altaprofesor.component';

describe('AltaprofesorComponent', () => {
  let component: AltaprofesorComponent;
  let fixture: ComponentFixture<AltaprofesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaprofesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
