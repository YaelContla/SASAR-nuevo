import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosSesionDGEComponent } from './datos-sesion-dge.component';

describe('DatosSesionDGEComponent', () => {
  let component: DatosSesionDGEComponent;
  let fixture: ComponentFixture<DatosSesionDGEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosSesionDGEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosSesionDGEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
