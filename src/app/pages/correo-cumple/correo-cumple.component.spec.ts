import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreoCumpleComponent } from './correo-cumple.component';

describe('CorreoCumpleComponent', () => {
  let component: CorreoCumpleComponent;
  let fixture: ComponentFixture<CorreoCumpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorreoCumpleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorreoCumpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
