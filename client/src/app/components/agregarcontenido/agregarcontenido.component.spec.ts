import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcontenidoComponent } from './agregarcontenido.component';

describe('AgregarcontenidoComponent', () => {
  let component: AgregarcontenidoComponent;
  let fixture: ComponentFixture<AgregarcontenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarcontenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarcontenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
