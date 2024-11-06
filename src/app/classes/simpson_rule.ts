export class SimpsonRule {
    simpson(x0: number, x1: number, num_seg: number, func: (x: number) => number, ERROR: number): number {

        let prevResult: number;
        let currentResult: number = 0;
        let w: number = 0;
        let sum: number = 0;
        let iterations = 0;
         //Cambiar para función T el siguiente código: (Se deb enviar algo y agregar parámetro DOF)
        //Cambiar a Do While se calcula minimo 2 veces, se guarda p anterior y p actual y se comparan
        do {
            prevResult = currentResult;

            // Recalcular los valores
            w = (x1 - x0) / num_seg; 
            sum = func(x0) + func(x1); 

            // Calcula la suma para los impares y pares
            for (let i = 1; i < num_seg; i++) {
                const x = x0 + i * w;
                const fx = func(x);
                sum += (i % 2 === 0 ? 2 : 4) * fx;
                console.log(`f(${x}) = ${fx}`);
            }

            currentResult = (w / 3) * sum; 
            console.log(`Resultado actual: ${currentResult}`);
            iterations++;

            num_seg *= 2;

        } while (iterations < 2 || Math.abs(currentResult - prevResult) > ERROR);

        console.log(`Resultado final después de ${iterations} iteraciones: ${currentResult}`);
        return parseFloat(currentResult.toFixed(6)); 
    }

    f2x(x: number): number {
        return 2 * x;
    }

    fx2(x: number): number {
        return Math.pow(x, 2);
    }

    f1_x(x: number): number {
        return 1 / x;

        //gama y T
    }
}
