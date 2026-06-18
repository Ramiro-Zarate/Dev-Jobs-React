# DevJobs React

Job board para desarrolladores latinomericanos. Buscá empleos por tecnología, ubicación y nivel de experiencia.

## Screenshot

![DevJobs React](./public/screenshot.png)

## Tech Stack

![React](https://img.shields.io/badge/React-19.2.4-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-8.0.1-646CFF?logo=vite)
![React Router](https://img.shields.io/badge/React%20Router-7.14.1-CA4245?logo=react-router)
![Zustand](https://img.shields.io/badge/Zustand-5.0.12-2C3E50?logo=zustand)
![snarkdown](https://img.shields.io/badge/snarkdown-2.0.0-FF6B6B)

- **React** 19.2.4 con React Compiler
- **Vite** 8.0.1
- **React Router** 7.14.1
- **Zustand** 5.0.12
- **snarkdown** 2.0.0

## Features

- Buscador con filtros por tecnología, ubicación y nivel de experiencia
- Búsqueda con debounce de 500ms
- Paginación de resultados
- Detalle completo de cada empleo con rendering de Markdown
- Diseño responsive
- Navegación fluida con React Router

## API

Este proyecto consume la **DevJobs API** (https://dev-jobs-api-sepia.vercel.app/jobs) creada por [Ramiro Zarate](https://github.com/Ramiro-Zarate).

### Endpoints remotos (lectura)

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/jobs` | Listado de empleos con filtros |
| GET | `/jobs/{jobId}` | Detalle de un empleo específico |

Parámetros de búsqueda:

- `text` - Búsqueda por texto
- `technology` - Filtrar por tecnología
- `location` - Filtrar por ubicación
- `level` - Filtrar por nivel de experiencia
- `limit` - Resultados por página
- `offset` - Offset para paginación

### Persistencia local (escritura)

El CRUD de escritura (crear, editar, eliminar) se persiste en `localStorage` del navegador con la clave `devjobs:local-jobs`. Decisión de diseño: la API remota no tiene auth, por lo que las mutaciones quedan del lado del cliente para que el demo del portfolio muestre un CRUD funcional sin comprometer datos reales.

| Operación | Destino |
|-----------|---------|
| Crear empleo | `localStorage` |
| Editar empleo | `localStorage` (crea override local si el empleo viene de la API) |
| Eliminar empleo | `localStorage` |

Las publicaciones locales aparecen en una sección "Tus publicaciones" arriba del listado principal de búsqueda, y se priorizan sobre la API al abrir el detalle.

## Instalación

```bash
npm install
npm run dev
```

## Scripts

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Iniciar servidor de desarrollo |
| `npm run build` | Construir versión de producción |
| `npm run lint` | Verificar código con ESLint |
| `npm run preview` | Previsualizar versión de producción |

---

Desarrollado por **Ramiro Zarate**