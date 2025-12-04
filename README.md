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