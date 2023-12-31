import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFacturasComponent } from './form-facturas.component';

describe('FormFacturasComponent', () => {
  let component: FormFacturasComponent;
  let fixture: ComponentFixture<FormFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormFacturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
