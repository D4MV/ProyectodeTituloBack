#!/usr/bin/env node

/**
 * Script de validación pre-despliegue
 * Verifica que todo esté listo para desplegar en Azure App Service
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando configuración para despliegue...\n');

let hasErrors = false;
let hasWarnings = false;

// 1. Verificar que exista package.json
console.log('📦 Verificando package.json...');
const packageJsonPath = path.join(__dirname, '..', 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.error('❌ No se encuentra package.json');
  hasErrors = true;
} else {
  const packageJson = require(packageJsonPath);
  
  // Verificar scripts necesarios
  if (!packageJson.scripts['start:prod']) {
    console.error('❌ Falta script "start:prod" en package.json');
    hasErrors = true;
  }
  
  if (!packageJson.scripts['build']) {
    console.error('❌ Falta script "build" en package.json');
    hasErrors = true;
  }
  
  if (!packageJson.scripts['postinstall']) {
    console.warn('⚠️  Falta script "postinstall" para generar Prisma Client');
    hasWarnings = true;
  }
  
  // Verificar que prisma esté en dependencies (no en devDependencies)
  if (packageJson.devDependencies && packageJson.devDependencies['prisma']) {
    console.warn('⚠️  "prisma" está en devDependencies. Debería estar en dependencies para producción');
    hasWarnings = true;
  }
  
  if (!packageJson.dependencies || !packageJson.dependencies['prisma']) {
    console.error('❌ "prisma" no está en dependencies');
    hasErrors = true;
  } else {
    console.log('✅ package.json configurado correctamente');
  }
}

// 2. Verificar que exista .env.example
console.log('\n🔐 Verificando .env.example...');
const envExamplePath = path.join(__dirname, '..', '.env.example');
if (!fs.existsSync(envExamplePath)) {
  console.warn('⚠️  No se encuentra .env.example');
  hasWarnings = true;
} else {
  console.log('✅ .env.example existe');
}

// 3. Verificar que .env NO esté en el repositorio
console.log('\n🚫 Verificando .gitignore...');
const gitignorePath = path.join(__dirname, '..', '.gitignore');
if (!fs.existsSync(gitignorePath)) {
  console.error('❌ No se encuentra .gitignore');
  hasErrors = true;
} else {
  const gitignoreContent = fs.readFileSync(gitignorePath, 'utf8');
  if (!gitignoreContent.includes('.env')) {
    console.error('❌ .env no está en .gitignore. ¡Peligro de exponer secretos!');
    hasErrors = true;
  } else {
    console.log('✅ .gitignore configurado correctamente');
  }
}

// 4. Verificar que exista la carpeta prisma
console.log('\n📊 Verificando Prisma...');
const prismaPath = path.join(__dirname, '..', 'prisma');
if (!fs.existsSync(prismaPath)) {
  console.error('❌ No se encuentra la carpeta prisma/');
  hasErrors = true;
} else {
  const schemaPath = path.join(prismaPath, 'schema.prisma');
  if (!fs.existsSync(schemaPath)) {
    console.error('❌ No se encuentra prisma/schema.prisma');
    hasErrors = true;
  } else {
    console.log('✅ Prisma schema encontrado');
  }
}

// 5. Verificar que exista tsconfig.json
console.log('\n📝 Verificando TypeScript...');
const tsconfigPath = path.join(__dirname, '..', 'tsconfig.json');
if (!fs.existsSync(tsconfigPath)) {
  console.error('❌ No se encuentra tsconfig.json');
  hasErrors = true;
} else {
  console.log('✅ tsconfig.json existe');
}

// 6. Verificar que exista el módulo de health
console.log('\n💓 Verificando health check...');
const healthModulePath = path.join(__dirname, '..', 'src', 'health', 'health.module.ts');
if (!fs.existsSync(healthModulePath)) {
  console.warn('⚠️  No se encuentra el módulo de health check');
  hasWarnings = true;
} else {
  console.log('✅ Health check module existe');
}

// 7. Verificar documentación
console.log('\n📚 Verificando documentación...');
const azureDeploymentPath = path.join(__dirname, '..', 'AZURE_DEPLOYMENT.md');
if (!fs.existsSync(azureDeploymentPath)) {
  console.warn('⚠️  No se encuentra AZURE_DEPLOYMENT.md');
  hasWarnings = true;
} else {
  console.log('✅ Documentación de despliegue existe');
}

// Resumen final
console.log('\n' + '='.repeat(50));
if (hasErrors) {
  console.error('\n❌ Se encontraron errores críticos. Por favor corrígelos antes de desplegar.');
  process.exit(1);
} else if (hasWarnings) {
  console.warn('\n⚠️  Se encontraron advertencias. Se recomienda revisarlas.');
  console.log('\n✅ Configuración básica correcta. Puedes proceder con el despliegue.');
  process.exit(0);
} else {
  console.log('\n✅ ¡Todo listo para desplegar! 🚀');
  console.log('\nPróximos pasos:');
  console.log('1. Asegúrate de configurar las variables de entorno en Azure');
  console.log('2. Ejecuta las migraciones de Prisma en la BD de producción');
  console.log('3. Despliega tu aplicación');
  console.log('4. Verifica el health check: https://tu-app.azurewebsites.net/health');
  process.exit(0);
}
