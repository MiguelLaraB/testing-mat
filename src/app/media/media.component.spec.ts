import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaComponent } from './media.component';

describe('MediaComponent', () => {
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display mean and standard deviation in the console', () => {
    const consoleSpy = spyOn(console, 'log').and.callThrough();

    // Asignar directamente los datos de prueba a la lista
    component['dataList'] = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    
    // Llamar al método que calcula y muestra los resultados
    component.calculateAndDisplayResults();

    // Verificar el valor redondeado a dos decimales para la media y desviación estándar
    expect(consoleSpy.calls.argsFor(0)[0]).toBe('Mean: 550.6');
    
    // Redondear la desviación estándar a dos decimales
    const roundedStdDev = parseFloat(consoleSpy.calls.argsFor(1)[0].split(': ')[1]).toFixed(2);
    expect(roundedStdDev).toBe('572.03');
  });
});
