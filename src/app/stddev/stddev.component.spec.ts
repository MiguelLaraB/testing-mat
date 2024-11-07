import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StddevComponent } from './stddev.component';
import { FormsModule } from '@angular/forms';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;
  let stddev: StddevComponent;

  beforeEach(() => {
    stddev = new StddevComponent();
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StddevComponent, FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Component Creation', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('calcularStddev', () => {
    describe('With valid data', () => {
      it('should set resultado correctly', () => {
        component.inputData = '160,591,114,229,230,270,128,1657,624,1503';
        component.calcularStddev();
        expect(component.resultado).toBe(572.03);
        expect(component.errorMessage).toBeNull();
      });
    });

    describe('With invalid data (non-numeric)', () => {
      it('should set errorMessage when data contains non-numeric values', () => {
        component.inputData = '160,591,114,229,230,notanumber,128,1657,624,1503';
        component.calcularStddev();
        expect(component.resultado).toBeNull();
        expect(component.errorMessage).toBe('Por favor, ingresa exactamente 10 números válidos separados por comas.');
      });
    });

    describe('With too few numbers', () => {
      it('should set errorMessage when data contains less than 10 numbers', () => {
        component.inputData = '160,591,114,229,230';
        component.calcularStddev();
        expect(component.resultado).toBeNull();
        expect(component.errorMessage).toBe('Por favor, ingresa exactamente 10 números válidos separados por comas.');
      });
    });

    describe('With too many numbers', () => {
      it('should set errorMessage when data contains more than 10 numbers', () => {
        component.inputData = '160,591,114,229,230,270,128,1657,624,1503,999';
        component.calcularStddev();
        expect(component.resultado).toBeNull();
        expect(component.errorMessage).toBe('Por favor, ingresa exactamente 10 números válidos separados por comas.');
      });
    });
  });

  describe('getStddev method', () => {
    it('Should return stddev = 572.03 with array [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]', () => {
      const result = stddev.getStddev([160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]);
      expect(result).toBe(572.03);
    });

    it('Should return stddev = 62.26 with array [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
      const result = stddev.getStddev([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
      expect(result).toBe(62.26);
    });
  });
});
