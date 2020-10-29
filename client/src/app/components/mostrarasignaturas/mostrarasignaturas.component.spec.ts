import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarasignaturasComponent } from './mostrarasignaturas.component';

describe('MostrarasignaturasComponent', () => {
  let component: MostrarasignaturasComponent;
  let fixture: ComponentFixture<MostrarasignaturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarasignaturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarasignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
