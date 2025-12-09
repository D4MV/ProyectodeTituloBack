# TerraTrack Backend API

Backend de TerraTrack construido con NestJS, PostgreSQL y Prisma.

## 📋 Requisitos Previos

- Node.js 20 LTS o superior
- PostgreSQL 14 o superior
- pnpm (recomendado) o npm

## 🚀 Configuración del Proyecto

### 1. Instalar dependencias

```bash
pnpm install
```

### 2. Configurar variables de entorno

Copia el archivo `.env.example` a `.env` y configura las variables:

```bash
cp .env.example .env
```

Edita el archivo `.env` con tus valores:

```env
DATABASE_URL=postgresql://usuario:password@localhost:5432/terratrack?schema=public
JWT_SECRET=tu_secret_aqui
JWT_EXPIRATION=7d
ALLOWED_ORIGINS=http://localhost:5173
```

### 3. Ejecutar migraciones de Prisma

```bash
pnpm prisma:migrate
pnpm prisma:generate
```

### 4. Iniciar el servidor de desarrollo

```bash
# Modo desarrollo (con hot-reload)
pnpm start:dev

# Modo producción local
pnpm build
pnpm start:prod
```

La API estará disponible en `http://localhost:3000`

## 📊 Base de Datos

### Ejecutar migraciones

```bash
npx prisma migrate dev --name nombre_de_la_migracion
```

### Ver la base de datos con Prisma Studio

```bash
npx prisma studio
```

## 🧪 Testing

```bash
# Unit tests
pnpm test

# E2E tests
pnpm test:e2e

# Test coverage
pnpm test:cov
```

## 📦 Despliegue en Azure

Consulta la guía completa en [AZURE_DEPLOYMENT.md](./AZURE_DEPLOYMENT.md)

### Resumen rápido:

1. **Pila de runtime:** Node 20 LTS
2. **Variables de entorno:** Configúralas en Azure Portal
3. **Base de datos:** Azure Database for PostgreSQL
4. **Health check:** `GET /health`

## 🔐 Endpoints Principales

- `POST /auth/register` - Registro de usuario
- `POST /auth/login` - Inicio de sesión
- `GET /health` - Health check
- `GET /fundo` - Listar fundos
- `POST /orden-aplicacion` - Crear orden de aplicación
- Y muchos más...

## 📁 Estructura del Proyecto

```
src/
├── auth/           # Autenticación y autorización
├── fundo/          # Gestión de fundos
├── terreno/        # Gestión de terrenos
├── cuartel/        # Gestión de cuarteles
├── planta/         # Gestión de plantas
├── producto/       # Gestión de productos
├── tarea/          # Gestión de tareas
├── orden-aplicacion/ # Órdenes de aplicación
├── excel/          # Generación de reportes Excel
├── health/         # Health checks
├── prisma/         # Cliente de Prisma
└── main.ts         # Punto de entrada
```

## 🛠️ Stack Tecnológico

- **Framework:** NestJS
- **Base de datos:** PostgreSQL
- **ORM:** Prisma
- **Autenticación:** JWT + Passport
- **Validación:** class-validator
- **Testing:** Jest
- **Generación de Excel:** ExcelJS

## 👥 Contribución

1. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
2. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
3. Push a la rama (`git push origin feature/nueva-funcionalidad`)
4. Abre un Pull Request

## 📝 Licencia

Este proyecto es privado y confidencial.

---

Desarrollado con ❤️ para TerraTrack
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
