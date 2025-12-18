import { Injectable, InternalServerErrorException, BadRequestException, Logger } from '@nestjs/common';
import * as ExcelJS from 'exceljs';

interface OrdenAplicacionData {

  ordenId: string;
  cuartel: string;
  fechaEntrega: string;
  numMaquinaria: number;
  variedad: string;
  superficie: number;
  fechaAplicacion: string | null;
  

  nombreComercial: string;
  ingredienteActivo: string;
  objetivo: string;
  dosis: number;
  necesidadMaquinaria: number;
  necesidadTotal: number;
  numAutorizacionSag: number | null;
  numeroLote: number | null;
  numeroGuia: number | null;

  mojamiento: number;
  estadoFenologico: string;
  formaAplicacion: string;
  emisor: string;
  recibe: string;

  fechaInicio: string;
  cuartelConfirmacion: string;
  numMaquinariaConfirmacion: number;
  horaInicio: string;
  horaTermino: string;
}

export interface CuadernoCampoData {
  fechaEntrega: Date;
  fechaAplicacion: Date;
  variedad: string;
  cuartel: string;
  has: number;
  nombreComercial: string;
  ingredienteActivo: string;
  etiqueta: string;
  asoex: string;
  pppl: string;
  dosis: number;
  unidad: string;
  mojamientoReal: number;
  totalProducto: number;
  necesidadMaquinaria: number;
  numMaquinaria: number;
  gastoTotal: number;
  numOrden: number;
  fechaPosibleCosecha: Date;
  objetivo: string;
  especie: string;
}

@Injectable()
export class ExcelService {
  private readonly logger = new Logger(ExcelService.name);
  
  async generateOrdenAplicacionExcel(ordenes: OrdenAplicacionData[]): Promise<Buffer> {
    if (!ordenes || ordenes.length === 0) {
      this.logger.warn('Se intentó generar un Excel sin datos de órdenes.');
      throw new BadRequestException('No se proporcionaron datos para generar el informe.');
    }

    try {
      const workbook = new ExcelJS.Workbook();

      ordenes.forEach((orden, index) => {
        const worksheet = workbook.addWorksheet(`Orden ${index + 1}`);
        this.createOrdenAplicacionSheet(worksheet, orden);
      });
      
      const buffer = await workbook.xlsx.writeBuffer();
      return Buffer.from(buffer);

    } catch (error) {
      this.logger.error('Error al generar el archivo Excel de Orden de Aplicación', error.stack);
      throw new InternalServerErrorException('No se pudo generar el archivo Excel.');
    }
  }
  
