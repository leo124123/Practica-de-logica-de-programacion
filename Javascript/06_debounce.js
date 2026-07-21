/**
 * EJERCICIO 6: DEBOUNCE (FUNCIÓN ANTI-REBOTE)
 * 
 * MANDATO:
 * Escribe una función de orden superior `debounce(func, wait)` que retorne una versión
 * "debounced" de la función provista. 
 * 
 * ¿Qué es un Debounce?
 * Limita el ritmo al que se puede ejecutar una función. Cuando llamamos a la función
 * retornada por `debounce`, esta no se ejecuta inmediatamente. En su lugar, espera un
 * tiempo determinado en milisegundos (`wait`). Si durante ese tiempo de espera la función
 * vuelve a ser llamada, el temporizador se reinicia. La función original `func` solo debe
 * ejecutarse una vez transcurrido el tiempo `wait` desde la última llamada.
 * 
 * Esto es extremadamente útil para optimizar eventos de alta frecuencia en el navegador,
 * como el cambio de tamaño de ventana (resize), el scroll o las búsquedas en tiempo real (autocompletado).
 * 
 * HINT:
 * La función retornada debe mantener acceso a variables externas (Closure) para recordar
 * el temporizador (`timeoutId`). Asegúrate de pasar los argumentos correctamente a la función original.
 * 
 * EJEMPLO:
 * const miFuncion = (texto) => console.log(texto);
 * const miFuncionDebounced = debounce(miFuncion, 300);
 * 
 * miFuncionDebounced("A"); // Se inicia el timer de 300ms
 * miFuncionDebounced("B"); // Se cancela el timer anterior y se inicia uno nuevo
 * miFuncionDebounced("C"); // Se cancela el timer anterior y se inicia uno nuevo
 * // Si no hay más llamadas, después de 300ms se imprimirá: "C"
 */

function debounce(func, wait) {
  // Escribe tu código aquí
  
}

// ==========================================
// PRUEBAS DE VERIFICACIÓN (NO MODIFICAR)
// ==========================================
(function testDebounce() {
  let contador = 0;
  let ultimoValor = null;

  const fnOriginal = (val) => {
    contador++;
    ultimoValor = val;
  };

  const fnDebounced = debounce(fnOriginal, 100);

  // Ejecutamos múltiples llamadas consecutivas rápidas
  fnDebounced("Llamada 1");
  fnDebounced("Llamada 2");
  fnDebounced("Llamada 3");

  // Al principio, el contador debe seguir siendo 0
  console.assert(contador === 0, "Error: La función no debe ejecutarse inmediatamente.");

  // Esperamos 150ms para asegurar que transcurrió el tiempo `wait` (100ms)
  setTimeout(() => {
    try {
      console.assert(contador === 1, `Error: Se debió haber ejecutado exactamente 1 vez. Contador actual: ${contador}`);
      console.assert(ultimoValor === "Llamada 3", `Error: Debió ejecutarse con el último argumento recibido. Obtuviste: "${ultimoValor}"`);
      
      // Hacemos otra llamada después de que ya expiró el primer debounce
      fnDebounced("Llamada tardía");
      
      setTimeout(() => {
        try {
          console.assert(contador === 2, `Error: Después de expirar y volver a llamar, el contador debió subir a 2. Contador actual: ${contador}`);
          console.assert(ultimoValor === "Llamada tardía", `Error: El último valor debió ser "Llamada tardía"`);
          
          console.log("✅ Ejercicio 6 (Debounce): ¡Todos los tests pasaron exitosamente!");
        } catch (err) {
          console.error("❌ Ejercicio 6 (Debounce) falló en la verificación tardía:", err.message);
        }
      }, 150);

    } catch (error) {
      console.error("❌ Ejercicio 6 (Debounce) falló:", error.message);
    }
  }, 150);
})();
