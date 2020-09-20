import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaprofesorComponent } from './paginaprofesor.component';

describe('PaginaprofesorComponent', () => {
  let component: PaginaprofesorComponent;
  let fixture: ComponentFixture<PaginaprofesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginaprofesorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaprofesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
