# 📊 POA API REST - Backend

API REST construida con Node.js, Express y Sequelize para gestionar el Plan Operativo Anual (POA), incluyendo Objetivos, Acciones, Indicadores, Metadatos y otras entidades relacionadas.

---

## 🚀 Tecnologías
- Node.js
- Express
- Sequelize ORM
- PostgreSQL
- ESModules
- dotenv

---

## 📁 Estructura del proyecto

```
project/
├── controllers/
├── routes/
├── models/
├── config/
├── .env
├── server.js
└── README.md
```

---

## 🔐 Variables de entorno `.env`
```env
PORT=
DB_NAME=
DB_HOST=
DB_PORT=5432
DB_USER=bpm
DB_PASSWORD=
DB_DIALECT
SCHEMA=
```

---

## 📌 Endpoints disponibles

### ▶ POA
| Método | Ruta              | Descripción                     |
|--------|-------------------|----------------------------------|
| GET    | `/api/poa`        | Listar todos los POA            |
| GET    | `/api/poa/:id`    | Obtener un POA con objetivos    |
| POST   | `/api/poa`        | Crear un nuevo POA              |
| PUT    | `/api/poa/:id`    | Editar un POA                   |
| DELETE | `/api/poa/:id`    | Eliminar un POA                 |

### ▶ Objectives
| Método | Ruta                                | Descripción                       |
|--------|-------------------------------------|-----------------------------------|
| GET    | `/api/objectives`                  | Todos los objetivos               |
| GET    | `/api/objectives/:id`              | Objetivo por ID                   |
| GET    | `/api/objectives/poa/:poaId`       | Objetivos de un POA               |
| POST   | `/api/objectives`                 | Crear objetivo                    |
| PUT    | `/api/objectives/:id`             | Editar objetivo                   |
| DELETE | `/api/objectives/:id`             | Eliminar objetivo                 |

### ▶ Actions
| Método | Ruta                                    | Descripción                    |
|--------|-----------------------------------------|--------------------------------|
| GET    | `/api/actions`                         | Todas las acciones             |
| GET    | `/api/actions/:id`                     | Acción por ID                  |
| GET    | `/api/actions/objective/:objectiveId` | Acciones de un objetivo        |
| POST   | `/api/actions`                        | Crear acción                   |
| PUT    | `/api/actions/:id`                    | Editar acción                  |
| DELETE | `/api/actions/:id`                    | Eliminar acción                |

### ▶ Indicators
| Método | Ruta                                     | Descripción                     |
|--------|------------------------------------------|----------------------------------|
| GET    | `/api/indicators`                        | Todos los indicadores            |
| GET    | `/api/indicators/:id`                    | Indicador por ID + metadata + unidad de medida |
| GET    | `/api/indicators/objective/:objectiveId` | Indicadores de un objetivo       |
| GET    | `/api/indicators/action/:actionId`       | Indicadores de una acción        |
| POST   | `/api/indicators`                        | Crear indicador con su metadata y unidad de medida |
| PUT    | `/api/indicators/:id`                    | Editar indicador                 |
| DELETE | `/api/indicators/:id`                    | Eliminar indicador               |

### ▶ Indicator Metadata
| Método | Ruta                                        | Descripción                          |
|--------|---------------------------------------------|--------------------------------------|
| GET    | `/api/indicator-metadata`                  | Todos los metadatos                  |
| GET    | `/api/indicator-metadata/:indicatorId`     | Metadata de un indicador             |
| POST   | `/api/indicator-metadata`                  | Crear metadato                       |
| PUT    | `/api/indicator-metadata/:indicatorId`     | Editar metadato                      |
| DELETE | `/api/indicator-metadata/:indicatorId`     | Eliminar metadato                    |

### ▶ Indicator Data
| Método | Ruta                                        | Descripción                       |
|--------|---------------------------------------------|-----------------------------------|
| GET    | `/api/indicator-data`                      | Todos los registros de datos      |
| GET    | `/api/indicator-data/indicator/:id`        | Data por indicador                |
| POST   | `/api/indicator-data`                      | Crear registro de data            |
| PUT    | `/api/indicator-data/:id`                  | Editar data                       |
| DELETE | `/api/indicator-data/:id`                  | Eliminar data                     |

### ▶ Catálogos

#### Branches (Sucursales)
| Método | Ruta              | Descripción       |
|--------|-------------------|-------------------|
| GET    | `/api/branches`  | Todas las sucursales |
| POST   | `/api/branches`  | Crear sucursal     |
| PUT    | `/api/branches/:id` | Editar sucursal  |
| DELETE | `/api/branches/:id` | Eliminar sucursal |

#### Units of Measurement
| Método | Ruta              | Descripción              |
|--------|-------------------|--------------------------|
| GET    | `/api/units`     | Todas las unidades        |
| POST   | `/api/units`     | Crear unidad              |
| PUT    | `/api/units/:id` | Editar unidad              |
| DELETE | `/api/units/:id` | Eliminar unidad           |

---

## 📦 Ejemplo de creación de un POA (POST `/api/poa`)
```json
{
  "description": "POA 2025 - Desarrollo Institucional"
}
```

## 📦 Ejemplo de creación de un Objective
```json
{
  "description": "Mejorar atención al cliente",
  "poaId": "uuid-del-poa",
  "type": "estratégico",
  "code": "OBJ-001"
}
```

---

## 🛠 Cómo iniciar el proyecto
```bash
npm install
npm start      # para producción
npm run dev    # para desarrollo con nodemon
```

---

## 🤝 Contribuciones
- Usa PRs o reporta issues para mejorar esta API.
- Estándar RESTful y modularización por capas.

