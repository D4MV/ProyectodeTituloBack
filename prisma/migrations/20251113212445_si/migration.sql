-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "apellido" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Rol" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT,
    "userIds" TEXT NOT NULL,

    CONSTRAINT "Rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Fundo" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "rut" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creadoPor" TEXT NOT NULL,

    CONSTRAINT "Fundo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."UserFundo" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "fundoId" TEXT NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserFundo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Terreno" (
    "id" TEXT NOT NULL,
    "areaHectareas" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "creadoPor" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lon" DOUBLE PRECISION NOT NULL,
    "codeSagGrower" TEXT NOT NULL,
    "userFundoId" TEXT NOT NULL,

    CONSTRAINT "Terreno_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Suelo" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "caracteristicas" TEXT NOT NULL,

    CONSTRAINT "Suelo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Planta" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "espacio_ancho" DOUBLE PRECISION NOT NULL,
    "espacio_largo" DOUBLE PRECISION NOT NULL,
    "produccion" INTEGER NOT NULL,
    "descripcion" TEXT NOT NULL,
    "variedad" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Planta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."cuartel" (
    "id" TEXT NOT NULL,
    "hectareas" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "terrenoId" TEXT NOT NULL,
    "sueloId" TEXT NOT NULL,
    "plantaId" TEXT NOT NULL,

    CONSTRAINT "cuartel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."sueloPlanta" (
    "id" TEXT NOT NULL,
    "compatibilidad" TEXT NOT NULL,
    "plantaId" TEXT NOT NULL,
    "sueloId" TEXT NOT NULL,

    CONSTRAINT "sueloPlanta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Producto" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cuartelId" TEXT NOT NULL,
    "creadoPor" TEXT NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Tarea" (
    "id" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cuartelId" TEXT NOT NULL,
    "productoId" TEXT NOT NULL,

    CONSTRAINT "Tarea_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."OrdenAplicacion" (
    "id" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "fechaEntrega" TIMESTAMP(3) NOT NULL,
    "fechaAplicacion" TIMESTAMP(3) NOT NULL,
    "dosis" DOUBLE PRECISION NOT NULL,
    "cantidadApli" DOUBLE PRECISION NOT NULL,
    "objetivo" TEXT NOT NULL,
    "mojamientoRecomendado" TEXT NOT NULL,
    "mojamientoReal" TEXT NOT NULL,
    "numMaquinadas" INTEGER NOT NULL,
    "gastoTotal" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tareaId" TEXT NOT NULL,

    CONSTRAINT "OrdenAplicacion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE INDEX "User_email_idx" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Rol_nombre_key" ON "public"."Rol"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Fundo_rut_key" ON "public"."Fundo"("rut");

-- AddForeignKey
ALTER TABLE "public"."Rol" ADD CONSTRAINT "Rol_userIds_fkey" FOREIGN KEY ("userIds") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserFundo" ADD CONSTRAINT "UserFundo_fundoId_fkey" FOREIGN KEY ("fundoId") REFERENCES "public"."Fundo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserFundo" ADD CONSTRAINT "UserFundo_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Terreno" ADD CONSTRAINT "Terreno_userFundoId_fkey" FOREIGN KEY ("userFundoId") REFERENCES "public"."UserFundo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cuartel" ADD CONSTRAINT "cuartel_sueloId_fkey" FOREIGN KEY ("sueloId") REFERENCES "public"."Suelo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cuartel" ADD CONSTRAINT "cuartel_terrenoId_fkey" FOREIGN KEY ("terrenoId") REFERENCES "public"."Terreno"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."cuartel" ADD CONSTRAINT "cuartel_plantaId_fkey" FOREIGN KEY ("plantaId") REFERENCES "public"."Planta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."sueloPlanta" ADD CONSTRAINT "sueloPlanta_plantaId_fkey" FOREIGN KEY ("plantaId") REFERENCES "public"."Planta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."sueloPlanta" ADD CONSTRAINT "sueloPlanta_sueloId_fkey" FOREIGN KEY ("sueloId") REFERENCES "public"."Suelo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Tarea" ADD CONSTRAINT "Tarea_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "public"."Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Tarea" ADD CONSTRAINT "Tarea_cuartelId_fkey" FOREIGN KEY ("cuartelId") REFERENCES "public"."cuartel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."OrdenAplicacion" ADD CONSTRAINT "OrdenAplicacion_tareaId_fkey" FOREIGN KEY ("tareaId") REFERENCES "public"."Tarea"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
