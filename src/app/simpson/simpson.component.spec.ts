import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpsonRule } from '../classes/simpson_rule';
import { SimpsonComponent } from './simpson.component';
import { FormsModule } from '@angular/forms';

describe('SimpsonRule', () => {
    let simpsonRule: SimpsonRule;
    let fixture: ComponentFixture<SimpsonComponent>;
    let component: SimpsonComponent;

    beforeEach(async() => {
        await TestBed.configureTestingModule({
            imports: [FormsModule, SimpsonComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SimpsonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        simpsonRule = new SimpsonRule();
    });

    describe('Initial Values', () => {
        it('should have default x0, x1, numSeg, error values', () => {
          expect(component.x0).toBe(1);
          expect(component.x1).toBe(4);
          expect(component.numSeg).toBe(6);
          expect(component.error).toBe(0.001);
        });
    
        it('should set selectedFx to "f2x" by default', () => {
          expect(component.selectedFx).toBe('f2x');
        });
    
        it('should initialize result with a calculation using f1_x function', () => {
          expect(component.result).toBeCloseTo(1.386, 2);
        });
      });
    
      describe('Function Selection', () => {
        it('should use f2x function when selectedFx is "f2x"', () => {
          component.selectedFx = 'f2x';
          component.x0 = 0;
          component.x1 = 4;
          component.numSeg = 4;
          component.error = 0.0001;
          component.calcularSimpson();
          expect(component.userResult).toBeCloseTo(16.0, 2);
        });
    
        it('should use fx2 function when selectedFx is "fx2"', () => {
          component.selectedFx = 'fx2';
          component.x0 = 0;
          component.x1 = 1;
          component.numSeg = 4;
          component.error = 0.0001;
          component.calcularSimpson();
          expect(component.userResult).toBeCloseTo(0.333, 2);
        });
    
        it('should use f1_x function when selectedFx is "f1_x"', () => {
          component.selectedFx = 'f1_x';
          component.x0 = 1;
          component.x1 = 4;
          component.numSeg = 6;
          component.error = 0.001;
          component.calcularSimpson();
          expect(component.userResult).toBeCloseTo(1.386, 2);
        });
    
        it('should return undefined userResult for an unrecognized function', () => {
          component.selectedFx = 'unknown_function';
          component.calcularSimpson();
          expect(component.userResult).toBeNull();
        });
      });
    
      describe('Calculation Method', () => {
        it('should calculate userResult using calcularSimpson method based on selected function and inputs', () => {
          component.selectedFx = 'f2x';
          component.x0 = 0;
          component.x1 = 4;
          component.numSeg = 4;
          component.error = 0.0001;
          component.calcularSimpson();
          expect(component.userResult).toBeCloseTo(16.0, 2);
        });
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
