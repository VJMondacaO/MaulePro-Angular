import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// PrimeNG Components
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    AccordionModule,
    ButtonModule,
    CardModule
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements OnInit {
  faqs = [
    {
      pregunta: '¿Quiénes pueden postular a cada línea de financiamiento?',
      respuesta: 'Depende del programa. Por ejemplo, <strong>8% FNDR</strong> está orientado a <em>organizaciones</em>; <strong>FRIL</strong> a <em>municipios</em>; otros (p. ej. 500 UTM) a <em>empresas/cooperativas</em>. Revisa la tarjeta del programa y las <em>bases</em> para confirmar beneficiarios.'
    },
    {
      pregunta: '¿Cómo postulo cuando el proceso esté abierto?',
      respuesta: 'Ingresa a la tarjeta del programa y haz clic en <strong>"Postular con ClaveÚnica"</strong>. Completa el formulario y adjunta los documentos requeridos. Al finalizar, descarga tu comprobante.'
    },
    {
      pregunta: '¿Necesito ClaveÚnica para todas las etapas?',
      respuesta: 'Sí, la autenticación principal es con <strong>ClaveÚnica</strong> para garantizar identidad y trazabilidad. Para consultas generales o descargas no es obligatoria.'
    },
    {
      pregunta: '¿En qué formato deben ir los documentos?',
      respuesta: 'Salvo que las bases indiquen otra cosa: <strong>PDF</strong> para resoluciones/informes y <strong>XLSX</strong> para planillas. Tamaño máximo y nomenclatura se especifican en la sección <em>Documentos</em> de cada programa.'
    },
    {
      pregunta: '¿Cómo me entero cuando se abre una convocatoria?',
      respuesta: 'En la tarjeta del programa verás el botón <strong>"Avisarme"</strong> para suscribirte a notificaciones. También puedes revisar el <em>Calendario</em> y el banner de estado.'
    },
    {
      pregunta: '¿Qué pasa después de enviar mi postulación?',
      respuesta: 'Tu postulación entra a <em>revisión técnica y administrativa</em>. Podrás hacer seguimiento desde tu sesión. Si resulta adjudicada, pasarás a la etapa de <strong>convenio</strong> y luego <strong>rendición</strong>.'
    },
    {
      pregunta: '¿Dónde pido ayuda si tengo problemas técnicos o de requisitos?',
      respuesta: 'Usa la opción <strong>Ayuda</strong> en el encabezado para ver preguntas frecuentes, escribirnos por formulario o contactar la mesa de ayuda en horario hábil.'
    },
    {
      pregunta: '¿Qué medidas de accesibilidad contempla el portal?',
      respuesta: 'El portal sigue WCAG 2.2 AA: navegación por teclado, foco visible, etiquetas de formularios, contraste adecuado y textos alternativos. Si necesitas ajustes específicos, contáctanos.'
    }
  ];

  ngOnInit(): void {
    this.addStructuredData();
  }

  private addStructuredData(): void {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "¿Quiénes pueden postular a cada línea de financiamiento?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Depende del programa (8% FNDR: organizaciones; FRIL: municipios; otros: empresas/cooperativas). Revisa la tarjeta y las bases."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo postulo cuando el proceso esté abierto?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ingresa a la tarjeta del programa y selecciona \"Postular con ClaveÚnica\". Completa el formulario y adjunta documentos."
          }
        },
        {
          "@type": "Question",
          "name": "¿Necesito ClaveÚnica para todas las etapas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sí, la autenticación principal es con ClaveÚnica para garantizar identidad y trazabilidad."
          }
        },
        {
          "@type": "Question",
          "name": "¿En qué formato deben ir los documentos?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Por defecto PDF para resoluciones/informes y XLSX para planillas, salvo indicación en bases."
          }
        },
        {
          "@type": "Question",
          "name": "¿Cómo me entero cuando se abre una convocatoria?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Usa el botón \"Avisarme\" en la tarjeta del programa o revisa el Calendario y el banner de estado."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué pasa después de enviar mi postulación?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Se revisa técnica y administrativamente. Si adjudicas, pasas a convenio y posterior rendición."
          }
        },
        {
          "@type": "Question",
          "name": "¿Dónde pido ayuda si tengo problemas?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Desde la sección Ayuda: preguntas frecuentes, formulario de contacto y mesa de ayuda en horario hábil."
          }
        },
        {
          "@type": "Question",
          "name": "¿Qué medidas de accesibilidad contempla el portal?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cumplimiento WCAG 2.2 AA: navegación por teclado, foco visible, etiquetas, contraste y textos alternativos."
          }
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);
  }
}
