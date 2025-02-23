export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Evidencias documentales',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Evidencias documentales',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Procedimientos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Formatos e instructivos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Resolución 2400 de 1979 Ministerio del Trabajo. (s. f.).',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=53565',
    },
    {
      referencia:
        'Congreso de Colombia (Julio 11 de 2012) Ley 1562 de 2012. Ministerio de Trabajo. Colombia.',
      link: 'http://www.mintrabajo.gov.co/normatividad/leyes/2012.html',
    },
    {
      referencia:
        'República de Colombia. (Mayo 26 de 2015) Decreto 1072 de 2015. Ministerio de Trabajo. Colombia.',
      link:
        'http://www.mintrabajo.gov.co/normatividad/decreto-unico-reglamentario-trabajo.html',
    },
    {
      referencia:
        'Decreto Ley 1295 de 1994 - Gestor Normativo. (s. f.). Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=2629',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2019). Resolución 0312 de 2019: Estándares mínimos del sistema de la seguridad y salud en el trabajo.',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59995826/Resolucion+0312-2019-+Estandares+minimos+del+Sistema+de+la+Seguridad+y+Salud.pdf',
    },
    {
      referencia:
        'Conesa Bernal, J. A. (2017). Emergencias y evacuación: ( ed.). Editorial ICB.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/59621?page=130',
    },
    {
      referencia:
        'Torres Nieto, H. (2012). Manual de primeros auxilios y brigadas de emergencia: ( ed.). Fundación Universitaria del Área Andina.',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/70932?page=168',
    },
  ],
  glosario: [
    {
      termino: 'Brigadista',
      significado:
        'persona capacitada para responder a emergencias en una organización, como incendios, evacuaciones o primeros auxilios.',
    },
    {
      termino: 'Desfibrilador Externo Automático (DEA)',
      significado:
        'dispositivo que administra descargas eléctricas para restablecer el ritmo cardíaco.',
    },
    {
      termino: 'Emergencia',
      significado:
        'situación crítica que requiere una respuesta inmediata para proteger vidas y bienes.',
    },
    {
      termino: 'Evacuación',
      significado:
        'proceso de traslado seguro de personas a un lugar protegido durante una emergencia.',
    },
    {
      termino: 'Extintor',
      significado:
        'equipo portátil usado para apagar fuegos incipientes en situaciones de emergencia.',
    },
    {
      termino: 'Gestión de riesgos',
      significado:
        'identificación, evaluación y mitigación de amenazas que pueden afectar la seguridad.',
    },
    {
      termino: 'Plan de emergencia',
      significado:
        'documento que define procedimientos para actuar ante diferentes tipos de crisis.',
    },
    {
      termino: 'Primeros auxilios',
      significado:
        'técnicas iniciales de atención médica para estabilizar a una persona lesionada o enferma.',
    },
    {
      termino: 'Simulacro',
      significado:
        'ejercicio práctico que recrea una situación de emergencia para entrenar a los brigadistas.',
    },
    {
      termino: 'Soporte Vital Básico (SVB)',
      significado:
        'conjunto de maniobras esenciales para preservar la vida en emergencias médicas.',
    },
    {
      termino: 'Sustancias peligrosas',
      significado:
        'materiales que pueden causar daños a la salud o al medio ambiente si no se manejan adecuadamente.',
    },
  ],
}
