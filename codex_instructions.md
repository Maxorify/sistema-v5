# 🧠 Codex Instructions – Migración a Vite + React 18 + Bootstrap 5

## Contexto
Este proyecto es una adaptación moderna de la plantilla **Star Admin React**, originalmente desarrollada con *Create React App (CRA)* y React 16.  
El objetivo es **mantener el mismo diseño, rutas y estructura visual**, pero modernizar completamente su base técnica a **Vite + React 18 + Sass + Bootstrap 5**, eliminando dependencias obsoletas y optimizando la performance.

---

## 🎯 Objetivo general
Codex debe:

1. Asegurar compatibilidad completa con **Vite** y **React 18**.  
2. Mantener el sistema visual, rutas y componentes del proyecto original.  
3. Centralizar los estilos SCSS en un solo punto de entrada (`main.scss`).  
4. Migrar el router a **React Router DOM v6**.  
5. Eliminar dependencias viejas (`react-scripts`, `node-sass`, etc.).  
6. Mantener el lenguaje original: **JavaScript (no TypeScript)**.  

---

## 📂 Estructura esperada del proyecto

src/
├── assets/
│ ├── images/
│ └── styles/
│ └── main.scss ← archivo maestro de estilos globales
├── app/
│ ├── App.js ← versión antigua (mantiene rutas y componentes)
│ ├── AppRoutes.js ← rutas internas (migradas a v6)
├── App.jsx ← raíz moderna que importa App.js
├── main.jsx ← entrypoint con ReactDOM.createRoot
└── index.css


---

## 🎨 Estilos

- Crear `src/assets/styles/main.scss` e importar en él todos los parciales (`_variables.scss`, `_mixins`, `_components`, etc.) **en orden lógico**.
- Importar el `main.scss` global desde `App.jsx`:
  ```js
  import "./assets/styles/main.scss";
  import "bootstrap/dist/css/bootstrap.min.css";
  import "bootstrap/dist/js/bootstrap.bundle.min.js";

  🧭 Rutas (Router)

El archivo AppRoutes.js debe conservar la lógica de rutas, pero adaptada a React Router DOM v6.

Ejemplo de actualización:
import { Routes, Route } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Login from "./user-pages/Login";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default AppRoutes;

Integración de Bootstrap 5

Instalar dependencias:

npm install bootstrap@latest @popperjs/core


Importar CSS y JS en App.jsx o en main.scss:

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


Actualizar clases de Bootstrap 4 a 5 solo si Codex detecta errores de estilo.
No eliminar className antiguos si funcionan correctamente.

⚙️ Configuración de Vite

Confirmar que vite.config.js está configurado para JSX:

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})


main.jsx debe contener el entrypoint moderno:

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

🔄 Protocolo de ejecución (Fases de Codex)

Codex NO debe modificar todo el proyecto de una vez.
Debe trabajar por etapas secuenciales, validando cada una antes de continuar.

FASE 1 – Entorno

Verificar que vite.config.js, main.jsx y App.jsx estén funcionales.

Confirmar que npm run dev levante sin errores.

FASE 2 – Router

Migrar AppRoutes.js a React Router v6.

Mantener estructura y rutas existentes.

Verificar renderizado correcto en navegador.

FASE 3 – Estilos

Crear main.scss y centralizar imports.

Importar main.scss en App.jsx.

Validar visualmente que no se pierdan estilos.

FASE 4 – Bootstrap 5

Reemplazar dependencias viejas de Bootstrap 4.

Probar Navbar, botones y formularios.

FASE 5 – Limpieza

Eliminar dependencias obsoletas.

Quitar imports duplicados.

Confirmar que npm run dev compile sin warnings ni errores.

✅ Validación entre fases

Antes de pasar a la siguiente fase:

Ejecutar npm run dev.

Verificar que no haya errores en consola.

Comprobar visualmente que la app se ve igual o mejor.

Realizar commit:

git add .
git commit -m "Fase X completada: <descripción>"

🧠 Reglas de oro para Codex

Una tarea por vez.

No modificar rutas ni estilos simultáneamente.

Mantener siempre imports relativos (./ o ../), no absolutos.

No incluir configuraciones de Webpack ni CRA.

No usar require(), solo import.

🧩 Flujo recomendado de uso

Ejemplo de interacción correcta:

Human: Codex, ejecuta la Fase 2 (Migración del router) según las instrucciones de codex_instructions.md.
Codex: modifica AppRoutes.js → prueba compilación.
Human: revisa con npm run dev → commit → siguiente fase.


Nunca:

Human: Codex, migra el router, actualiza los estilos y limpia dependencias al mismo tiempo.


Eso rompe el build.

🧰 Validación final

Al finalizar todas las fases:

npm run dev levanta sin errores.

Las rutas y componentes funcionan.

Bootstrap 5 está activo.

Todos los estilos se aplican.

El dashboard luce igual o mejor que antes.