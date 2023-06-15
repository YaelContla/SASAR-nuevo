import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionAgendaComponent } from './confirmacion-agenda.component';

describe('ConfirmacionAgendaComponent', () => {
  let component: ConfirmacionAgendaComponent;
  let fixture: ComponentFixture<ConfirmacionAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacionAgendaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacionAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