  private createOrdenAplicacionSheet(worksheet: ExcelJS.Worksheet, orden: OrdenAplicacionData) {

    worksheet.columns = [
      { width: 20 },
      { width: 15 }, 
      { width: 18 }, 
      { width: 15 }, 
      { width: 18 }, 
      { width: 15 }, 
      { width: 18 }, 
      { width: 15 }, 
      { width: 15 }  
    ];
    

    this.addMergedCell(worksheet, 'A1:I1', 'Orden de Aplicación', true, 'FF4472C4');
    

    this.addCell(worksheet, 'A2', 'Cuartel', false, 'FFD9D9D9');
    this.addCell(worksheet, 'C2', 'Fecha de entrega', false, 'FFD9D9D9');
    this.addCell(worksheet, 'F2', 'N° Maquinaria', false, 'FFD9D9D9');
    
    this.addCell(worksheet, 'A3', orden.cuartel);
    this.addCell(worksheet, 'C3', orden.fechaEntrega);
    this.addCell(worksheet, 'F3', orden.numMaquinaria);
    
    this.addCell(worksheet, 'A4', 'Variedad', false, 'FFD9D9D9');
    this.addCell(worksheet, 'C4', 'superficie', false, 'FFD9D9D9');
    this.addCell(worksheet, 'F4', 'Fecha de Aplicación', false, 'FFD9D9D9');
    
    this.addCell(worksheet, 'A5', orden.variedad);
    this.addCell(worksheet, 'C5', orden.superficie);
    this.addCell(worksheet, 'F5', orden.fechaAplicacion ? orden.fechaAplicacion : 'N/A');
    
    this.addCell(worksheet, 'A6', 'Nombre comercial', false, 'FFD9D9D9');
    this.addCell(worksheet, 'B6', 'Ingrediente Activo', false, 'FFD9D9D9');
    this.addCell(worksheet, 'C6', 'Objetivo', false, 'FFD9D9D9');
    this.addCell(worksheet, 'D6', 'Dosis', false, 'FFD9D9D9');
    this.addCell(worksheet, 'E6', 'Necesidad Maquinaria', false, 'FFD9D9D9');
    this.addCell(worksheet, 'F6', 'Necesidad Total', false, 'FFD9D9D9');
    this.addCell(worksheet, 'G6', 'N° Autorización SAG', false, 'FFD9D9D9');
    this.addCell(worksheet, 'H6', 'Numero Lote', false, 'FFD9D9D9');
    this.addCell(worksheet, 'I6', 'N° Guia', false, 'FFD9D9D9');
    
    this.addCell(worksheet, 'A7', orden.nombreComercial);
    this.addCell(worksheet, 'B7', orden.ingredienteActivo);
    this.addCell(worksheet, 'C7', orden.objetivo);
    this.addCell(worksheet, 'D7', orden.dosis);
    this.addCell(worksheet, 'E7', orden.necesidadMaquinaria);
    this.addCell(worksheet, 'F7', orden.necesidadTotal);
    this.addCell(worksheet, 'G7', orden.numAutorizacionSag ?? '');
    this.addCell(worksheet, 'H7', orden.numeroLote ?? '');
    this.addCell(worksheet, 'I7', orden.numeroGuia ?? '');
    
    this.addCell(worksheet, 'A9', 'mojamiento', false, 'FFD9D9D9');
    this.addCell(worksheet, 'B9', 'estado Fenologico', false, 'FFD9D9D9');
    this.addCell(worksheet, 'C9', 'forma Aplicacion', false, 'FFD9D9D9');
    this.addCell(worksheet, 'D9', 'emisor', false, 'FFD9D9D9');
    this.addCell(worksheet, 'E9', 'recibe', false, 'FFD9D9D9');
    
   
    this.addCell(worksheet, 'A10', orden.mojamiento);
    this.addCell(worksheet, 'B10', orden.estadoFenologico);
    this.addCell(worksheet, 'C10', orden.formaAplicacion ? orden.formaAplicacion : 'N/A');
    this.addCell(worksheet, 'D10', orden.emisor);
    this.addCell(worksheet, 'E10', orden.recibe);
    

    this.addCell(worksheet, 'A12', 'Confirmación de Aplicación', false, 'FFD9D9D9');

    this.addCell(worksheet, 'A13', 'Fecha Inicio', false, 'FFD9D9D9');
    this.addCell(worksheet, 'B13', 'Cuartel', false, 'FFD9D9D9');
    this.addCell(worksheet, 'C13', 'N° Maquinaria', false, 'FFD9D9D9');
    this.addCell(worksheet, 'D13', 'Hora Inicio', false, 'FFD9D9D9');
    this.addCell(worksheet, 'E13', 'Hora Termino', false, 'FFD9D9D9');
    
    this.addCell(worksheet, 'A14', orden.fechaInicio || '');
    this.addCell(worksheet, 'B14', orden.cuartelConfirmacion || '');
    this.addCell(worksheet, 'C14', orden.numMaquinariaConfirmacion ?? '');
    this.addCell(worksheet, 'D14', orden.horaInicio || '');
    this.addCell(worksheet, 'E14', orden.horaTermino || '');
  }
  
