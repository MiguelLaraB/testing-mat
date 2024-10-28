import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackSquareComponent } from './black-square.component';

describe('BlackSquareComponent', () => {
  let component: BlackSquareComponent;
  let fixture: ComponentFixture<BlackSquareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlackSquareComponent]
    });
    fixture = TestBed.createComponent(BlackSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should calculate calories correctly for game sequence "123214"', () => {
    const calories = [1, 2, 3, 4];
    const sequence = '123214';
    const result = component.calculateCalories(calories, sequence);
    expect(result).toBe(13); // Verifica que el resultado sea el esperado
  });

  it('should calculate calories correctly for game sequence "11221"', () => {
    const calories = [1, 5, 3, 2];
    const sequence = '11221';
    const result = component.calculateCalories(calories, sequence);
    expect(result).toBe(13); // Verifica que el resultado sea el esperado
  });

  it('should calculate calories correctly for empty sequence', () => {
    const calories = [1, 2, 3, 4];
    const sequence = '';
    const result = component.calculateCalories(calories, sequence);
    expect(result).toBe(0); // Verifica que el resultado sea 0 para secuencia vacía
  });
});
