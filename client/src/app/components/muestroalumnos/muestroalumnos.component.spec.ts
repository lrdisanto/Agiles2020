import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestroalumnosComponent } from './muestroalumnos.component';

describe('MuestroalumnosComponent', () => {
  let component: MuestroalumnosComponent;
  let fixture: ComponentFixture<MuestroalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuestroalumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestroalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
