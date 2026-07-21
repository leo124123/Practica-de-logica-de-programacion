/**
 * EJERCICIO 5: SECUENCIA DE FIBONACCI
 * 
 * MANDATO:
 * Escribe una función `fib(n)` que retorne el n-ésimo número de la secuencia de Fibonacci.
 * 
 * La secuencia de Fibonacci comienza con 0 y 1, y cada número subsiguiente es la suma 
 * de los dos anteriores:
 * F(0) = 0, F(1) = 1
 * F(n) = F(n-1) + F(n-2) para n > 1.
 * 
 * RETA A TU LÓGICA:
 * Si lo resuelves de forma puramente recursiva sin optimizar (ej. `return fib(n-1) + fib(n-2)`),
 * el tiempo de ejecución crecerá exponencialmente (O(2^N)) y colapsará la memoria con valores altos de n.
 * Intenta resolverlo usando:
 * A) Un bucle iterativo (Complejidad de tiempo O(N) y espacio O(1)).
 * B) Recursividad con memorización (guardando los resultados ya calculados en un objeto o caché).
 * 
 * EJEMPLO:
 * fib(2) debe retornar 1.
 * fib(3) debe retornar 2.
 * fib(4) debe retornar 3.
 * fib(10) debe retornar 55.
 */

function fib(n) {
  // Escribe tu código aquí
  
}

// ==========================================
// PRUEBAS DE VERIFICACIÓN (NO MODIFICAR)
// ==========================================
try {
  console.assert(fib(0) === 0, "Fallo para n = 0");
  console.assert(fib(1) === 1, "Fallo para n = 1");
  console.assert(fib(2) === 1, "Fallo para n = 2");
  console.assert(fib(3) === 2, "Fallo para n = 3");
  console.assert(fib(4) === 3, "Fallo para n = 4");
  console.assert(fib(10) === 55, "Fallo para n = 10");
  console.assert(fib(50) === 12586269025, "Fallo para n = 50. Si tu código tarda mucho aquí o da error de Stack Overflow, necesitas optimizarlo.");

  console.log("✅ Ejercicio 5 (Fibonacci): ¡Todos los tests pasaron exitosamente!");
} catch (error) {
  console.error("❌ Ejercicio 5 (Fibonacci) falló:", error.message);
}
