import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';
import { Media } from '../classes/media';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>; 
  let media = new MediaComponent();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Cálculo de la media', () => {
    it('should calculate media for valid array [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]', () => {
      const result = component.getMedia([160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]);
      expect(result).toBe(550.6);
    });

    it('should calculate media for valid array [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
      const result = component.getMedia([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
      expect(result).toBe(60.32);
    });
  });

  describe('Validación de entrada', () => {
    it('should set error message if array length is not 10', () => {
      component.inputData = '1,2,3,4,5,6,7,8,9';  // 9 items
      component.calcularMedia();
      expect(component.errorMessage).toBe('Por favor, ingresa exactamente 10 números válidos separados por comas.');
      expect(component.resultado).toBeNull();
    });

    it('should set error message if array contains non-numeric values', () => {
      component.inputData = '1,2,3,4,5,6,7,8,9,abc';  // 'abc' is not a number
      component.calcularMedia();
      expect(component.errorMessage).toBe('Por favor, ingresa exactamente 10 números válidos separados por comas.');
      expect(component.resultado).toBeNull();
    });
  });

  it('Should return media = 550.6 with array [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]', () => {
    const result = media.getMedia([160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503]);
    expect(result).toBe(550.6);
  });

  it('Should return media = 60.32 with array [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]', () => {
    const result = media.getMedia([15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2]);
    expect(result).toBe(60.32);
  });

  
  describe('displayResults', () => {
    let consoleSpy: jasmine.Spy;

    beforeEach(() => {
      consoleSpy = spyOn(console, 'log');
    });

    it('should log "Calculando medias..."', () => {
      component.displayResults();
      expect(consoleSpy).toHaveBeenCalledWith("Calculando medias...");
    });
  });
});