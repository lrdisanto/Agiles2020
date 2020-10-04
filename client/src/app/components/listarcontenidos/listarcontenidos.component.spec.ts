import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarcontenidosComponent } from './listarcontenidos.component';

describe('ListarcontenidosComponent', () => {
  let component: ListarcontenidosComponent;
  let fixture: ComponentFixture<ListarcontenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarcontenidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarcontenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
