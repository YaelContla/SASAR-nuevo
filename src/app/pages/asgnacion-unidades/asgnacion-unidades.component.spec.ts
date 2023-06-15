import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsgnacionUnidadesComponent } from './asgnacion-unidades.component';

describe('AsgnacionUnidadesComponent', () => {
  let component: AsgnacionUnidadesComponent;
  let fixture: ComponentFixture<AsgnacionUnidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsgnacionUnidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsgnacionUnidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