  private addCell(worksheet: ExcelJS.Worksheet, address: string, value: string | number, isBold = false, bgColor?: string) {
    const cell = worksheet.getCell(address);
    cell.value = value;
    
    if (isBold) {
      cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    }
    
    if (bgColor) {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: bgColor }
      };
    }

    cell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
    

    cell.alignment = { horizontal: 'center', vertical: 'middle' };
  }
  
  private addMergedCell(worksheet: ExcelJS.Worksheet, range: string, value: string, isBold = false, bgColor?: string) {
    worksheet.mergeCells(range);
    const cell = worksheet.getCell(range.split(':')[0]);
    cell.value = value;
    
    if (isBold) {
      cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    }
    
    if (bgColor) {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: bgColor }
      };
    }
    
    cell.alignment = { horizontal: 'center', vertical: 'middle' };
    cell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' }
    };
  }

  formatDate(date: Date): string {
    return date.toLocaleDateString('es-CL', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  }


  async generarCuadernoDeCampoExcelI(data: CuadernoCampoData[]): Promise<Buffer> {
    try {
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Cuaderno de Campo');

      worksheet.columns = [
        { header: 'Fecha de Entrega', key: 'fechaEntrega', width: 20 }, 
        { header: 'Fecha de Aplicación', key: 'fechaAplicacion', width: 20 },
        { header: 'Variedad', key: 'variedad', width: 15 },
        { header: 'Cuartel', key: 'cuartel', width: 15 },
        { header: 'Hectáreas', key: 'has', width: 10 },
        { header: 'Nombre Comercial', key: 'nombreComercial', width: 25 },
        { header: 'Ingrediente Activo', key: 'ingredienteActivo', width: 25 },
        { header: 'Etiqueta', key: 'etiqueta', width: 15 },
        { header: 'ASOEX', key: 'asoex', width: 15 },
        { header: 'PPPL', key: 'pppl', width: 15 },
        { header: 'Dosis', key: 'dosis', width: 10 },
        { header: 'Unidad', key: 'unidad', width: 10 },
        { header: 'Mojamiento Real', key: 'mojamientoReal', width: 15 },
        { header: 'Total Producto', key: 'totalProducto', width: 15 },
        { header: 'Necesidad Maquinaria', key: 'necesidadMaquinaria', width: 20 },
        { header: 'N° Maquinaria', key: 'numMaquinaria', width: 15 },
        { header: 'Gasto Total', key: 'gastoTotal', width: 15 },
        { header: 'N° Orden', key: 'numOrden', width: 10 },
        { header: 'Fecha Posible Cosecha', key: 'fechaPosibleCosecha', width: 20 },
        { header: 'Objetivo', key: 'objetivo', width: 20 },
        { header: 'Especie', key: 'especie', width: 15 }
      ];

      worksheet.getRow(1).font = { bold: true };
      worksheet.getRow(1).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF5B9BD5' }
      };
      worksheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };
      
      data.forEach((item) =>{
        worksheet.addRow({
          fechaEntrega: item.fechaEntrega,
          fechaAplicacion: item.fechaAplicacion,
          variedad: item.variedad,
          cuartel: item.cuartel,
          has: item.has,
          nombreComercial: item.nombreComercial,
          ingredienteActivo: item.ingredienteActivo,
          etiqueta: item.etiqueta,
          asoex: item.asoex,
          pppl: item.pppl,
          dosis: item.dosis,
          unidad: item.unidad,
          mojamientoReal: item.mojamientoReal,
          totalProducto: item.totalProducto,
          necesidadMaquinaria: item.necesidadMaquinaria,
          numMaquinaria: item.numMaquinaria,
          gastoTotal: item.gastoTotal,
          numOrden: item.numOrden,
          fechaPosibleCosecha: item.fechaPosibleCosecha,
          objetivo: item.objetivo,
          especie: item.especie
        })
      })

      worksheet.getColumn('fechaEntrega').numFmt = 'dd/mm/yyyy';
      worksheet.getColumn('fechaAplicacion').numFmt = 'dd/mm/yyyy';
      worksheet.getColumn('fechaPosibleCosecha').numFmt = 'dd/mm/yyyy';

      worksheet.getColumn('has').numFmt = '0.00';
      worksheet.getColumn('dosis').numFmt = '0.00';
      worksheet.getColumn('mojamientoReal').numFmt = '0.00';
      worksheet.getColumn('totalProducto').numFmt = '0.00';
      worksheet.getColumn('gastoTotal').numFmt = '0.00';

      const totalRows = data.length + 1;
      const totalColumns = 21;

      for (let rowNumber = 1; rowNumber <= totalRows; rowNumber++) {
        const row = worksheet.getRow(rowNumber);
        for (let colNumber = 1; colNumber <= totalColumns; colNumber++) {
          const cell = row.getCell(colNumber);
          cell.border = {
            top: { style: 'thin' },
            left: { style: 'thin' },
            bottom: { style: 'thin' },
            right: { style: 'thin'}
          };
        }
      }

      await worksheet.protect('',{
        selectLockedCells: false,
        selectUnlockedCells: false,
        formatCells: false,
        formatColumns: false,
        formatRows: false,
        insertRows: false,
        insertColumns: false,
        deleteRows: false,
        deleteColumns: false,
        sort: false,
        autoFilter: false,
        pivotTables: false
      })

      const buffer = await workbook.xlsx.writeBuffer();
      return Buffer.from(buffer);
    } catch (error: any) {
      this.logger.error('Error al generar el archivo Excel de Cuaderno de Campo', error.stack);
      throw new InternalServerErrorException('No se pudo generar el archivo Excel del cuaderno de campo.');
    }
   
  } 
}