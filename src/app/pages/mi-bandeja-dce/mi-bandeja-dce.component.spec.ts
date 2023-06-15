import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiBandejaDCEComponent } from './mi-bandeja-dce.component';

describe('MiBandejaDCEComponent', () => {
  let component: MiBandejaDCEComponent;
  let fixture: ComponentFixture<MiBandejaDCEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiBandejaDCEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiBandejaDCEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
