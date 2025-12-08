import { Injectable } from '@nestjs/common';
import * as ExcelJS from 'exceljs';

interface OrdenAplicacionData {

  ordenId: string;
  cuartel: string;
  fechaEntrega: string;
  numMaquinaria: number;
  variedad: string;
  superficie: number;
  fechaAplicacion: string;
  

  nombreComercial: string;
  ingredienteActivo: string;
  objetivo: string;
  dosis: number;
  necesidadMaquinaria: string;
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

@Injectable()
export class ExcelService {
  
  async generateOrdenAplicacionExcel(ordenes: OrdenAplicacionData[]): Promise<any> {
    const workbook = new ExcelJS.Workbook();

    ordenes.forEach((orden, index) => {
      const worksheet = workbook.addWorksheet(`Orden ${index + 1}`);
      this.createOrdenAplicacionSheet(worksheet, orden);
    });
    

    const buffer = await workbook.xlsx.writeBuffer();
    return Buffer.from(buffer);
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
    this.addCell(worksheet, 'F3', orden.numMaquinaria.toString());
    
    this.addCell(worksheet, 'A4', 'Variedad', false, 'FFD9D9D9');
    this.addCell(worksheet, 'C4', 'superficie', false, 'FFD9D9D9');
    this.addCell(worksheet, 'F4', 'Fecha de Aplicación', false, 'FFD9D9D9');
    
    this.addCell(worksheet, 'A5', orden.variedad);
    this.addCell(worksheet, 'C5', orden.superficie.toString());
    this.addCell(worksheet, 'F5', orden.fechaAplicacion);
    
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
    this.addCell(worksheet, 'D7', orden.dosis.toString());
    this.addCell(worksheet, 'E7', orden.necesidadMaquinaria);
    this.addCell(worksheet, 'F7', orden.necesidadTotal.toString());
    this.addCell(worksheet, 'G7', orden.numAutorizacionSag?.toString() || '');
    this.addCell(worksheet, 'H7', orden.numeroLote?.toString() || '');
    this.addCell(worksheet, 'I7', orden.numeroGuia?.toString() || '');
    
    this.addCell(worksheet, 'A9', 'mojamiento', false, 'FFD9D9D9');
    this.addCell(worksheet, 'B9', 'estado Fenologico', false, 'FFD9D9D9');
    this.addCell(worksheet, 'C9', 'forma Aplicacion', false, 'FFD9D9D9');
    this.addCell(worksheet, 'D9', 'emisor', false, 'FFD9D9D9');
    this.addCell(worksheet, 'E9', 'recibe', false, 'FFD9D9D9');
    
   
    this.addCell(worksheet, 'A10', orden.mojamiento.toString());
    this.addCell(worksheet, 'B10', orden.estadoFenologico);
    this.addCell(worksheet, 'C10', orden.formaAplicacion);
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
    this.addCell(worksheet, 'C14', orden.numMaquinariaConfirmacion?.toString() || '');
    this.addCell(worksheet, 'D14', orden.horaInicio || '');
    this.addCell(worksheet, 'E14', orden.horaTermino || '');
  }
  
  private addCell(worksheet: ExcelJS.Worksheet, address: string, value: string, isBold = false, bgColor?: string) {
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


  async generarCuadernoDeCampoExcelI(){
    const workbook = new ExcelJS.Workbook();

    const buffer = await workbook.xlsx.writeBuffer();
    return Buffer.from(buffer);
  }
}