import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregocontenidoComponent } from './agregocontenido.component';

describe('AgregocontenidoComponent', () => {
  let component: AgregocontenidoComponent;
  let fixture: ComponentFixture<AgregocontenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregocontenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregocontenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
