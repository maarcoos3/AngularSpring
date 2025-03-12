import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresCreateComponent } from './jugadores-create.component';

describe('JugadoresCreateComponent', () => {
  let component: JugadoresCreateComponent;
  let fixture: ComponentFixture<JugadoresCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JugadoresCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JugadoresCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
