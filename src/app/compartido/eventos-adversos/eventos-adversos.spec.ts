import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosAdversos } from './eventos-adversos';

describe('EventosAdversos', () => {
  let component: EventosAdversos;
  let fixture: ComponentFixture<EventosAdversos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosAdversos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosAdversos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
