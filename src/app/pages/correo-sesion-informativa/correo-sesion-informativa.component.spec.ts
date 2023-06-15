import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreoSesionInformativaComponent } from './correo-sesion-informativa.component';

describe('CorreoSesionInformativaComponent', () => {
  let component: CorreoSesionInformativaComponent;
  let fixture: ComponentFixture<CorreoSesionInformativaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorreoSesionInformativaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorreoSesionInformativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
