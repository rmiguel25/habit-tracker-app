// Raúl Miguel Fernández Prueba 1

import * as React from 'react';
// Importamos la función insegura que ejecuta código arbitrario
import { runEval } from './utils';

import { useAuth } from 'context/auth-context';
import { UnathenticatedApp } from './unathenticated-app';
import { AuthenticatedAppProviders } from 'context';
import { AuthenticatedApp } from './authenticated-app';

function App() {
  const { user } = useAuth();

  // Uso de ejemplo de la función insegura:
  // Esto evalúa la cadena '2 + 2' como código JavaScript.
  // CodeQL lo marcará como uso peligroso de eval().
  console.log('2 + 2 =', runEval('2 + 2'));

  // Dependiendo de si hay usuario autenticado, renderizamos
  return user ? (
    <AuthenticatedAppProviders>
      <AuthenticatedApp />
    </AuthenticatedAppProviders>
  ) : (
    <UnathenticatedApp />
  );
}

export { App };
