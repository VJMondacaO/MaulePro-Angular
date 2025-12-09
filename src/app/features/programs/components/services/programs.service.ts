import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { ProgramCardData } from '../models/program-card.types';
import { ProgramDetailData } from '../models/program-detail.types';
import { PROGRAMS_DATA, PROGRAM_DETAILS_DATA } from './programs.data';

/**
 * Servicio que gestiona los datos de los programas.
 */
@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor() { }

  /**
   * Obtiene la lista completa de programas (Simulado Async)
   */
  getPrograms(): Observable<ProgramCardData[]> {
    const sortedPrograms = this.sortPrograms(PROGRAMS_DATA);
    return of(sortedPrograms).pipe(delay(300)); // Simula latencia de red
  }

  /**
   * Obtiene un programa por su ID
   */
  getProgramById(id: string): Observable<ProgramCardData | undefined> {
    const program = PROGRAMS_DATA.find(p => p.id === id);
    return of(program).pipe(delay(300));
  }

  /**
   * Filtra programas por estado
   */
  getProgramsByEstado(estado: 'open' | 'soon' | 'closed'): Observable<ProgramCardData[]> {
    const filtered = PROGRAMS_DATA.filter(program => program.estado === estado);
    return of(filtered).pipe(delay(300));
  }

  /**
   * Filtra programas por beneficiario
   */
  getProgramsByBeneficiario(beneficiario: string): Observable<ProgramCardData[]> {
    const filtered = PROGRAMS_DATA.filter(program =>
      program.beneficiarios.toLowerCase().includes(beneficiario.toLowerCase())
    );
    return of(filtered).pipe(delay(300));
  }

  /**
   * Obtiene los datos detallados de un programa por su ID
   */
  getProgramDetailById(id: string): Observable<ProgramDetailData | undefined> {
    const basicProgram = PROGRAMS_DATA.find(p => p.id === id);
    if (!basicProgram) return of(undefined).pipe(delay(300));

    const detailProgram = PROGRAM_DETAILS_DATA.find(p => p.id === id);

    if (detailProgram) {
      return of(detailProgram).pipe(delay(300));
    }

    // Si no hay datos detallados, retornar datos básicos con valores por defecto
    const defaultDetail: ProgramDetailData = {
      ...basicProgram,
      categoria: 'Subvenciones y apoyos',
      invita: 'Gobierno Regional del Maule',
      alcance: 'Regional',
      modalidad: {
        tipo: 'Online',
        icono: 'pi-laptop',
        descripcion: 'Las postulaciones se realizan a través de la plataforma online.',
        linkPostulacion: '/login'
      },
      tipoPostulante: {
        tipo: 'Organizaciones',
        icono: 'pi-users',
        descripcion: 'Dirigido a organizaciones que cumplan con los requisitos establecidos.'
      },
      tipoFinanciamiento: {
        tipo: 'Subvención',
        icono: 'pi-dollar',
        descripcion: 'Financiamiento mediante subvención.'
      },
      requisitos: {
        introduccion: 'Para ser admitido en el concurso, se deben cumplir los siguientes requisitos obligatorios:',
        items: []
      },
      documentacion: {
        introduccion: 'Al momento de postular en la plataforma en línea, se debe adjuntar la siguiente lista de documentos:',
        items: []
      },
      evaluacion: {
        introduccion: 'El proceso de evaluación tiene diferentes etapas.',
        etapas: []
      },
      bases: {
        bases: []
      },
      dudasConsultas: {
        descripcion: 'Para consultas y/o entrega de información relacionada con el proceso de postulación, los interesados podrán dirigirse al Gobierno Regional del Maule.',
        horarios: 'De lunes a jueves de 09:00 horas a 13:00 hrs., y en la tarde de 14:00 hrs., a 17:00 horas y los viernes de 09:00 horas a 13:00 hrs., y en la tarde de 14:00 hrs., a 16:00 horas.',
        contacto: 'Correo electrónico sin restricción de horario.'
      }
    };

    return of(defaultDetail).pipe(delay(300));
  }

  /**
   * Lógica de ordenamiento interna
   */
  private sortPrograms(programs: ProgramCardData[]): ProgramCardData[] {
    return [...programs].sort((a, b) => {
      const prioridadEstado: { [key: string]: number } = { open: 1, soon: 2, closed: 3 };
      const prioridadA = prioridadEstado[a.estado] || 4;
      const prioridadB = prioridadEstado[b.estado] || 4;

      if (prioridadA !== prioridadB) {
        return prioridadA - prioridadB;
      }

      if (a.estado === 'open' && b.estado === 'open') {
        if (a.fechaCierre && b.fechaCierre) {
          return new Date(a.fechaCierre).getTime() - new Date(b.fechaCierre).getTime();
        }
        if (!a.fechaCierre) return 1;
        if (!b.fechaCierre) return -1;
      }

      if (a.estado === 'soon' && b.estado === 'soon') {
        if (a.fechaCierre && b.fechaCierre) {
          return new Date(a.fechaCierre).getTime() - new Date(b.fechaCierre).getTime();
        }
      }

      return 0;
    });
  }
}
