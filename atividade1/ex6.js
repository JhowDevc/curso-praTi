function verificarTriangulo(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        if (a === b && b === c) {
            console.log("Triângulo Equilátero");
        } else if (a === b || a === c || b === c) {
            console.log("Triângulo Isósceles");
        } else {
            console.log("Triângulo Escaleno");
        }
    } else {
        console.log("Os lados fornecidos não formam um triângulo.");
    }
}

verificarTriangulo(3, 4, 5);  // Exemplo de uso
