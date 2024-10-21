import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [],
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  
  // Simulación de una lista enlazada con un array
  private dataList: number[] = [];

  // Método para leer un archivo y procesar los datos
  public onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const fileContent: string = reader.result as string;
      // Separar los números por líneas
      this.dataList = fileContent
        .split('\n')
        .map(line => parseFloat(line.trim()))
        .filter(num => !isNaN(num));

      console.log(this.dataList);

      if (this.dataList.length > 0) {
      //this.calculateAndDisplayResults();
    } else {
      console.error('No data found in the file.');
    }
    };

    //reader.readAsText(file);
    this.dataList = [160, 591, 114, 229, 230, 270, 128, 1657, 624, 1503];
    this.calculateAndDisplayResults();
  }

  // Método para calcular la media
  private calculateMean(): number {
    const sum = this.dataList.reduce((a, b) => a + b, 0);
    return sum / this.dataList.length;
  }

  // Método para calcular la desviación estándar
  private calculateStdDev(mean: number): number {
    const sumSquaredDiffs = this.dataList
      .map(num => Math.pow(num - mean, 2))
      .reduce((a, b) => a + b, 0);
    return Math.sqrt(sumSquaredDiffs / (this.dataList.length - 1));
  }

  // Mostrar resultados en consola y guardarlos en un archivo
  public calculateAndDisplayResults(): void {
    if (this.dataList.length === 0) {
      console.error('No data to process.');
      return;
    }
    const mean = this.calculateMean();
    const stdDev = this.calculateStdDev(mean);

    // Mostrar resultados en la consola
    console.log(`Mean: ${mean}`);
    console.log(`Standard Deviation: ${stdDev}`);

    // Crear un archivo con los resultados
    //const results = `Mean: ${mean}\nStandard Deviation: ${stdDev}`;
   // this.saveToFile(results);
  }

  // Método para generar un archivo con los resultados
  //private saveToFile(data: string): void {
    //const blob = new Blob([data], { type: 'text/plain' });
    //const url = window.URL.createObjectURL(blob);
    //const link = document.createElement('a');
    //link.href = url;
    //link.download = 'results.txt';
    //link.click();
    //window.URL.revokeObjectURL(url);
  //}
}
