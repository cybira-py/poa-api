# 📊 POA API REST - Backend

API REST construida con Node.js, Express y Sequelize para gestionar el Plan Operativo Anual (POA), incluyendo Objetivos, Acciones, Indicadores, Metadatos y catálogos relacionados como sucursales, unidades de medida, dimensiones, dependencias y proyectos.

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
PORT=5070
DB_NAME=ips_v2
DB_HOST=db.cybiraconsulting.local
DB_PORT=5432
DB_USER=bpm
DB_PASSWORD=cybiraconsulting
DB_DIALECT=postgres
SCHEMA=new_poa

SSL_KEY_PATH=/ruta/ssl/main-key.pem
SSL_CERT_PATH=/ruta/ssl/main-cert.pem
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

### ▶ Projects
| Método | Ruta              | Descripción                        |
|--------|-------------------|-------------------------------------|
| GET    | `/api/projects`   | Todos los proyectos                 |
| GET    | `/api/projects/:id` | Proyecto por ID                   |
| POST   | `/api/projects`   | Crear proyecto                      |
| PUT    | `/api/projects/:id` | Editar proyecto                    |
| DELETE | `/api/projects/:id` | Eliminar proyecto                  |

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
| Método | Ruta                                     | Descripción                                         |
|--------|------------------------------------------|----------------------------------------------------|
| GET    | `/api/indicators`                        | Todos los indicadores                              |
| GET    | `/api/indicators/:id`                    | Indicador por ID + metadata + unidad de medida     |
| GET    | `/api/indicators/objective/:objectiveId` | Indicadores de un objetivo                         |
| GET    | `/api/indicators/action/:actionId`       | Indicadores de una acción                          |
| POST   | `/api/indicators`                        | Crear indicador con su metadata y unidad de medida |
| PUT    | `/api/indicators/:id`                    | Editar indicador                                   |
| DELETE | `/api/indicators/:id`                    | Eliminar indicador                                 |

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

---

## ▶ Catálogos

### 🔹 Branches (Sucursales)
| Método | Ruta               | Descripción            |
|--------|--------------------|------------------------|
| GET    | `/api/branches`    | Listar sucursales      |
| POST   | `/api/branches`    | Crear sucursal         |
| PUT    | `/api/branches/:id`| Editar sucursal        |
| DELETE | `/api/branches/:id`| Eliminar sucursal      |

### 🔹 Units of Measurement
| Método | Ruta               | Descripción                |
|--------|--------------------|----------------------------|
| GET    | `/api/units`       | Listar unidades de medida  |
| POST   | `/api/units`       | Crear unidad               |
| PUT    | `/api/units/:id`   | Editar unidad              |
| DELETE | `/api/units/:id`   | Eliminar unidad            |

### 🔹 Dimensions
| Método | Ruta               | Descripción                |
|--------|--------------------|----------------------------|
| GET    | `/api/dimensions`  | Listar dimensiones         |
| POST   | `/api/dimensions`  | Crear dimensión            |
| PUT    | `/api/dimensions/:id` | Editar dimensión         |
| DELETE | `/api/dimensions/:id` | Eliminar dimensión       |

### 🔹 Dependencies
| Método | Ruta               | Descripción                |
|--------|--------------------|----------------------------|
| GET    | `/api/dependencies`| Listar dependencias        |
| POST   | `/api/dependencies`| Crear dependencia          |
| PUT    | `/api/dependencies/:id`| Editar dependencia     |
| DELETE | `/api/dependencies/:id`| Eliminar dependencia   |

---

## 📦 Ejemplo de creación de un POA

```json
{
  "description": "POA 2025 - Desarrollo Institucional"
}
```

## 📦 Ejemplo de creación de un Proyecto

```json
{
  "description": "Proyecto de mejora continua",
  "poaId": "uuid-del-poa"
}
```

## 📦 Ejemplo de creación de un Objetivo

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
- Estándar RESTful, modularización por capas, buenas prácticas con Sequelize.
