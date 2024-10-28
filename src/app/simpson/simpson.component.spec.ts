import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpsonRule } from '../classes/simpson_rule';
import { SimpsonComponent } from './simpson.component';

describe('SimpsonRule', () => {
    let simpsonRule: SimpsonRule;

    beforeEach(() => {
        simpsonRule = new SimpsonRule();
    });

    it('should return p=16.0 if x0=0, x1=4, num_seg=4, ERROR=0.0001 and f(x)=2x', () => {
        const result = simpsonRule.simpson(0, 4, 4, simpsonRule.f2x, 0.0001);
        expect(result).toBeCloseTo(16.0, 2);
    });

    it('should return p=0.3333 if x0=0, x1=1, num_seg=4, ERROR=0.0001 and f(x)=x^2', () => {
        const result = simpsonRule.simpson(0, 1, 4, simpsonRule.fx2, 0.0001);
        expect(result).toBeCloseTo(0.333, 2);
    });

    it('should return p=1.38 if x0=1, x1=4, num_seg=6, ERROR=0.001 and f(x)=1/x', () => {
      const result = simpsonRule.simpson(1, 4, 6, simpsonRule.f1_x, 0.001);
      expect(result).toBeCloseTo(1.386, 2);
  });
});
