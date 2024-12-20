// Función Gamma
export class GammaFunction {
    // Implementación de la función Gamma usando la regla de Simpson
    gamma(z: number, num_seg: number, ERROR: number): number {
        const simpsonRule = new SimpsonRule(); // Reutilizamos la regla de Simpson
        return simpsonRule.simpson(0, 20, num_seg, this.gammaIntegrand(z), ERROR); // Límite aumentado a 20
    }

    // Definir la función que vamos a integrar para Gamma: t^(z-1) * e^(-t)
    private gammaIntegrand(z: number): (t: number) => number {
        return (t: number) => Math.pow(t, z - 1) * Math.exp(-t);
    }
}

// Distribución t-Student
export class TStudent {
    private gammaFunction = new GammaFunction();

    // Función t-Student
    tDistribution(x: number, dof: number, num_seg: number, ERROR: number): number {
        const numerator = this.gammaFunction.gamma((dof + 1) / 2, num_seg, ERROR);
        const denominator = Math.sqrt(dof * Math.PI) * this.gammaFunction.gamma(dof / 2, num_seg, ERROR);

        // Integración usando Simpson desde -∞ a x mediante simetría
        const integrand = (t: number) => Math.pow(1 + (Math.pow(t, 2) / dof), -(dof + 1) / 2);
        const simpsonRule = new SimpsonRule();
        const integralResult = simpsonRule.simpson(0, Math.abs(x), num_seg, integrand, ERROR); // Ajuste en límite inferior

        return x < 0 ? (numerator / denominator) * -integralResult : (numerator / denominator) * integralResult;
    }
}

// Clase SimpsonRule mejorada para precisión
export class SimpsonRule {
    simpson(x0: number, x1: number, num_seg: number, func: (x: number) => number, ERROR: number): number {
        let prevResult: number;
        let currentResult: number = 0;
        let w: number;
        let sum: number;
        let iterations = 0;

        do {
            prevResult = currentResult;
            w = (x1 - x0) / num_seg;
            sum = func(x0) + func(x1);

            for (let i = 1; i < num_seg; i++) {
                const x = x0 + i * w;
                sum += (i % 2 === 0 ? 2 : 4) * func(x);
            }

            currentResult = (w / 3) * sum;
            iterations++;
            num_seg *= 2;

        } while (iterations < 2 || Math.abs(currentResult - prevResult) > ERROR);

        return currentResult;
    }
}
