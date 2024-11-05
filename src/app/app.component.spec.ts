import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'unit-testing' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unit-testing');
  });

  describe('mostrarMenu', () => {
  
    it('debe cambiar el menú actual cuando se llama a mostrarMenu', () => {
      component.mostrarMenu('1a');
      expect(component.currentMenu).toBe('1a');
    });
  });
  
  describe('calcular', () => {
    it('debe convertir la entrada en un array de números y calcular correctamente la media y desviación estándar', () => {
      component.inputValores = '1,2,3,4,5,6,7,8,9,10';
      spyOn(console, 'log'); // Espía la consola para comprobar mensajes si es necesario
      component.calcular();
  
      expect(component.valores).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      expect(component.resultadoMedia).toBe(5.5);
      expect(component.resultadoStddev).toBeCloseTo(2.872, 3); // Valor aproximado de la desviación estándar
    });
  
    it('debe mostrar un error en consola si se ingresan menos de 10 números', () => {
      component.inputValores = '1,2,3,4';
      spyOn(console, 'error');
      component.calcular();
      expect(console.error).toHaveBeenCalledWith('Por favor, ingresa exactamente 10 números.');
    });
  });
  
  describe('calcularMedia', () => {
    it('debe calcular correctamente la media de los valores', () => {
      component.valores = [10, 20, 30, null, 50, 60, 70, null, 90, 100];
      component.calcularMedia();
  
      expect(component.resultadoMedia).toBe(53.75);
      expect(component.resultadoStddev).toBeNull();
    });
  });
  
  describe('calcularStddev', () => {
    it('debe calcular la desviación estándar correctamente', () => {
      component.resultadoMedia = 53.75;
      component.valores = [10, 20, 30, null, 50, 60, 70, null, 90, 100];
      component.calcularStddev();
  
      expect(component.resultadoStddev).toBeCloseTo(30.388, 2); // Aproximación de la desviación estándar
    });
  
    it('no debe calcular la desviación estándar si la media es null', () => {
      component.resultadoMedia = null;
      spyOn(console, 'log');
      component.calcularStddev();
  
      expect(component.resultadoStddev).toBeNull();
      expect(console.log).not.toHaveBeenCalledWith('Desviación Estándar:', jasmine.any(Number));
    });
  });
  
});



