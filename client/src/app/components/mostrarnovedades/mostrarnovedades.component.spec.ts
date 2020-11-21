import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarnovedadesComponent } from './mostrarnovedades.component';

describe('MostrarnovedadesComponent', () => {
  let component: MostrarnovedadesComponent;
  let fixture: ComponentFixture<MostrarnovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarnovedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarnovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
