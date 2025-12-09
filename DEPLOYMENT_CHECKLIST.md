# ✅ Checklist de Despliegue a Producción

## Antes del Despliegue

### Base de Datos
- [ ] Base de datos PostgreSQL creada en Azure
- [ ] Cadena de conexión `DATABASE_URL` configurada en Azure App Service
- [ ] Migraciones de Prisma ejecutadas en la base de datos de producción
- [ ] Datos de prueba/semilla cargados si es necesario

### Variables de Entorno en Azure
- [ ] `NODE_ENV=production`
- [ ] `DATABASE_URL` configurado correctamente
- [ ] `JWT_SECRET` generado y configurado (usar: `node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"`)
- [ ] `JWT_EXPIRATION` configurado (ej: `7d`)
- [ ] `ALLOWED_ORIGINS` configurado con el dominio del frontend

### Configuración del App Service
- [ ] Pila de runtime: Node 20 LTS
- [ ] Plan de App Service seleccionado (B1, S1, P1V2, etc.)
- [ ] Región seleccionada cercana a tus usuarios

### Código
- [ ] Todas las pruebas pasando (`pnpm test`)
- [ ] Build exitoso localmente (`pnpm build`)
- [ ] No hay errores de linting (`pnpm lint`)
- [ ] Archivo `.env` NO está en el repositorio (verificar `.gitignore`)
- [ ] `prisma` movido de devDependencies a dependencies en `package.json` ✅
- [ ] Script `postinstall` agregado para generar Prisma Client ✅

## Durante el Despliegue

### Deployment
- [ ] Código pusheado a GitHub/repositorio
- [ ] Despliegue configurado (GitHub Actions, Azure DevOps, o manual)
- [ ] Build completado sin errores
- [ ] Aplicación iniciada correctamente

### Verificación Inicial
- [ ] Health check respondiendo: `https://tu-app.azurewebsites.net/health`
- [ ] Response del health check muestra `"database": "connected"`
- [ ] No hay errores en los logs (Azure Portal → Secuencia de registro)

## Después del Despliegue

### Testing en Producción
- [ ] Endpoint de autenticación funciona: `POST /auth/login`
- [ ] Puedes crear un usuario de prueba
- [ ] JWT tokens se generan correctamente
- [ ] CORS configurado correctamente (probar desde el frontend)
- [ ] Todas las rutas principales responden

### Seguridad
- [ ] HTTPS habilitado (Azure lo hace por defecto)
- [ ] Secretos NO expuestos en el código
- [ ] Rate limiting considerado (opcional: `@nestjs/throttler`)
- [ ] Logs no muestran información sensible

### Monitoreo
- [ ] Application Insights configurado (opcional pero recomendado)
- [ ] Alertas configuradas para errores críticos
- [ ] Métricas de CPU y memoria monitoreadas

### Documentación
- [ ] README.md actualizado ✅
- [ ] AZURE_DEPLOYMENT.md revisado ✅
- [ ] Variables de entorno documentadas en `.env.example` ✅
- [ ] Equipo informado sobre el despliegue

## Troubleshooting Común

### Si la aplicación no inicia:
1. Revisar logs en Azure Portal → Secuencia de registro
2. Verificar que todas las variables de entorno estén configuradas
3. Verificar que `NODE_VERSION` sea compatible (20.x)
4. Verificar que el puerto esté configurado correctamente (`process.env.PORT`)

### Si hay errores de base de datos:
1. Verificar que `DATABASE_URL` sea correcta
2. Verificar que el firewall de PostgreSQL permita conexiones desde Azure
3. Ejecutar `npx prisma migrate deploy` manualmente

### Si hay errores de CORS:
1. Verificar `ALLOWED_ORIGINS` en las variables de entorno
2. Asegurarse de que no haya espacios ni barras finales en las URLs
3. Verificar que el frontend esté usando la URL correcta

## Recursos Útiles

- [Documentación de Azure App Service](https://docs.microsoft.com/azure/app-service/)
- [Documentación de NestJS](https://docs.nestjs.com/)
- [Documentación de Prisma](https://www.prisma.io/docs/)
- [Guía de despliegue completa](./AZURE_DEPLOYMENT.md)

---

**Última actualización:** Diciembre 2024
