import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarprofComponent } from './mostrarprof.component';

describe('MostrarprofComponent', () => {
  let component: MostrarprofComponent;
  let fixture: ComponentFixture<MostrarprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
