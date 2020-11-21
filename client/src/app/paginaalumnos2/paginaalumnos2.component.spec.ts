import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paginaalumnos2Component } from './paginaalumnos2.component';

describe('Paginaalumnos2Component', () => {
  let component: Paginaalumnos2Component;
  let fixture: ComponentFixture<Paginaalumnos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Paginaalumnos2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Paginaalumnos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
