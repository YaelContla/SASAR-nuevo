import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitudRepresentanteComponent } from './solicitud-representante.component';

describe('SolicitudRepresentanteComponent', () => {
  let component: SolicitudRepresentanteComponent;
  let fixture: ComponentFixture<SolicitudRepresentanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitudRepresentanteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitudRepresentanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
