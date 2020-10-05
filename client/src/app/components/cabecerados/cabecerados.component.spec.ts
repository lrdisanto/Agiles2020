import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceradosComponent } from './cabecerados.component';

describe('CabeceradosComponent', () => {
  let component: CabeceradosComponent;
  let fixture: ComponentFixture<CabeceradosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabeceradosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
