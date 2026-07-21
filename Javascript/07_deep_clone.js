/**
 * EJERCICIO 7: CLONACIÓN PROFUNDA (DEEP CLONE)
 * 
 * MANDATO:
 * Escribe una función `deepClone(obj)` que cree y devuelva una copia profunda
 * (deep clone) de un objeto o array dado.
 * 
 * ¿Qué significa "copia profunda"?
 * En JavaScript, los objetos y arrays se copian por referencia. Si usas el operador de
 * propagación (spread operator `{...obj}`) o `Object.assign()`, solo haces una copia superficial (shallow copy).
 * Si el objeto contiene otros objetos o arrays dentro de él, estos se seguirán compartiendo por referencia,
 * y cambiar un valor en el clon modificará también el original.
 * 
 * Una copia profunda duplica todo el árbol de datos, creando nuevas referencias para cada objeto y array anidado.
 * 
 * NOTA:
 * No uses `JSON.parse(JSON.stringify(obj))`, ya que este método no maneja valores especiales
 * como `undefined`, funciones, fechas (`Date`), expresiones regulares (`RegExp`) ni símbolos de forma adecuada.
 * Resuélvelo de manera recursiva comprobando tipos de datos.
 * 
 * RETA A TU LÓGICA:
 * - Asegúrate de manejar tanto objetos (`{}`) como arrays (`[]`) y tipos primitivos.
 * - Asegúrate de no romper las referencias circulares si quieres ir un paso más allá (opcional).
 * 
 * EJEMPLO:
 * const original = { a: 1, b: { c: 2 } };
 * const clon = deepClone(original);
 * clon.b.c = 99;
 * console.log(original.b.c); // Debe seguir siendo 2 (no afectó al original)
 */

function deepClone(obj) {
  // Escribe tu código aquí
  
}

// ==========================================
// PRUEBAS DE VERIFICACIÓN (NO MODIFICAR)
// ==========================================
try {
  // Caso 1: Tipos Primitivos
  console.assert(deepClone(42) === 42, "Debería retornar el número original");
  console.assert(deepClone("hola") === "hola", "Debería retornar el string original");

  // Caso 2: Objeto simple
  const objSimple = { x: 10, y: 20 };
  const clonSimple = deepClone(objSimple);
  console.assert(JSON.stringify(clonSimple) === JSON.stringify(objSimple), "El clon del objeto simple no coincide");
  console.assert(clonSimple !== objSimple, "El clon no debe compartir la referencia del objeto original");

  // Caso 3: Objeto anidado
  const objAnidado = {
    nombre: "Juan",
    detalles: {
      edad: 25,
      hobbies: ["leer", "programar"]
    }
  };
  const clonAnidado = deepClone(objAnidado);
  console.assert(JSON.stringify(clonAnidado) === JSON.stringify(objAnidado), "El clon anidado no coincide");
  console.assert(clonAnidado !== objAnidado, "Debe tener diferente referencia el nivel superior");
  console.assert(clonAnidado.detalles !== objAnidado.detalles, "Debe tener diferente referencia el objeto interno 'detalles'");
  console.assert(clonAnidado.detalles.hobbies !== objAnidado.detalles.hobbies, "Debe tener diferente referencia el array 'hobbies'");

  // Modificación de prueba para asegurar independencia
  clonAnidado.detalles.hobbies.push("correr");
  console.assert(objAnidado.detalles.hobbies.length === 2, "La modificación al clon afectó al objeto original");

  console.log("✅ Ejercicio 7 (Clonación Profunda): ¡Todos los tests pasaron exitosamente!");
} catch (error) {
  console.error("❌ Ejercicio 7 (Clonación Profunda) falló:", error.message);
}
