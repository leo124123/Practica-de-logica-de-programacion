/**
 * EJERCICIO 1: FIZZBUZZ
 * 
 * MANDATO:
 * Escribe una función `fizzBuzz(n)` que devuelva un array con los números desde 1 hasta n.
 * Pero para los múltiplos de tres, el array debe contener "Fizz" en lugar del número,
 * y para los múltiplos de cinco, debe contener "Buzz".
 * Para los números que son múltiplos de tres y cinco a la vez, debe contener "FizzBuzz".
 * 
 * EJEMPLO:
 * fizzBuzz(5) debe retornar: [1, 2, "Fizz", 4, "Buzz"]
 * fizzBuzz(15) debe retornar: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 */

function fizzBuzz(n) {
  const resultado = [];

  for (let i = 1; i <= n; i++) {

    if (i% 3===0 && i% 5===0) {
      resultado.push("FizzBuzz");

    } else if (i% 3===0) {
      resultado.push("Fizz");

    } else if (i% 5===0) {
      resultado.push("Buzz");

    } else {
      resultado.push(i);
    }

  }

  return resultado;
}

console.log(fizzBuzz(15));


// ==========================================
// PRUEBAS DE VERIFICACIÓN (NO MODIFICAR)
// ==========================================
try {
  const res5 = fizzBuzz(5);
  console.assert(JSON.stringify(res5) === JSON.stringify([1, 2, "Fizz", 4, "Buzz"]), `Fallo para n = 5. Obtuviste: ${JSON.stringify(res5)}`);

  const res15 = fizzBuzz(15);
  const expected15 = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"];
  console.assert(JSON.stringify(res15) === JSON.stringify(expected15), `Fallo para n = 15. Obtuviste: ${JSON.stringify(res15)}`);

  console.log("✅ Ejercicio 1 (FizzBuzz): ¡Todos los tests pasaron exitosamente!");
} catch (error) {
  console.error("❌ Ejercicio 1 (FizzBuzz) falló:", error.message);
}
