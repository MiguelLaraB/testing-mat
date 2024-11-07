import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CorrelationComponent } from './correlation.component';

describe('CorrelationComponent', () => {
  let component: CorrelationComponent;
  let fixture: ComponentFixture<CorrelationComponent>;
  let correlation:CorrelationComponent;

  beforeEach(async () => {
    correlation = new CorrelationComponent();
    await TestBed.configureTestingModule({
      imports: [CorrelationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    spyOn(window, 'alert').and.stub();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('calculate() with valid input arrays', () => {
    it('should calculate r and r² and set result when arrays are valid', () => {
      component.inputArray1 = '130, 650, 99, 150, 128, 302, 95, 945, 368, 961';
      component.inputArray2 = '186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601';

      component.calculate();

      expect(component.r).toBeCloseTo(0.9545, 4);
      expect(component.rSquared).toBeCloseTo(0.9111, 4);
      
    });
  });

  describe('calculate() with mismatched array lengths', () => {
    it('should not calculate if arrays have different lengths and show alert', () => {
      component.inputArray1 = '130, 650, 99, 150, 128';
      component.inputArray2 = '186, 699, 132, 272, 291, 331';

      component.calculate();

      expect(component.result).toBeNull();
      expect(window.alert).toHaveBeenCalledWith('Los arrays deben tener la misma longitud y no pueden estar vacíos.');
    });
  });


  describe('calculate() with alternative dataset', () => {
    it('should calculate r and r² correctly with another dataset', () => {
      component.inputArray1 = '163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130';
      component.inputArray2 = '186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601';

      component.calculate();

      expect(component.r).toBeCloseTo(0.9631, 4);
      expect(component.rSquared).toBeCloseTo(0.9276, 4);
    });
  });

  it('Should return r=0.9545 with the dataset Data_Test1', () => {
    const result = correlation.getRXY([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(result).toBeCloseTo(0.9545, 2);
  });

  it('Should return r²=0.9111 with the dataset Data_Test1', () => {
    const result = correlation.getRR([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(result).toBeCloseTo(0.9111, 2);
  });

  it('Should return r=0.9333 with the dataset Data_Test2', () => {
    const result = correlation.getRXY([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBeCloseTo(0.9333, 2);
  });

  it('Should return r²=0.8711 with the dataset Data_Test2', () => {
    const result = correlation.getRR([130, 650, 99, 150, 128, 302, 95, 945, 368, 961], [15, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBeCloseTo(0.8711, 2);
  });

  it('Should return r=0.9631 with the dataset Data_Test3', () => {
    const result = correlation.getRXY([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(result).toBeCloseTo(0.9631, 2);
  });

  it('Should return r²=0.9276 with the dataset Data_Test3', () => {
    const result = correlation.getRR([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [186, 699, 132, 272, 291, 331, 199, 1890, 788, 1601]);
    expect(result).toBeCloseTo(0.9276, 2);  
  });

  it('Should return r=0.9480 with the dataset Data_Test4', () => {
    const result = correlation.getRXY([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBeCloseTo(0.9480, 2);
  });

  it('Should return r²=0.8988 with the dataset Data_Test4', () => {
    const result = correlation.getRR([163, 765, 141, 166, 137, 355, 136, 1206, 433, 1130], [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBeCloseTo(0.8988, 2);
  });

});