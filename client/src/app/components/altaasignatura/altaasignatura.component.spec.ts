import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaasignaturaComponent } from './altaasignatura.component';

describe('AltaasignaturaComponent', () => {
  let component: AltaasignaturaComponent;
  let fixture: ComponentFixture<AltaasignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaasignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaasignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
