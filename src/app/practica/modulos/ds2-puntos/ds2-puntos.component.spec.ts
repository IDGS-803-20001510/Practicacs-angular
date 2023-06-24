import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ds2PuntosComponent } from './ds2-puntos.component';

describe('Ds2PuntosComponent', () => {
  let component: Ds2PuntosComponent;
  let fixture: ComponentFixture<Ds2PuntosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ds2PuntosComponent]
    });
    fixture = TestBed.createComponent(Ds2PuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
