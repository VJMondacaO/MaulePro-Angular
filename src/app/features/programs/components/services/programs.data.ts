import { ProgramCardData } from '../models/program-card.types';
import { ProgramDetailData } from '../models/program-detail.types';

export const PROGRAMS_DATA: ProgramCardData[] = [
    {
        id: '2',
        titulo: 'Proyectos Menores a 5.000 UTM',
        descripcion: 'Financiamiento para proyectos de inversión municipal de menor envergadura.',
        estado: 'open',
        fechaInicio: '01-11-2025',
        fechaFin: '27-11-2025',
        fechaCierre: '2025-11-27',
        beneficiarios: 'Municipios',
        montos: 'Hasta 5.000 UTM',
        rutaDetalles: '/programas/2'
    },
    {
        id: '3',
        titulo: 'Subvenciones para actividades FNDR 8%',
        descripcion: 'Apoyo financiero para la creación artística, el rescate patrimonial y la difusión cultural en el Maule.',
        estado: 'open',
        fechaInicio: '01-11-2025',
        fechaFin: '15-12-2025',
        fechaCierre: '2025-12-15',
        beneficiarios: 'Organizaciones',
        montos: '$2.000.000 - $5.000.000',
        tipoFondo: 'FNDR 8%',
        rutaDetalles: '/programas/3'
    },
    {
        id: '4',
        titulo: 'Programa Próximo',
        descripcion: 'Este programa abrirá pronto sus postulaciones.',
        estado: 'soon',
        fechaInicio: '01-01-2026',
        fechaFin: '31-01-2026',
        beneficiarios: 'Personas Naturales',
        montos: '$1.500.000',
        rutaDetalles: '/programas/4'
    },
    {
        id: '5',
        titulo: 'Programa Cerrado',
        descripcion: 'Este programa ya cerró sus postulaciones.',
        estado: 'closed',
        fechaInicio: '01-01-2025',
        fechaFin: '31-01-2025',
        beneficiarios: 'Personas Naturales',
        montos: '$1.000.000',
        rutaDetalles: '/programas/5'
    },
    {
        id: '6',
        titulo: 'Fondo Regional de Iniciativa Local (FRIL 2025)',
        descripcion: 'Apoyo financiero destinado a ejecutar, mantener o conservar infraestructura pública.',
        estado: 'open',
        fechaInicio: '01-12-2025',
        fechaFin: '31-01-2026',
        fechaCierre: '2026-01-31',
        beneficiarios: 'Municipalidades',
        montos: 'Hasta 3.000 UTM',
        tipoFondo: 'FRIL',
        rutaDetalles: '/programas/6'
    },
    {
        id: '7',
        titulo: 'Creación y Producción Artística',
        descripcion: 'Iniciativas que fomenten la creación artística original y la generación de obra.',
        estado: 'open',
        fechaInicio: '03-02-2025',
        fechaFin: '09-03-2025',
        fechaCierre: '2025-03-09',
        beneficiarios: 'Instituciones Privadas sin Fines de Lucro',
        montos: '$2.000.000 a $5.000.000.',
        tipoFondo: 'FNDR 8%',
        rutaDetalles: '/programas/3'
    },
    {
        id: '8',
        titulo: 'Investigación y Desarrollo de Saberes',
        descripcion: 'Proyectos de investigación cultural, patrimonial o identitaria vinculados a la región del Maule.',
        estado: 'open',
        fechaInicio: '03-02-2025',
        fechaFin: '09-03-2025',
        fechaCierre: '2025-03-09',
        beneficiarios: 'Instituciones Privadas sin Fines de Lucro',
        montos: '$2.000.000 a $5.000.000.',
        tipoFondo: 'FNDR 8%',
        rutaDetalles: '/programas/3'
    },
    {
        id: '9',
        titulo: 'Formación y Mediación de Saberes',
        descripcion: 'Acciones formativas, talleres y procesos de capacitación artística y cultural para la comunidad.',
        estado: 'open',
        fechaInicio: '03-02-2025',
        fechaFin: '09-03-2025',
        fechaCierre: '2025-03-09',
        beneficiarios: 'Instituciones Privadas sin Fines de Lucro',
        montos: '$2.000.000 a $5.000.000.',
        tipoFondo: 'FNDR 8%',
        rutaDetalles: '/programas/3'
    },
    {
        id: '10',
        titulo: 'Acciones de Mediación Cultural',
        descripcion: 'Actividades que acerquen el arte y la cultura a públicos generales o grupos específicos (niños, jóvenes, adultos mayores, personas con discapacidad, etc.).',
        estado: 'open',
        fechaInicio: '03-02-2025',
        fechaFin: '09-03-2025',
        fechaCierre: '2025-03-09',
        beneficiarios: 'Instituciones Privadas sin Fines de Lucro',
        montos: '$2.000.000 a $5.000.000.',
        tipoFondo: 'FNDR 8%',
        rutaDetalles: '/programas/3'
    },
    {
        id: '11',
        titulo: 'Circulación Cultural',
        descripcion: 'Programas, circuitos o redes para la itinerancia de obras, festivales, ferias y eventos culturales en la región del Maule.',
        estado: 'open',
        fechaInicio: '03-02-2025',
        fechaFin: '09-03-2025',
        fechaCierre: '2025-03-09',
        beneficiarios: 'Instituciones Privadas sin Fines de Lucro',
        montos: '$2.000.000 a $5.000.000.',
        tipoFondo: 'FNDR 8%',
        rutaDetalles: '/programas/3'
    },
    {
        id: '12',
        titulo: 'Acceso Equitativo a Expresiones Artísticas y Culturales',
        descripcion: 'Iniciativas que promuevan el acceso inclusivo y equitativo a expresiones artísticas y culturales en distintos territorios y comunidades.',
        estado: 'open',
        fechaInicio: '03-02-2025',
        fechaFin: '09-03-2025',
        fechaCierre: '2025-03-09',
        beneficiarios: 'Instituciones Privadas sin Fines de Lucro',
        montos: '$2.000.000 a $5.000.000.',
        tipoFondo: 'FNDR 8%',
        rutaDetalles: '/programas/3'
    },
    {
        id: '13',
        titulo: 'Patrimonio Cultural e Identidad de la Región',
        descripcion: 'Acciones de identificación, investigación, registro, preservación y difusión del patrimonio cultural material e inmaterial del Maule.',
        estado: 'open',
        fechaInicio: '03-02-2025',
        fechaFin: '09-03-2025',
        fechaCierre: '2025-03-09',
        beneficiarios: 'Instituciones Privadas sin Fines de Lucro',
        montos: '$2.000.000 a $5.000.000.',
        tipoFondo: 'FNDR 8%',
        rutaDetalles: '/programas/3'
    },
    {
        id: '14',
        titulo: 'Gestión Cultural Ciudadana',
        descripcion: 'Proyectos de gestión y fortalecimiento de organizaciones culturales y comunitarias para el desarrollo local.',
        estado: 'open',
        fechaInicio: '03-02-2025',
        fechaFin: '09-03-2025',
        fechaCierre: '2025-03-09',
        beneficiarios: 'Instituciones Privadas sin Fines de Lucro',
        montos: '$2.000.000 a $5.000.000.',
        tipoFondo: 'FNDR 8%',
        rutaDetalles: '/programas/3'
    },
    {
        id: '15',
        titulo: 'Innovación, Cultura Digital y Comunicación del Patrimonio',
        descripcion: 'Iniciativas que integren tecnologías digitales, culturas digitales y nuevas formas de comunicación del patrimonio cultural regional.',
        estado: 'open',
        fechaInicio: '03-02-2025',
        fechaFin: '09-03-2025',
        fechaCierre: '2025-03-09',
        beneficiarios: 'Instituciones Privadas sin Fines de Lucro',
        montos: '$2.000.000 a $5.000.000.',
        tipoFondo: 'FNDR 8%',
        rutaDetalles: '/programas/3'
    }
];

