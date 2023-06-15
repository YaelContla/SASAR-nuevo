import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionReunionComponent } from './confirmacion-reunion.component';

describe('ConfirmacionReunionComponent', () => {
  let component: ConfirmacionReunionComponent;
  let fixture: ComponentFixture<ConfirmacionReunionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacionReunionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacionReunionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
