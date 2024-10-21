import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StddevComponent } from './stddev.component';

describe('StddevComponent', () => {
  let component: StddevComponent;
  let fixture: ComponentFixture<StddevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StddevComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StddevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display mean and standard deviation in the console', () => {
    const consoleSpy = spyOn(console, 'log').and.callThrough();

    // Asignar directamente los datos de prueba a la lista
    component['dataList'] = [15.0, 69.9, 6.5, 22.4, 28.4, 65.9, 19.4, 198.7, 38.8, 138.2];
    
    // Llamar al método que calcula y muestra los resultados
    component.calculateAndDisplayResults();

    // Verificar el valor redondeado a dos decimales para la media y desviación estándar
    expect(consoleSpy.calls.argsFor(0)[0]).toBe('Mean: 60.32');
    
    // Redondear la desviación estándar a dos decimales
    const roundedStdDev = parseFloat(consoleSpy.calls.argsFor(1)[0].split(': ')[1]).toFixed(2);
    expect(roundedStdDev).toBe('62.26');
  });
});
