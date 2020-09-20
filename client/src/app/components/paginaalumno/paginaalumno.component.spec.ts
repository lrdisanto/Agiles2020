import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaalumnoComponent } from './paginaalumno.component';

describe('PaginaalumnoComponent', () => {
  let component: PaginaalumnoComponent;
  let fixture: ComponentFixture<PaginaalumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaalumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
