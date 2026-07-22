/**
 * EJERCICIO 2: VERIFICACIÓN DE PALÍNDROMOS
 * 
 * MANDATO:
 * Escribe una función `isPalindrome(str)` que determine si una cadena de texto dada es un palíndromo.
 * Un palíndromo es una palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda.
 * La función debe ignorar mayúsculas/minúsculas, espacios y caracteres especiales/puntuación.
 * Debe retornar `true` si es un palíndromo, y `false` en caso contrario.
 * 
 * EJEMPLO:
 * isPalindrome("A man, a plan, a canal: Panama") debe retornar true.
 * isPalindrome("race a car") debe retornar false.
 */

function isPalindrome(str) {
  // Escribe tu código aquí
  
   const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); 
console.log(isPalindrome("race a car"));
console.log(isPalindrome("oso"));

// ==========================================
// PRUEBAS DE VERIFICACIÓN (NO MODIFICAR)
// ==========================================
try {
  console.assert(isPalindrome("A man, a plan, a canal: Panama") === true, "Debería ser true para 'A man, a plan, a canal: Panama'");
  console.assert(isPalindrome("race a car") === false, "Debería ser false para 'race a car'");
  console.assert(isPalindrome("Anita lava la tina") === true, "Debería ser true para 'Anita lava la tina'");
  console.assert(isPalindrome("No 'x' in Nixon") === true, "Debería ser true para 'No \'x\' in Nixon'");
  console.assert(isPalindrome("hello") === false, "Debería ser false para 'hello'");

  console.log("✅ Ejercicio 2 (Palíndromo): ¡Todos los tests pasaron exitosamente!");
} catch (error) {
  console.error("❌ Ejercicio 2 (Palíndromo) falló:", error.message);
}
