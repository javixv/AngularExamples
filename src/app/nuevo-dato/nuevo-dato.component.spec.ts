import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoDatoComponent } from './nuevo-dato.component';

describe('NuevoDatoComponent', () => {
  let component: NuevoDatoComponent;
  let fixture: ComponentFixture<NuevoDatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoDatoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoDatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
