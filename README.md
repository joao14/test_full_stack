# APP Test – Fullstack + CRM + WordPress API

Este proyecto contiene tres módulos principales:

1. **Backend** → API en Node.js / Express  
2. **Frontend** → Dashboard en Next.js  
3. **CRM (WordPress)** → Plugin personalizado que expone un endpoint REST

El objetivo es cumplir con la prueba técnica solicitada:  
✔ CRUD de usuarios  
✔ Dashboard en Next.js  
✔ Backend propio y también alternativa vía WordPress Plugin  
✔ Despliegue fácil mediante Docker

---

# Estructura del Proyecto

```
app_test/
├── backend/
│   ├── src/
│   │   ├── api/
│   │   │   ├── controllers/
│   │   │   ├── models/
│   │   │   ├── routes/
│   │   │   └── utils/
│   │   └── server.js
│   └── package.json
│   └── Dockerfile
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── styles/
│   │   └── utils/
│   └── package.json
│   └── Dockerfile
├── crm/
│   ├── wp-content/
│   │   ├── plugins/
│   │   └── themes/
│   └── docker-compose.yaml
│   └── Dockerfile.wordpress
|   |__ docker-compose.yaml
|__ docker-compose.yaml
|__ README.md
``` 

---

# 1. Requisitos Previos

- Docker  
- Docker Compose  
- Node.js (solo si deseas correr backend/frontend localmente)

---

# 2. Ejecutar TODO el entorno con Docker

En la raíz del proyecto:

```bash
docker-compose up -d

# 3. Acceder al dashboard

http://localhost:3000

# 4. Acceder al CRM (WordPress)

cd crm

docker-compose up -d

## 🗄️ Base de Datos (MySQL) – Tabla `users`

El backend (`api-users`) utiliza una tabla llamada `users` para almacenar usuarios del sistema y deben estar creadas antes de ejecutar el backend. 
A continuación se presenta el script SQL oficial para crear la tabla en **MySQL** (local, Docker o Azure Database for MySQL).

### 📑 Script SQL – Crear tabla `users` (MySQL)

```sql
CREATE TABLE `users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(100) NOT NULL,
  `last_name` VARCHAR(100) NOT NULL,
  `email` VARCHAR(150) NOT NULL UNIQUE,
  `password_hash` VARCHAR(255) NOT NULL,
  `role` VARCHAR(50) DEFAULT 'USER',
  `is_active` TINYINT(1) DEFAULT 1,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `idx_email` (`email`),
  INDEX `idx_role` (`role`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
