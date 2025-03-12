import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresDeleteComponent } from './jugadores-delete.component';

describe('JugadoresDeleteComponent', () => {
  let component: JugadoresDeleteComponent;
  let fixture: ComponentFixture<JugadoresDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JugadoresDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadoresDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
