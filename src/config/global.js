export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Marco conceptual y normativo',
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
        titulo: 'Marco conceptual y normativo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Legislación y normatividad nacional aplicable a las brigadas de emergencia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Conceptos básicos de las brigadas de emergencia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Identificación de los tipos de brigadas de emergencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Brigada de evacuación',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Brigada de primeros auxilios',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Brigada de prevención y combate de incendio',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Brigada de comunicación',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Brigada de búsqueda y rescate',
            hash: 't_4_5',
          },
        ],
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
      referencia:
        'Ley 599 de 2000 - Gestor Normativo. (s. f.). Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=6388',
    },
    {
      referencia: 'Resolución 2400 de 1979 Ministerio del Trabajo. (s. f.).',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=53565',
    },
    {
      referencia:
        'Ley 9 de 1979 Congreso de la República de Colombia. (s. f.).',
      link: 'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=1177',
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
        'Ley 1523 de 2012 - Gestor Normativo. (s. f.). Función Pública.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=47141',
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
      termino: 'Brigada de Emergencias',
      significado:
        'grupo de personas entrenadas para actuar en situaciones de emergencia, como incendios, desastres naturales o accidentes, con el objetivo de proteger vidas y bienes.',
    },
    {
      termino: 'Centro de Comando',
      significado:
        'lugar designado donde se coordinan las respuestas a la emergencia y se gestionan los recursos.',
    },
    {
      termino: 'Comunicación de Emergencia',
      significado:
        'mecanismos y estrategias para informar a la población y a los equipos de respuesta sobre la situación de emergencia y las instrucciones a seguir.',
    },
    {
      termino: 'Equipamiento de Emergencia',
      significado:
        'herramientas y dispositivos utilizados por las brigadas para abordar diferentes tipos de emergencias, como extintores, equipos de rescate, botiquines de primeros auxilios, entre otros.',
    },
    {
      termino: 'Evaluación de riesgos',
      significado:
        'proceso de identificar, analizar y valorar los riesgos asociados a posibles situaciones de emergencia.',
    },
    {
      termino: 'Evacuación',
      significado:
        'proceso de mover a personas de un lugar peligroso a un lugar seguro.',
    },
    {
      termino: 'Plan de Emergencias',
      significado:
        'documento que contiene estrategias y procedimientos a seguir en caso de una emergencia para minimizar riesgos y coordinar acciones.',
    },
    {
      termino: 'Prevención',
      significado:
        'conjunto de acciones dirigidas a evitar que ocurran emergencias o desastres, o a reducir su impacto',
    },
    {
      termino: 'Primeros Auxilios',
      significado:
        'asistencia inmediata que se proporciona a una persona lesionada o enferma antes de que llegue ayuda profesional.',
    },
    {
      termino: 'Protocolos',
      significado:
        'conjuntos de procedimientos establecidos que deben seguirse durante situaciones de emergencia.',
    },
    {
      termino: 'Rescate',
      significado:
        'acción de recuperar a personas que están en peligro, atrapadas o en una situación de emergencia.',
    },
    {
      termino: 'Respuesta a Emergencias',
      significado:
        'acciones implementadas inmediatamente después de una emergencia para controlar la situación y minimizar daños.',
    },
    {
      termino: 'Simulacro',
      significado:
        'ejercicio práctico que replica una situación de emergencia para entrenar a los miembros de la brigada y mejorar la efectividad de la respuesta.',
    },
    {
      termino: 'Triaje',
      significado:
        'proceso de clasificar a las personas que requieren atención médica en función de la gravedad de sus lesiones o enfermedades durante una emergencia.',
    },
    {
      termino: 'Voluntariado',
      significado:
        'personas que ofrecen su tiempo y habilidades para ayudar en situaciones de emergencia, a menudo sin remuneración',
    },
  ],
}
