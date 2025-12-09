# 🔒 Guía de Seguridad para Producción

## Variables de Entorno y Secretos

### ✅ Hacer

1. **Usa variables de entorno para todos los secretos:**
   - Contraseñas de base de datos
   - JWT secrets
   - API keys de terceros
   - Configuraciones sensibles

2. **En Azure App Service:**
   - Configura las variables en: Portal → App Service → Configuración → Configuración de la aplicación
   - Azure las encripta automáticamente
   - Nunca las expongas en logs

3. **Genera secretos seguros:**
   ```bash
   # Para JWT_SECRET
   node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
   ```

### ❌ No hacer

- ❌ Nunca subas archivos `.env` al repositorio
- ❌ No hardcodees secretos en el código
- ❌ No compartas secretos de producción por chat/email
- ❌ No uses el mismo secret en desarrollo y producción

## CORS (Cross-Origin Resource Sharing)

### Configuración Actual

El archivo `main.ts` está configurado para usar `ALLOWED_ORIGINS` desde variables de entorno:

```typescript
const allowedOrigins = process.env.ALLOWED_ORIGINS 
  ? process.env.ALLOWED_ORIGINS.split(',') 
  : ['http://localhost:5173'];
```

### ✅ Configurar correctamente

En Azure, configura:
```
ALLOWED_ORIGINS=https://tu-frontend.azurewebsites.net,https://tu-dominio-personalizado.com
```

### ❌ Evitar

```typescript
// ❌ NUNCA hagas esto en producción:
app.enableCors({
  origin: '*',  // Permite CUALQUIER origen
  credentials: true,
});
```

## Base de Datos

### ✅ Hacer

1. **Usa conexiones SSL:**
   ```
   DATABASE_URL=postgresql://...?sslmode=require
   ```

2. **Configura el firewall de Azure Database for PostgreSQL:**
   - Permite solo IPs/rangos conocidos
   - Habilita "Permitir acceso a servicios de Azure" solo si es necesario

3. **Usa usuarios con permisos mínimos:**
   - No uses el usuario admin de la BD en la aplicación
   - Crea un usuario específico con permisos limitados

### ❌ No hacer

- ❌ No expongas la cadena de conexión en logs
- ❌ No uses contraseñas débiles
- ❌ No dejes el puerto 5432 abierto al mundo

## Autenticación y JWT

### ✅ Hacer

1. **Usa tokens con expiración razonable:**
   ```
   JWT_EXPIRATION=7d  # 7 días máximo para tokens de sesión
   ```

2. **Implementa refresh tokens** (ya implementado en tu código)

3. **Valida tokens en cada request protegido** (ya implementado con Guards)

4. **Hash passwords con bcrypt** (ya implementado):
   ```typescript
   const hashedPass = await bcrypt.hash(password, 10);
   ```

### ❌ No hacer

- ❌ No uses tokens sin expiración
- ❌ No almacenes passwords en texto plano
- ❌ No expongas el JWT_SECRET

## Rate Limiting (Recomendado)

Considera instalar `@nestjs/throttler` para prevenir ataques de fuerza bruta:

```bash
pnpm add @nestjs/throttler
```

```typescript
// En app.module.ts
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,      // 60 segundos
      limit: 10,    // 10 requests por TTL
    }),
    // ... otros módulos
  ],
})
```

## Logging

### ✅ Hacer

1. **Usa el Logger de NestJS** (ya implementado):
   ```typescript
   private readonly logger = new Logger(ExcelService.name);
   this.logger.error('Error message', error.stack);
   ```

2. **Log errores importantes**, pero NO:
   - Passwords
   - Tokens
   - Información personal sensible
   - Detalles internos que podrían ayudar a atacantes

### Ejemplo seguro:

```typescript
// ✅ BIEN
this.logger.error(`Failed login attempt for user ID: ${userId}`);

// ❌ MAL
this.logger.error(`Failed login: ${email} with password: ${password}`);
```

## HTTPS

✅ Azure App Service proporciona HTTPS automáticamente en `*.azurewebsites.net`

✅ Si usas un dominio personalizado, Azure también te proporciona certificados SSL gratis con Let's Encrypt

## Headers de Seguridad (Opcional pero recomendado)

Instala `helmet` para agregar headers de seguridad:

```bash
pnpm add helmet
```

```typescript
// En main.ts
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.use(helmet());
  
  // ... resto del código
}
```

## Validación de Entrada

✅ Ya implementado con `class-validator` en DTOs:

```typescript
app.useGlobalPipes(new ValidationPipe({
  whitelist: true,           // Remueve propiedades no definidas en el DTO
  forbidNonWhitelisted: true, // Lanza error si hay propiedades extras
  transform: true             // Transforma tipos automáticamente
}));
```

## Checklist de Seguridad

Antes de desplegar a producción:

- [ ] Todas las variables de entorno sensibles configuradas en Azure (no en código)
- [ ] JWT_SECRET es largo y aleatorio (mínimo 32 caracteres)
- [ ] CORS configurado con orígenes específicos (no '*')
- [ ] Base de datos usa SSL/TLS
- [ ] Passwords hasheados con bcrypt
- [ ] Logs no exponen información sensible
- [ ] Rate limiting implementado (recomendado)
- [ ] HTTPS habilitado
- [ ] Validación de entrada habilitada en todos los endpoints
- [ ] Firewall de base de datos configurado correctamente

## Monitoreo de Seguridad

1. **Revisa logs regularmente** en Azure Portal → Secuencia de registro
2. **Configura alertas** para:
   - Intentos de login fallidos en masa
   - Errores 500 frecuentes
   - Uso anormal de CPU/memoria
3. **Usa Application Insights** para detectar patrones anormales

## Recursos Adicionales

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [NestJS Security Best Practices](https://docs.nestjs.com/security/helmet)
- [Azure Security Best Practices](https://docs.microsoft.com/azure/security/)

---

**Recuerda:** La seguridad es un proceso continuo, no un estado. Mantén tu aplicación y dependencias actualizadas.
