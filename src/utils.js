/**
 * Esta es una funcion insegura que ejecuta código arbitrario.
 * Nuestro CodeQL la detectará como uso peligroso de eval().
 */
export function runEval(code) {
  return eval(code);
}
