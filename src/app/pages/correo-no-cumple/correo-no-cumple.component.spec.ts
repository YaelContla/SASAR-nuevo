import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreoNoCumpleComponent } from './correo-no-cumple.component';

describe('CorreoNoCumpleComponent', () => {
  let component: CorreoNoCumpleComponent;
  let fixture: ComponentFixture<CorreoNoCumpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorreoNoCumpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorreoNoCumpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
