import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestrocontenidosComponent } from './muestrocontenidos.component';

describe('MuestrocontenidosComponent', () => {
  let component: MuestrocontenidosComponent;
  let fixture: ComponentFixture<MuestrocontenidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MuestrocontenidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestrocontenidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
