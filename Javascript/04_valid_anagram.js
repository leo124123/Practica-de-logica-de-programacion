/**
 * EJERCICIO 4: ANAGRAMA VÁLIDO
 * 
 * MANDATO:
 * Escribe una función `isValidAnagram(s, t)` que reciba dos cadenas de texto `s` y `t`,
 * y retorne `true` si `t` es un anagrama de `s`, o `false` en caso contrario.
 * 
 * Un anagrama es una palabra o frase formada por la reordenación de las letras de otra
 * palabra o frase diferente, usando exactamente las mismas letras originales una sola vez.
 * 
 * RETA A TU LÓGICA:
 * Trata de resolverlo de forma eficiente contando la frecuencia de cada carácter 
 * utilizando un objeto en JavaScript en lugar de ordenar los strings.
 * 
 * EJEMPLO:
 * isValidAnagram("anagram", "nagaram") debe retornar true.
 * isValidAnagram("rat", "car") debe retornar false.
 */

function isValidAnagram(s, t) {
  // Escribe tu código aquí
      

       
}



// ==========================================
// PRUEBAS DE VERIFICACIÓN (NO MODIFICAR)
// ==========================================
try {
  console.assert(isValidAnagram("anagram", "nagaram") === true, "Debería retornar true para 'anagram' y 'nagaram'");
  console.assert(isValidAnagram("rat", "car") === false, "Debería retornar false para 'rat' y 'car'");
  console.assert(isValidAnagram("a", "ab") === false, "Debería retornar false para 'a' y 'ab'");
  console.assert(isValidAnagram("listen", "silent") === true, "Debería retornar true para 'listen' y 'silent'");
  console.assert(isValidAnagram("dormitory", "dirtyroom") === true, "Debería retornar true para 'dormitory' y 'dirtyroom'");

  console.log("✅ Ejercicio 4 (Anagrama Válido): ¡Todos los tests pasaron exitosamente!");
} catch (error) {
  console.error("❌ Ejercicio 4 (Anagrama Válido) falló:", error.message);
}
