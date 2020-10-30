import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarcontenidoComponent } from './editarcontenido.component';

describe('EditarcontenidoComponent', () => {
  let component: EditarcontenidoComponent;
  let fixture: ComponentFixture<EditarcontenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarcontenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarcontenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
