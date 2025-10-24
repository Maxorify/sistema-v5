import React from 'react';
import '../App.css';

function App() {
  return (
    <div className="app-shell">
      <header className="app-shell__header">
        <h1>Star Admin React</h1>
        <p className="app-shell__subtitle">Migración en progreso hacia Vite + React 18</p>
      </header>
      <main className="app-shell__content">
        <section className="app-shell__card">
          <h2>Fase 1 completada</h2>
          <p>
            El entorno de desarrollo basado en Vite está listo. A partir de aquí podemos avanzar con la
            migración de rutas, estilos y componentes originales en las siguientes fases.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
