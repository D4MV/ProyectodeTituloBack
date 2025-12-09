# Guía de Despliegue en Azure App Service

## 📋 Preparación antes del despliegue

### 1. Variables de Entorno Requeridas

En Azure Portal, ve a tu App Service → **Configuración** → **Configuración de la aplicación** y agrega estas variables:

```
NODE_ENV=production
DATABASE_URL=postgresql://usuario:password@host:puerto/nombre_bd?schema=public
JWT_SECRET=tu_secret_generado_aqui
JWT_EXPIRATION=7d
ALLOWED_ORIGINS=https://tu-frontend.azurewebsites.net,https://tu-dominio.com
```

**⚠️ IMPORTANTE:** 
- Nunca subas el archivo `.env` a Git (ya está en `.gitignore`)
- Genera un `JWT_SECRET` seguro con: 
  ```bash
  node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
  ```

### 2. Configuración de la Base de Datos

**Opción A: Azure Database for PostgreSQL**
1. Crea una instancia de Azure Database for PostgreSQL
2. Configura las reglas de firewall para permitir conexiones desde tu App Service
3. Copia la cadena de conexión y configúrala en `DATABASE_URL`

**Opción B: Base de datos externa**
1. Asegúrate de que tu base de datos sea accesible desde Azure
2. Configura la cadena de conexión en `DATABASE_URL`

### 3. Configuración del App Service

#### Pila de Runtime
- **Stack:** Node.js
- **Versión recomendada:** Node 20 LTS

#### Comandos de inicio
Azure ejecutará automáticamente el script `start:prod` definido en `package.json`:
```json
"start:prod": "node dist/main"
```

#### Configuración de compilación
Azure necesita compilar tu aplicación TypeScript. Asegúrate de que tu `package.json` incluya el script de build:
```json
"build": "nest build"
```

### 4. Migraciones de Prisma

**Antes del primer despliegue:**
1. Asegúrate de que tu base de datos esté configurada
2. Ejecuta las migraciones desde tu máquina local (conectándote a la BD de Azure):
   ```bash
   npx prisma migrate deploy
   ```

**O configura un script post-build en Azure:**
En Azure Portal → **Centro de implementación** → **Configuración de compilación**, puedes agregar un comando post-build:
```bash
npx prisma generate && npx prisma migrate deploy
```

### 5. Despliegue desde GitHub (Recomendado)

1. Ve a tu App Service → **Centro de implementación**
2. Selecciona **GitHub** como origen
3. Autoriza y selecciona tu repositorio y rama (`main`)
4. Azure creará automáticamente un workflow de GitHub Actions
5. Cada push a la rama main desplegará automáticamente

### 6. Verificación del Despliegue

Una vez desplegado, verifica que todo funcione:

1. **Health Check:**
   ```
   https://tu-app.azurewebsites.net/health
   ```
   Deberías ver:
   ```json
   {
     "status": "ok",
     "timestamp": "2024-12-08T...",
     "uptime": 123.45,
     "database": "connected",
     "environment": "production"
   }
   ```

2. **Logs en tiempo real:**
   - En Azure Portal → Tu App Service → **Secuencia de registro**
   - Aquí verás todos los logs de la aplicación

3. **Diagnóstico de problemas:**
   - Si hay errores, revisa los logs en **Secuencia de registro**
   - Verifica que todas las variables de entorno estén configuradas
   - Asegúrate de que la base de datos sea accesible

## 🔒 Seguridad en Producción

1. **HTTPS:** Azure App Service proporciona HTTPS automáticamente
2. **CORS:** Ya configurado dinámicamente en `main.ts` usando `ALLOWED_ORIGINS`
3. **Secretos:** Nunca expongas `JWT_SECRET` o `DATABASE_URL` en el código
4. **Rate Limiting:** Considera agregar `@nestjs/throttler` para protección contra ataques

## 📊 Monitoreo

Azure App Service incluye:
- **Application Insights** para monitoreo de rendimiento
- **Métricas** de CPU, memoria y respuestas HTTP
- **Alertas** configurables para errores o caídas

## 🚀 Comandos Útiles

```bash
# Ver logs en tiempo real desde Azure CLI
az webapp log tail --name tu-app --resource-group tu-grupo

# Reiniciar la aplicación
az webapp restart --name tu-app --resource-group tu-grupo

# Ejecutar comandos en la aplicación
az webapp ssh --name tu-app --resource-group tu-grupo
```

## ✅ Checklist Final

- [ ] Variables de entorno configuradas en Azure
- [ ] Base de datos PostgreSQL creada y accesible
- [ ] Migraciones de Prisma ejecutadas
- [ ] Stack de Node.js configurado (Node 20 LTS)
- [ ] Despliegue desde GitHub configurado
- [ ] Health check funcionando (`/health`)
- [ ] CORS configurado con el dominio del frontend
- [ ] Logs revisados sin errores críticos

## 🆘 Solución de Problemas Comunes

### Error: "Cannot connect to database"
- Verifica que `DATABASE_URL` esté correctamente configurada
- Asegúrate de que el firewall de la BD permita conexiones desde Azure

### Error: "Module not found"
- Verifica que todas las dependencias estén en `dependencies` (no en `devDependencies`)
- Azure solo instala `dependencies` en producción

### La aplicación no inicia
- Revisa los logs en **Secuencia de registro**
- Verifica que el puerto esté configurado correctamente (`process.env.PORT`)

### CORS errors
- Asegúrate de que `ALLOWED_ORIGINS` incluya el dominio de tu frontend
- Verifica que las URLs no tengan espacios ni barras finales

---

¡Listo! Tu aplicación está preparada para producción en Azure. 🎉