export const PROGRAM_DETAILS_DATA: ProgramDetailData[] = [
    {
        id: '3',
        titulo: 'Subvenciones para actividades FNDR 8%',
        descripcion: 'Este fondo busca financiar iniciativas que fomenten las identidades territoriales, promuevan la creación artística y mejoren la calidad de vida de los habitantes de la región. Las organizaciones interesadas, que deben contar con al menos dos años de personalidad jurídica vigente, podrán postular sus proyectos en línea a una de las nueve categorías disponibles, optando a montos de financiamiento que van desde $2.000.000 hasta $5.000.000.',
        estado: 'open',
        fechaInicio: '01-11-2025',
        fechaFin: '15-12-2025',
        fechaCierre: '2025-12-15',
        fechaCierreFormateada: 'Viernes 21 de Noviembre, 2025',
        beneficiarios: 'Organizaciones',
        montos: '$2.000.000 - $5.000.000',
        tipoFondo: 'FNDR 8%',
        rutaDetalles: '/programas/3',
        categoria: 'Subvenciones y apoyos',
        invita: 'Gobierno Regional del Maule',
        alcance: 'Regional',
        imagenHero: 'assets/images/fotosproyectos/8 por ciento.webp',
        modalidad: {
            tipo: 'Online',
            icono: 'pi-laptop',
            descripcion: 'Las postulaciones a la presente convocatoria serán recibidas en la plataforma del Portal MaulePro. Para acceder a la citada plataforma, los postulantes deberán ingresar a la página web del Gobierno Regional del Maule, en donde existirá un banner del proceso concursal que redirigirá a los postulantes a la citada plataforma.',
            linkPostulacion: '/login'
        },
        tipoPostulante: {
            tipo: 'Personas Naturales y Jurídicas',
            icono: 'pi-users',
            descripcion: 'El FNDR 8% está dirigido a personas naturales y jurídicas que cumplan con los requisitos establecidos en las bases del concurso. Los postulantes deberán acreditar su calidad mediante la documentación correspondiente.'
        },
        tipoFinanciamiento: {
            tipo: 'Subvención',
            icono: 'pi-dollar',
            descripcion: 'El financiamiento corresponde a una subvención que puede variar según el tipo de actividad y los montos establecidos en las bases del concurso. Los montos serán determinados según la evaluación de cada proyecto presentado.'
        },
        requisitos: {
            introduccion: 'Para ser admitido en el concurso, se deben cumplir los siguientes requisitos obligatorios:',
            items: [
                {
                    titulo: 'Quiénes pueden postular:',
                    descripcion: 'Exclusivamente instituciones privadas sin fines de lucro.'
                },
                {
                    titulo: 'Antigüedad y Vigencia:',
                    descripcion: 'La institución debe tener una personalidad jurídica con dos años de antigüedad al momento de postular y su directiva debe estar vigente.'
                },
                {
                    titulo: 'Objeto Social:',
                    descripcion: 'Los estatutos de la institución deben indicar que entre sus fines está la ejecución de actividades artísticas, culturales y/o patrimoniales.'
                },
                {
                    titulo: 'Experiencia:',
                    descripcion: 'Es "imprescindible" demostrar la experiencia de la institución en el desarrollo de actividades artísticas y culturales.'
                },
                {
                    titulo: 'Exclusividad:',
                    descripcion: 'Cada institución puede presentar solo una iniciativa al concurso FNDR 8% 2025. Si ya postuló a otra línea (como deportes o seguridad ciudadana), no podrá postular a este concurso.'
                },
                {
                    titulo: 'Modalidad de Postulación:',
                    descripcion: 'La postulación es exclusivamente a través de la plataforma on-line del Gobierno Regional (www.goremaule.cl).'
                },
                {
                    titulo: 'Acceso:',
                    descripcion: 'El representante legal debe ingresar a la plataforma usando su Clave Única.'
                },
                {
                    titulo: 'Sin Deudas:',
                    descripcion: 'No se admitirán instituciones que tengan ejecuciones, rendiciones financieras pendientes u observadas de fondos FNDR de años anteriores.'
                },
                {
                    titulo: 'Cotizaciones:',
                    descripcion: 'Se deben adjuntar 2 cotizaciones por cada ítem o artículo solicitado en el presupuesto.'
                },
                {
                    titulo: 'Restricción Clave:',
                    descripcion: 'Quedarán inadmisibles las iniciativas que consistan en proyectos de infraestructura (adquisición, reparación o construcción).'
                }
            ]
        },
        documentacion: {
            introduccion: 'Al momento de postular en la plataforma en línea, se debe adjuntar la siguiente lista de documentos:',
            items: [
                {
                    titulo: 'Carta de presentación (Anexo 1):',
                    descripcion: 'Firmada y timbrada por el Representante Legal, dirigida al Gobernador Regional.'
                },
                {
                    titulo: 'Formulario de Postulación:',
                    descripcion: 'Llenado íntegramente en la plataforma.'
                },
                {
                    titulo: 'RUT de la institución:',
                    descripcion: 'Escaneado por ambos lados.'
                },
                {
                    titulo: 'Cédula de Identidad del Representante Legal:',
                    descripcion: 'Escaneada por ambos lados.'
                },
                {
                    titulo: 'Certificado de directorio de persona jurídica:',
                    descripcion: 'Vigente (no más de 60 días) y que acredite los 2 años de antigüedad de la personalidad jurídica.'
                },
                {
                    titulo: 'Estatutos de la Institución:',
                    descripcion: 'Completos, legibles y timbrados por un ministro de fe.'
                },
                {
                    titulo: 'Cartola o Certificado de Cuenta Bancaria:',
                    descripcion: 'A nombre de la institución (no se aceptan cuentas de cooperativas de ahorro y crédito).'
                },
                {
                    titulo: 'Certificado de inscripción en el Registro de Personas Jurídicas Receptoras de Fondos Públicos:',
                    descripcion: '(www.registros19862.cl).'
                },
                {
                    titulo: 'Declaración jurada (Anexo 2):',
                    descripcion: 'Que la institución no tiene deudas ni cuentas por rendir con el Estado.'
                },
                {
                    titulo: 'Declaración jurada (Anexo 3):',
                    descripcion: '(Si aplica) Sobre el destino final de los bienes a adquirir.'
                },
                {
                    titulo: 'Declaración jurada (Anexo 4):',
                    descripcion: 'Que la iniciativa no se está postulando a otra fuente de financiamiento público.'
                },
                {
                    titulo: 'Declaración jurada (Anexo 5):',
                    descripcion: '(Si aplica) Sobre aportes de otras fuentes de financiamiento.'
                },
                {
                    titulo: 'Perfil de cargos (Anexo 6):',
                    descripcion: '(Si aplica) Perfil y experiencia exigible para los recursos humanos a contratar.'
                },
                {
                    titulo: 'Declaración jurada de la Directiva (Anexo 7):',
                    descripcion: 'Declaración de todos los integrantes de la directiva (presidente, secretario y tesorero) sobre el conocimiento del proyecto y la ausencia de conflictos de interés.'
                },
                {
                    titulo: 'Dos (2) Cotizaciones:',
                    descripcion: 'Por cada ítem o artículo solicitado en el presupuesto.'
                },
                {
                    titulo: 'Antecedentes de Experiencia:',
                    descripcion: 'Documentos que demuestren la experiencia de la institución (certificados, imágenes, etc.).'
                },
                {
                    titulo: '(Solo Fundaciones/Corporaciones):',
                    descripcion: 'Balance financiero del año 2024.'
                }
            ],
            documentosDescarga: [
                {
                    nombre: 'Manual de Postulación FNDR 8% 2025',
                    url: 'assets/pdf/8%/Manual_Postulacin_FNDR 8 2025.pdf',
                    tipo: 'pdf'
                },
                {
                    nombre: 'Instructivo 8%',
                    url: 'assets/pdf/8%/instructivo 8%.pdf',
                    tipo: 'pdf'
                },
                {
                    nombre: 'Manual de Difusión 2025 8%',
                    url: 'assets/pdf/8%/MANUAL DE DIFUSION 2025 8%.pdf',
                    tipo: 'pdf'
                },
                {
                    nombre: 'Protocolo de Difusión 2025',
                    url: 'assets/pdf/8%/Protocolo_de_Difusin_2025.pdf',
                    tipo: 'pdf'
                },
                {
                    nombre: 'Manual de Marca',
                    url: 'assets/pdf/8%/MANUAL_DE_MARCA_(0).pdf',
                    tipo: 'pdf'
                }
            ]
        },
        evaluacion: {
            introduccion: 'El proceso de evaluación tiene dos etapas:',
            etapas: [
                {
                    titulo: '1. Evaluación de Admisibilidad',
                    descripcion: 'Primero, se revisa si la iniciativa cumple con todos los requisitos y documentos obligatorios. Las iniciativas pueden ser clasificadas como:',
                    items: [
                        {
                            titulo: 'Admisible:',
                            descripcion: 'Cumple todo y pasa a Evaluación Técnica.'
                        },
                        {
                            titulo: 'Admisible con observaciones:',
                            descripcion: 'Falta documentación (del numeral 1.12) que no es un requisito obligatorio de admisibilidad (del 1.11). En este caso, la institución tiene 10 días corridos para subsanar las observaciones en la misma plataforma web.'
                        },
                        {
                            titulo: 'Inadmisible:',
                            descripcion: 'No cumple con los requisitos obligatorios (del 1.11) o no subsanó las observaciones a tiempo.'
                        }
                    ]
                },
                {
                    titulo: '2. Evaluación Técnica',
                    descripcion: 'Las iniciativas "Admisibles" pasan a una evaluación técnica con una escala de 100 puntos. El puntaje mínimo para ser recomendado para financiamiento es de 70 puntos.',
                }
            ],
            criterios: [
                { nombre: 'Equidad', ponderacion: '10%' },
                { nombre: 'Coherencia Metodológica', ponderacion: '25%' },
                { nombre: 'Presupuesto', ponderacion: '20%' },
                { nombre: 'Calidad', ponderacion: '20%' },
                { nombre: 'Impacto e Innovación', ponderacion: '20%' },
                { nombre: 'Vulnerabilidad y/o riesgo social', ponderacion: '5%' }
            ],
            notasImportantes: [
                {
                    descripcion: 'El Gobierno Regional se reserva el derecho de modificar el presupuesto si los montos son excesivos, no justificados, o tienen errores de cálculo.'
                },
                {
                    descripcion: 'Si los recursos no alcanzan para financiar todas las iniciativas que superen los 70 puntos, se priorizará según el puntaje más alto.'
                },
                {
                    descripcion: 'En caso de empate en el puntaje, se priorizará la iniciativa que tenga el mayor número de beneficiarios directos.'
                }
            ]
        },
        bases: {
            bases: [
                {
                    nombre: 'Manual de Postulación FNDR 8% 2025',
                    url: 'assets/pdf/8%/Manual_Postulacin_FNDR 8 2025.pdf'
                },
                {
                    nombre: 'Instructivo 8%',
                    url: 'assets/pdf/8%/instructivo 8%.pdf'
                },
                {
                    nombre: 'Manual de Difusión 2025 8%',
                    url: 'assets/pdf/8%/MANUAL DE DIFUSION 2025 8%.pdf'
                },
                {
                    nombre: 'Protocolo de Difusión 2025',
                    url: 'assets/pdf/8%/Protocolo_de_Difusin_2025.pdf'
                },
                {
                    nombre: 'Manual de Marca',
                    url: 'assets/pdf/8%/MANUAL_DE_MARCA_(0).pdf'
                }
            ]
        },
        dudasConsultas: {
            descripcion: 'Para consultas y/o entrega de información relacionada con el proceso de postulación, los interesados podrán dirigirse al Gobierno Regional del Maule o a través de correo electrónico, en los siguientes horarios:',
            horarios: 'De lunes a jueves de 09:00 horas a 13:00 hrs., y en la tarde de 14:00 hrs., a 17:00 horas y los viernes de 09:00 horas a 13:00 hrs., y en la tarde de 14:00 hrs., a 16:00 horas.',
            contacto: 'Correo electrónico sin restricción de horario, salvo el último día hábil del periodo de postulación que se recibirán correos hasta las 16:30 horas (si día recae entre un lunes a un jueves) o hasta las 15:30 horas (si día recae un viernes).'
        }
    },
    {
        id: '6',
        titulo: 'Fondo Regional de Iniciativa Local (FRIL 2025)',
        descripcion: 'Apoyo financiero destinados a ejecutar, mantener o conservar infraestructura pública, incluyendo obras de carácter social o deportivo. Busca mejorar la calidad de vida, recuperar espacios públicos, atender necesidades territoriales y promover la equidad, considerando criterios de género e inclusión.',
        estado: 'open',
        fechaInicio: '01-12-2025',
        fechaFin: '31-01-2026',
        fechaCierre: '2026-01-31',
        fechaCierreFormateada: 'Viernes 31 de Enero, 2026',
        beneficiarios: 'Municipalidades',
        montos: 'Hasta 3.000 UTM',
        tipoFondo: 'FRIL',
        rutaDetalles: '/programas/6',
        categoria: 'Inversión Municipal',
        invita: 'Gobierno Regional del Maule',
        alcance: 'Regional',
        modalidad: {
            tipo: 'Online',
            icono: 'pi-laptop',
            descripcion: 'Los municipios deben presentar sus iniciativas a través de la plataforma Maule Pro. La postulación está disponible únicamente para las municipalidades de la Región del Maule.',
            linkPostulacion: '/login'
        },
        tipoPostulante: {
            tipo: 'Municipalidades',
            icono: 'pi-building',
            descripcion: 'Solo las municipalidades de la Región del Maule, mediante su Alcalde/Alcaldesa, están habilitadas para postular a este fondo.'
        },
        tipoFinanciamiento: {
            tipo: 'Inversión',
            icono: 'pi-briefcase',
            descripcion: 'Financiamiento para proyectos de inversión pública que no superen las 3.000 UTM cuando corresponden al "Subtítulo 33". Los proyectos deben tener carácter comunal y estar alineados con la planificación territorial.'
        },
        requisitos: {
            introduccion: 'Para postular al FRIL 2024, se deben cumplir los siguientes requisitos obligatorios:',
            items: [
                {
                    titulo: 'Tipos de proyectos financiables:',
                    descripcion: 'Infraestructura pública (plazas, aceras, recintos comunitarios, obras de conservación), equipamientos (maquinaria o equipos para el funcionamiento de infraestructura), mobiliario (cuando sea parte integral del proyecto), y consultorías (solo para diseño de proyectos o prefactibilidad vinculada a inversión pública).'
                },
                {
                    titulo: 'Carácter del proyecto:',
                    descripcion: 'El proyecto debe tener carácter comunal y estar alineado con la planificación territorial e instrumentos vigentes.'
                },
                {
                    titulo: 'Requisitos técnicos:',
                    descripcion: 'Incluir diagnóstico, justificación, objetivos y resultados esperados. No superar las 3.000 UTM cuando corresponde al "Subtítulo 33".'
                },
                {
                    titulo: 'Terreno:',
                    descripcion: 'Contar con terreno acreditado (dominio municipal u otra entidad pública).'
                },
                {
                    titulo: 'Enfoque inclusivo:',
                    descripcion: 'Integrar enfoque de género y accesibilidad universal cuando sea aplicable.'
                },
                {
                    titulo: 'Plazo de postulación:',
                    descripcion: '40 días hábiles desde la publicación de la resolución.'
                }
            ]
        },
        documentacion: {
            introduccion: 'Al momento de postular, se debe adjuntar la siguiente documentación requerida:',
            items: [
                {
                    titulo: 'I. Ficha IDI - Identificación del proyecto:',
                    descripcion: 'Nombre del proyecto + comuna, localización geográfica, y responsable técnico municipal.'
                },
                {
                    titulo: 'II. Ficha IDI - Diagnóstico:',
                    descripcion: 'Problema a resolver, causas, efectos, población beneficiaria con datos desagregados por género, y relación con instrumentos de planificación pública.'
                },
                {
                    titulo: 'III. Especificaciones Técnicas:',
                    descripcion: 'Firmadas por profesional competente con detalle técnico de las obras o intervención.'
                },
                {
                    titulo: 'IV. Presupuesto Oficial (Anexo Nº 2):',
                    descripcion: 'Desglose por partidas y precios unitarios, firmado por profesional proyectista y SECPLAN.'
                },
                {
                    titulo: 'V. Carta Gantt:',
                    descripcion: 'Coherente con el presupuesto y las partidas establecidas.'
                },
                {
                    titulo: 'VI. Planimetría requerida:',
                    descripcion: 'Plantas de arquitectura, planta de fundaciones, planta de estructura, elevaciones, cortes y cubicaciones, detalle de puertas y ventanas, cuadro de superficies, y ubicación en el contexto territorial.'
                },
                {
                    titulo: 'VII. Acreditación de dominio del terreno:',
                    descripcion: 'Certificado municipal (si es dominio municipal), certificado del administrador de bienes nacionales, documentos de comodato o transferencia, o informes de propiedad cuando el bien tenga restricciones o litigios.'
                },
                {
                    titulo: 'VIII. Certificado de Participación Ciudadana:',
                    descripcion: 'Cuando corresponda según las bases del concurso.'
                },
                {
                    titulo: 'IX. Certificado de Recepción de Infraestructura Existente:',
                    descripcion: 'En proyectos de conservación de infraestructura existente.'
                },
                {
                    titulo: 'X. Memoria de Cálculo Estructural:',
                    descripcion: 'Cuando el proyecto lo requiera.'
                },
                {
                    titulo: 'XI. Estudio de Mecánica de Suelos:',
                    descripcion: 'Si el proyecto lo requiere.'
                },
                {
                    titulo: 'XII. Proyectos de instalaciones:',
                    descripcion: 'Instalaciones eléctricas, sanitarias y gas, según corresponda.'
                },
                {
                    titulo: 'XIII. Formulario de Asesoría Técnica (FAT):',
                    descripcion: 'Cuando corresponda según las bases.'
                },
                {
                    titulo: 'XIV. Aprobaciones sectoriales:',
                    descripcion: 'Aprobación de otros servicios públicos relevantes (Salud, Vialidad, SERVIU, Obras Hidráulicas, etc.).'
                }
            ]
        },
        evaluacion: {
            introduccion: 'El proceso de evaluación del FRIL se divide en dos etapas principales:',
            etapas: [
                {
                    titulo: 'Etapa N°1: Administración',
                    descripcion: 'Revisión documental completa. Si el proyecto es admisible, pasa a evaluación técnica. Si no es admisible, se devuelve al municipio con observaciones.',
                    items: [
                        {
                            titulo: 'Completitud de antecedentes',
                            descripcion: 'Se verifica la completitud de todos los documentos requeridos.'
                        },
                        {
                            titulo: 'Validez de certificados',
                            descripcion: 'Se valida la vigencia de certificados y documentos oficiales.'
                        },
                        {
                            titulo: 'Formatos',
                            descripcion: 'Se revisa el cumplimiento de formatos establecidos.'
                        },
                        {
                            titulo: 'Coherencia técnica',
                            descripcion: 'Se analiza la coherencia entre presupuesto y especificaciones técnicas.'
                        }
                    ]
                },
                {
                    titulo: 'Etapa N°2: Evaluación Técnica',
                    descripcion: 'Aplicada por profesionales del GORE. El proyecto puede ser recomendado para financiamiento o no recomendado. La decisión final se formaliza en un Acta de Evaluación, enviada por la plataforma Maule Pro.',
                    items: [
                        {
                            titulo: 'Pertinencia del diagnóstico',
                            descripcion: 'Análisis de la pertinencia del diagnóstico presentado.'
                        },
                        {
                            titulo: 'Coherencia del proyecto',
                            descripcion: 'Evaluación de la coherencia entre el problema identificado, los objetivos y la solución propuesta.'
                        },
                        {
                            titulo: 'Justificación económica',
                            descripcion: 'Revisión de la justificación económica del proyecto.'
                        },
                        {
                            titulo: 'Calidad técnica',
                            descripcion: 'Verificación de la calidad técnica y viabilidad de ejecución.'
                        },
                        {
                            titulo: 'Cumplimiento normativo',
                            descripcion: 'Comprobación del cumplimiento de normativas sectoriales aplicables.'
                        },
                        {
                            titulo: 'Impacto e inclusión',
                            descripcion: 'Evaluación del impacto social y del enfoque de género e inclusión.'
                        },
                        {
                            titulo: 'Viabilidad',
                            descripcion: 'Análisis de la viabilidad de implementación del proyecto.'
                        }
                    ]
                }
            ]
        },
        bases: {
            bases: [
                {
                    nombre: 'Bases Técnicas FRIL 2024',
                    url: '#'
                },
                {
                    nombre: 'Anexo Nº 2 - Presupuesto Oficial',
                    url: '#'
                },
                {
                    nombre: 'Ficha IDI (Iniciativa de Inversión)',
                    url: '#'
                },
                {
                    nombre: 'Formulario de Asesoría Técnica (FAT)',
                    url: '#'
                }
            ]
        },
        dudasConsultas: {
            descripcion: 'Para consultas y/o entrega de información relacionada con el proceso de postulación del FRIL 2024, los municipios interesados podrán dirigirse al Gobierno Regional del Maule o a través de los canales oficiales.',
            horarios: 'De lunes a jueves de 09:00 horas a 13:00 hrs., y en la tarde de 14:00 hrs., a 17:00 horas y los viernes de 09:00 horas a 13:00 hrs., y en la tarde de 14:00 hrs., a 16:00 horas.',
            contacto: 'Correo electrónico sin restricción de horario para consultas técnicas sobre la postulación.'
        }
    }
];
