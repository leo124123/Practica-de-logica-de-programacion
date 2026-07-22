/**
 * EJERCICIO 3: DOS SUMAS (TWO SUM)
 * 
 * MANDATO:
 * Escribe una función `twoSum(nums, target)` que reciba un array de números enteros `nums`
 * y un número entero `target`. Debe retornar un array con los *índices* de los dos números
 * que sumen exactamente el valor del `target`.
 * 
 * Supuestos:
 * - Cada entrada tiene exactamente una única solución.
 * - No puedes utilizar el mismo elemento dos veces.
 * - Puedes retornar la respuesta en cualquier orden.
 * 
 * RETA A TU LÓGICA:
 * Intenta resolverlo con una complejidad de tiempo de O(N). Es decir, recorriendo el array una sola vez.
 * (Pista: Usa un Objeto o un Map de JavaScript para almacenar los números que vas viendo).
 * 
 * EJEMPLO:
 * twoSum([2, 7, 11, 15], 9) debe retornar [0, 1] porque nums[0] + nums[1] === 9.
 * twoSum([3, 2, 4], 6) debe retornar [1, 2].
 */

function twoSum(nums, target) {
  // Escribe tu código aquí
   const numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
      if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(nums[i], i);
  }
  return [];
     
}
 console.log(twoSum([2, 7, 11, 15], 9));

// ==========================================
// PRUEBAS DE VERIFICACIÓN (NO MODIFICAR)
// ==========================================
try {
  const sortRes = arr => [...arr].sort((a, b) => a - b);
  
  const res1 = twoSum([2, 7, 11, 15], 9);
  console.assert(JSON.stringify(sortRes(res1)) === JSON.stringify([0, 1]), `Fallo para [2, 7, 11, 15], target = 9. Obtuviste: ${JSON.stringify(res1)}`);

  const res2 = twoSum([3, 2, 4], 6);
  console.assert(JSON.stringify(sortRes(res2)) === JSON.stringify([1, 2]), `Fallo para [3, 2, 4], target = 6. Obtuviste: ${JSON.stringify(res2)}`);

  const res3 = twoSum([3, 3], 6);
  console.assert(JSON.stringify(sortRes(res3)) === JSON.stringify([0, 1]), `Fallo para [3, 3], target = 6. Obtuviste: ${JSON.stringify(res3)}`);

  console.log("✅ Ejercicio 3 (Two Sum): ¡Todos los tests pasaron exitosamente!");
} catch (error) {
  console.error("❌ Ejercicio 3 (Two Sum) falló:", error.message);
}
