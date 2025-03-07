import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposCreateComponent } from './equipos-create.component';

describe('EquiposCreateComponent', () => {
  let component: EquiposCreateComponent;
  let fixture: ComponentFixture<EquiposCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquiposCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiposCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
