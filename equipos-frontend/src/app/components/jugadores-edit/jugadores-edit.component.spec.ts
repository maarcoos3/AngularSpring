import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresEditComponent } from './jugadores-edit.component';

describe('JugadoresEditComponent', () => {
  let component: JugadoresEditComponent;
  let fixture: ComponentFixture<JugadoresEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JugadoresEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadoresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
