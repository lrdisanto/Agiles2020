import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestrotodoalumnosComponent } from './muestrotodoalumnos.component';

describe('MuestrotodoalumnosComponent', () => {
  let component: MuestrotodoalumnosComponent;
  let fixture: ComponentFixture<MuestrotodoalumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuestrotodoalumnosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestrotodoalumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
