import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtencionPaciente } from './atencion-paciente';

describe('AtencionPaciente', () => {
  let component: AtencionPaciente;
  let fixture: ComponentFixture<AtencionPaciente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtencionPaciente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtencionPaciente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
