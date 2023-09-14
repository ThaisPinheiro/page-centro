import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirigentesComponent } from './dirigentes.component';

describe('DirigentesComponent', () => {
  let component: DirigentesComponent;
  let fixture: ComponentFixture<DirigentesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DirigentesComponent]
    });
    fixture = TestBed.createComponent(DirigentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
