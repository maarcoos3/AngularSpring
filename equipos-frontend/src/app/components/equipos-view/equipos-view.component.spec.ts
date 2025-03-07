import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposViewComponent } from './equipos-view.component';

describe('EquiposViewComponent', () => {
  let component: EquiposViewComponent;
  let fixture: ComponentFixture<EquiposViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquiposViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiposViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
