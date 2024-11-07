import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LinearRegressionComponent } from './linear-regression.component';
import { LinearRegression } from '../classes/linear_regression';

describe('LinearRegressionComponent', () => {
  let component: LinearRegressionComponent;
  let fixture: ComponentFixture<LinearRegressionComponent>;
  let linearRegression: LinearRegressionComponent;

  beforeEach(() => {
    linearRegression = new LinearRegressionComponent();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinearRegressionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinearRegressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('Should return b0 approximately -22.55 with array 130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', async () => {
    const result = linearRegression.getB0([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(result).toBeCloseTo(-22.55, 2);
  });

  it('Should return b1 approximately 1.7279 with aray [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', async () => {
    const result = linearRegression.getB1([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(result).toBeCloseTo(1.7279, 2);
  });

  it('Should return yk approximately 644.429 with array [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601], 386)', async () => {
    const result = linearRegression.getYK([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601], 386);
    expect(result).toBeCloseTo(644.429, 2);
  });

  it('Should return b0 approximately -4.604 with array [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2', async () => {
    const result = linearRegression.getB0([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBeCloseTo(-4.039, 2);
  });

  it('Should return b1 approximately 0.16064 with array [130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', async () => {
    const result = linearRegression.getB1([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBeCloseTo(0.1681, 2);
  });

  it('Should return yk approximately 60.858 with array 130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2], 386', async () => {
    const result = linearRegression.getYK([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2], 386);
    expect(result).toBeCloseTo(60.858, 2);
  });

  it('Should return b0 approximately -23.92 with array 163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', async () => {
    const result = linearRegression.getB0([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(result).toBeCloseTo(-23.92, 2);
  });

  it('Should return b1 approximately 1.43097 with [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]', async () => {
    const result = linearRegression.getB1([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(result).toBeCloseTo(1.43097, 2);
  });

  it('Should return yk approximately 528.4294 with array [163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601], 386', async () => {
    const result = linearRegression.getYK([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601], 386);
    expect(result).toBeCloseTo(528.4294, 2);
  });

  it('Should return b0 approximately -4.604 with array 163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', async () => {
    const result = linearRegression.getB0([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBeCloseTo(-4.604, 2);
  });

  it('Should return b1 approximately 0.140164 with array 163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', async () => {
    const result = linearRegression.getB1([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBeCloseTo(0.140164, 2);
  });

  it('Should return yk approximately 60.858 with array 163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2], 386', async () => {
    const result = linearRegression.getYK([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2], 386);
    expect(result).toBeCloseTo(49.4994, 2);
  });

  describe('when xValue is provided', () => {
    it('should calculate b0, b1, and YK values', () => {
      component.inputArray1 = '1, 2, 3';
      component.inputArray2 = '4, 5, 6';
      component.xValue = 2.5;

      spyOn(component, 'getB1').and.callThrough();
      spyOn(component, 'getB0').and.callThrough();
      spyOn(component, 'getYK').and.callThrough();

      component.calculate();

      expect(component.getB1).toHaveBeenCalledWith([1, 2, 3], [4, 5, 6]);
      expect(component.getB0).toHaveBeenCalledWith([1, 2, 3], [4, 5, 6]);
      expect(component.getYK).toHaveBeenCalledWith([1, 2, 3], [4, 5, 6], 2.5);
      expect(component.b0).toBeDefined();
      expect(component.b1).toBeDefined();
      expect(component.result).toBeDefined();
    });
  });

  describe('when xValue is null', () => {
    it('should calculate b0 and b1 but set result to null', () => {
      component.inputArray1 = '1, 2, 3';
      component.inputArray2 = '4, 5, 6';
      component.xValue = null;

      spyOn(component, 'getB1').and.callThrough();
      spyOn(component, 'getB0').and.callThrough();
      spyOn(component, 'getYK').and.callThrough();

      component.calculate();

      expect(component.getB1).toHaveBeenCalledWith([1, 2, 3], [4, 5, 6]);
      expect(component.getB0).toHaveBeenCalledWith([1, 2, 3], [4, 5, 6]);
      expect(component.getYK).not.toHaveBeenCalled();  // YK no debe ser llamado
      expect(component.b0).toBeDefined();
      expect(component.b1).toBeDefined();
      expect(component.result).toBeNull();
    });
  });

  describe('when input arrays contain invalid data', () => {
    it('should handle invalid input gracefully by setting result to NaN', () => {
      component.inputArray1 = 'a, b, c';
      component.inputArray2 = 'd, e, f';
      component.xValue = 2.5;

      component.calculate();

      expect(component.b0).toBeNaN();
      expect(component.b1).toBeNaN();
      expect(component.result).toBeNaN();
    });
  });
});