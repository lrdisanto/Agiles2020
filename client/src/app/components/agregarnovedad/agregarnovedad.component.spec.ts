import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarnovedadComponent } from './agregarnovedad.component';

describe('AgregarnovedadComponent', () => {
  let component: AgregarnovedadComponent;
  let fixture: ComponentFixture<AgregarnovedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarnovedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarnovedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
