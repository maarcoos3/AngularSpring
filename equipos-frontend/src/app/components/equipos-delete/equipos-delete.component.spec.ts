import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposDeleteComponent } from './equipos-delete.component';

describe('EquiposDeleteComponent', () => {
  let component: EquiposDeleteComponent;
  let fixture: ComponentFixture<EquiposDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquiposDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiposDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
