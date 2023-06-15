import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosSesionComponent } from './datos-sesion.component';

describe('DatosSesionComponent', () => {
  let component: DatosSesionComponent;
  let fixture: ComponentFixture<DatosSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosSesionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
