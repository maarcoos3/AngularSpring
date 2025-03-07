import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposEditComponent } from './equipos-edit.component';

describe('EquiposEditComponent', () => {
  let component: EquiposEditComponent;
  let fixture: ComponentFixture<EquiposEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquiposEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiposEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
