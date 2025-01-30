<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Conformación de brigadas de emergencias y Comité operativo de emergencia empresarial'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p(data-aos="fade-left").mb-4 La adecuada gestión de emergencias requiere un sólido respaldo documental que garantice la eficacia de cada intervención realizada.

    .bg-full-width.bg-color-7.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/1.png', alt='')
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Evidencias documentales 
            p.mb-4(data-aos="fade-right") En el PDF Evidencias documentales , se exploran los principales registros y documentos que aseguran la trazabilidad de las acciones, desde informes de capacitación hasta planes de emergencia actualizados. Estos elementos no solo permiten evaluar el desempeño operativo de las brigadas, sino que también proporcionan una base para la mejora continua de protocolos y estrategias, garantizando la seguridad de las personas y el cumplimiento de la normativa vigente.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Evidencias documentales

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Capacitación y entrenamiento

    .row.mb-4
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El diseño de programas de capacitación para brigadas de emergencia se convierte en una tarea esencial. Estas brigadas, compuestas por individuos entrenados y comprometidos, son el primer frente de respuesta ante crisis, y su efectividad depende en gran medida de la formación que reciben.

        p(data-aos="fade-left").mb-4 El desarrollo de programas de capacitación específicos permite no solo dotar a los miembros de las brigadas de habilidades técnicas y tácticas, sino también fomentar competencias en liderazgo, trabajo en equipo y toma de decisiones bajo presión. Un diseño bien estructurado y adaptado a las necesidades particulares de cada comunidad o institución puede marcar la diferencia entre una respuesta eficaz y una gestión de crisis ineficiente.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")


    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Evaluación de necesidades

    p(data-aos="fade-left").mb-4 Para conocer sobre esta temática, lo invitamos a escuchar el siguiente podcast.

    .bg-full-width.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
          .col-lg-6
            
            
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Fundamentos de la innovación estratégica"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )
    
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Objetivos de capacitación

    .row.mb-4
      .col-lg-8
        .bg-color-7.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Una vez que se ha completado la evaluación de necesidades, el siguiente paso crucial en el desarrollo de un programa de capacitación es establecer objetivos claros y medibles que guíen el proceso formativo. Estos objetivos deben estar alineados con los desafíos específicos que enfrenta la brigada y ser alcanzables dentro de un marco temporal razonable. 

        p(data-aos="fade-left").mb-4 La formulación de objetivos bien definidos no solo facilita la planificación efectiva de las actividades de capacitación, sino que también permite la evaluación de su impacto y efectividad a lo largo del tiempo. A continuación, se presentan ejemplos detallados de objetivos de capacitación que pueden ser implementados:

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/6.png", data-aos="zoom-in")


    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-1.png")
            .col-lg-7
              h5 Mejorar el tiempo de respuesta ante emergencias
              p La reducción del tiempo de respuesta en situaciones críticas, es esencial para salvar vidas y minimizar el impacto de los incidentes. Un objetivo específico dentro de este ámbito, podría ser disminuir el tiempo promedio entre la recepción de la alerta y la llegada al lugar de la emergencia en un 20 %, en un plazo de seis meses. Para lograr esto, se pueden llevar a cabo sesiones de capacitación enfocadas en la mejora de la eficiencia operativa, que incluya simulacros y entrenamientos prácticos sobre el conocimiento de rutas alternas y la optimización de la toma de decisiones en situaciones de alta presión. Además, se pueden implementar tecnologías de comunicación que permitan un flujo de información más rápido y efectivo.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-2.png")
            .col-lg-7
              h5 Incrementar la capacidad de evaluación de riesgos
              p La habilidad para identificar y evaluar riesgos de manera rápida y precisa durante una emergencia es fundamental para una respuesta efectiva. Un objetivo de capacitación podría ser capacitar a los miembros de la brigada en la realización de evaluaciones rápidas de peligros potenciales, con el fin de aumentar su capacidad de respuesta ante diferentes escenarios de emergencia. Esto incluye el entrenamiento en el uso de herramientas y metodologías específicas, como la evaluación primaria y secundaria en un incidente. Se pueden organizar talleres prácticos donde los participantes realicen simulaciones de evaluación de riesgos en diversas situaciones, promoviendo así un aprendizaje activo y colaborativo.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-3.png")
            .col-lg-7
              h5 Fortalecer la coordinación interinstitucional
              p En el contexto de emergencias complejas, es vital que las brigadas de rescate colaboren de manera efectiva con otros organismos, tales como cuerpos de policía, bomberos y servicios médicos de emergencia. Un objetivo importante en este ámbito sería mejorar la capacidad de los miembros de la brigada para comunicarse y coordinarse eficazmente con estas instituciones, asegurando que todos los actores involucrados trabajen juntos bajo un mando único y organizado. Para alcanzar este objetivo, se pueden realizar ejercicios de simulación conjunta y talleres de formación en habilidades de comunicación y liderazgo, donde los participantes aprendan a establecer protocolos claros de coordinación y a utilizar sistemas de comunicación interoperables. Esto no solo mejorará la eficacia de las operaciones en el terreno, sino que también fomentará un ambiente de colaboración entre las diferentes organizaciones.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-4.png")
            .col-lg-7
              h5 Desarrollar habilidades técnicas y operativas específicas
              p Además de los objetivos generales de respuesta y coordinación, es fundamental que los miembros de la brigada cuenten con habilidades técnicas y operativas específicas para manejar equipamiento y tecnología de emergencia. Un objetivo adicional podría ser capacitar a los miembros en el uso y mantenimiento de equipos de rescate avanzados, como equipos de comunicación y herramientas de búsqueda y rescate. La capacitación puede incluir sesiones teóricas y prácticas, donde se enseñan no solo las funciones del equipo, sino también aspectos de seguridad y mantenimiento para asegurar su óptimo funcionamiento en situaciones críticas.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-5.png")
            .col-lg-7
              h5 Fomentar la resiliencia y el bienestar emocional
              p La capacitación también debe abordar el aspecto emocional y psicológico de los miembros de la brigada, quienes pueden enfrentarse a situaciones estresantes y traumáticas. Un objetivo relevante en este sentido podría ser implementar programas de capacitación en manejo del estrés y resiliencia, que ayuden a los miembros a desarrollar estrategias para afrontar la presión emocional que conlleva su trabajo. Esto puede incluir talleres sobre técnicas de autocuidado, manejo de crisis y apoyo emocional entre compañeros, promoviendo así un ambiente de trabajo saludable y solidario.


    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/7.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Establecer objetivos de capacitación claros y medibles, es un paso fundamental para garantizar que los miembros de la brigada estén debidamente preparados para enfrentar los desafíos de su labor. A través de un enfoque integral que aborde tanto habilidades técnicas como aspectos de coordinación y bienestar emocional, se busca no solo mejorar la efectividad operativa, sino también fomentar un equipo cohesionado y resiliente, capaz de actuar con eficacia y humanidad en situaciones de emergencia. 


    #t_1_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.4] Metodologías de capacitación para brigadas de emergencia

    p(data-aos="fade-left").mb-4 La capacitación efectiva de las brigadas de emergencia requiere de un enfoque integral que combine diferentes metodologías para garantizar que sus miembros estén preparados para responder ante cualquier situación crítica.


    .bg-full-width.bg-color-7.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/1.png', alt='')
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Metodologías de capacitación para brigadas de emergencia  
            p.mb-4(data-aos="fade-right") En el PDF Metodologías de capacitación para brigadas de emergencia,  se presentan diversos enfoques de formación que permiten desarrollar tanto habilidades técnicas como competencias blandas necesarias para una respuesta eficaz. Estas metodologías abarcan desde talleres prácticos y simulacros hasta entrenamientos sobre el terreno y formación en línea, asegurando que los brigadistas adquieran conocimientos teóricos y prácticos para actuar de manera rápida, eficiente y segura en situaciones de emergencia.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Metodologías de capacitación para brigadas de emergencia  


    #t_1_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.5] Contenidos de las capacitaciones y entrenamientos

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") Las brigadas de emergencia deben recibir capacitación en una amplia gama de áreas para garantizar que puedan responder adecuadamente, a diversas situaciones críticas. A continuación, se describen los temas claves en los que deben ser formadas:

        h3.mb-4(data-aos="fade-left") Primeros auxilios y Soporte Vital Básico (SVB)

        p(data-aos="fade-left") La formación en primeros auxilios y soporte vital básico es la piedra angular de la capacitación de cualquier brigada de emergencia. Esta área de conocimiento no solo cubre las técnicas necesarias para atender a personas en situaciones de emergencia, sino que también incluye la comprensión de cómo evaluar una situación y tomar decisiones rápidas y efectivas. Algunos de los aspectos más relevantes son:
        
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="zoom-in").mb-4.mb-lg-0


    .bg-full-width.bg-color-info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema1/info1.svg', alt='', style="max-width: 977px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="10.5%" y="96.5%" numero="+")
                  h5 Técnicas de reanimación cardiopulmonar (RCP)
                  p La RCP es una maniobra vital que puede salvar vidas en casos de paro cardíaco. La capacitación debe incluir tanto la técnica para adultos como para niños y lactantes, así como la importancia de realizar la RCP de manera rápida y continua hasta que llegue ayuda profesional.

                .bg-color-white.box-shadow.p-3(x="30%" y="96.5%" numero="+")
                  h5 Manejo de heridas, fracturas y quemaduras
                  p Los brigadistas deben ser capaces de identificar la gravedad de heridas, fracturas y quemaduras. Esto implica no solo la aplicación de técnicas adecuadas para su tratamiento, como el uso de vendajes, inmovilización de extremidades fracturadas y el enfriamiento de quemaduras, sino también la capacidad de evaluar si se requiere atención médica adicional.

                .bg-color-white.box-shadow.p-3(x="50%" y="96.5%" numero="+")
                  h5 Control de hemorragias y aplicación de vendajes
                  p Saber cómo controlar hemorragias es crucial en situaciones de trauma. La capacitación debe incluir el uso de diferentes tipos de vendajes, torniquetes y técnicas para detener sangrados severos, así como la identificación de signos de shock.

                .bg-color-white.box-shadow.p-3(x="69.5%" y="96.5%" numero="+")
                  h5 Uso de desfibriladores externos automáticos (DEA)
                  p La familiarización con el uso de DEA es esencial, porque estos dispositivos pueden ser críticos en la reanimación de pacientes en paro cardíaco. La formación debe incluir la identificación de cuándo es necesario usar un DEA, cómo operar el dispositivo y su integración en el proceso de RCP.

                .bg-color-white.box-shadow.p-3(x="89%" y="96.5%" numero="+")
                  h5 Atención a víctimas de accidentes y enfermedades súbitas
                  p Además de las técnicas de primeros auxilios, es fundamental que los brigadistas aprendan a evaluar la situación de la víctima, identificar signos y síntomas de enfermedades súbitas (como un infarto o un derrame cerebral) y reaccionar de manera adecuada y rápida.


    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3

        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8
            h2.mb-4(data-aos="fade-left") Manejo de incendios

            p(data-aos="fade-left").mb-4 Otro de los temas claves en la capacitación, es el manejo de incendios, que requiere un enfoque integral y detallado. A continuación, se profundiza en los aspectos esenciales de este tema:

            h4.mb-4(data-aos="fade-left") a. Uso de extintores de distintos tipos

            p(data-aos="fade-left").mb-4 La formación en el uso de extintores es esencial, debido a que cada tipo está diseñado para combatir diferentes clases de fuegos. Los brigadistas deben conocer:

          .col-lg-4.d-none.d-lg-block
            figure
              img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card-2__image(src="@/assets/curso/tema1/11.png" alt="")
              .custom-image-card-2__text.p-4
                h5.mb-2.text-center Extintores de agua
                p.mb-0 Adecuados para incendios de materiales combustibles sólidos como madera y papel. Se debe enseñar su correcta aplicación para evitar que se agrave el fuego en combustibles líquidos o eléctricos.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card-2__image(src="@/assets/curso/tema1/12.png" alt="")
              .custom-image-card-2__text.p-4
                h5.mb-2.text-center Extintores de CO2
                p.mb-0 Ideales para fuegos eléctricos y líquidos inflamables. La capacitación debe incluir la técnica de uso, así como la importancia de la ventilación posterior al uso, dado que el co2 puede desplazar el oxígeno en el ambiente.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card-2__image(src="@/assets/curso/tema1/13.png" alt="")
              .custom-image-card-2__text.p-4
                h5.mb-2.text-center Extintores de polvo químico
                p.mb-0 Versátiles y efectivos en múltiples tipos de incendios, incluidos los eléctricos. Es crucial que los brigadistas practiquen su manipulación y comprendan las limitaciones de cada tipo de extintor.


    h4.mb-4(data-aos="fade-left") b. Prevención y control de incendios en diferentes escenarios

    p(data-aos="fade-left").mb-4 La prevención es clave para minimizar el riesgo de incendios. Los brigadistas deben ser formados en:

    TabsC.color-primario.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Identificación de riesgos" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Identificación de riesgos
            p Reconocer materiales peligrosos en distintos entornos (industriales, forestales y urbanos) y cómo estos pueden contribuir a la propagación del fuego.
        
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-1.png', alt='')
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Implementación de medidas preventivas" :icon="require('@/assets/bullets/icon-tab-c-2.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Implementación de medidas preventivas
            p Aprender a establecer protocolos que puedan incluir el mantenimiento adecuado de instalaciones eléctricas, el almacenamiento seguro de productos inflamables y la creación de cortafuegos en áreas forestales.
        
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-2.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Control de incendios" :icon="require('@/assets/bullets/icon-tab-c-3.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Control de incendios
            p Estrategias efectivas para contener y extinguir incendios en cada tipo de escenario, incluyendo el uso de equipos de protección personal y la evaluación de la situación para decidir si se debe intervenir o esperar a los servicios profesionales.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/tab-3.png', alt='', style="width: 100%;")


    h4.mb-4(data-aos="fade-left") c. Combate de incendios en estructuras

    p(data-aos="fade-left").mb-4 El combate de incendios en estructuras como edificios y viviendas presenta desafíos únicos. La capacitación debe incluir:


    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.align-items-start.mb-5
          .col-lg-8
            p(data-aos="fade-left").mb-4 A continuación, se desarrollan en profundidad las distintas condiciones y características que deben ser consideradas en el perfil de un brigadista.

            AcordionA(tipo="b")
              .div(titulo="Protocolos de actuación")
                p Estos son procedimientos específicos que deben ser adoptados en caso de diferentes tipos de emergencias, como incendios, terremotos, inundaciones o situaciones de violencia. Cada protocolo debe detallar las responsabilidades de cada miembro de la brigada, y las acciones a seguir en cada escenario. Es crucial que estos protocolos sean revisados y actualizados regularmente, para ver cambios en el entorno operativo o en la normativa legal vigente. La claridad y la accesibilidad de estos protocolos, son esenciales para asegurar que cada miembro del equipo sepa qué hacer en el momento crítico.

              .div(titulo="Mapas de riesgo")
                p La identificación de áreas de riesgo es esencial para una respuesta eficaz. Estos mapas permiten visualizar las zonas más vulnerables y los caminos de evacuación más seguros. Además, deben incluir información sobre los recursos disponibles, como extintores, salidas de emergencia y puntos de reunión. La elaboración de estos mapas debe ser un proceso participativo, involucrando a todos los niveles de la organización, para asegurar considerar diferentes perspectivas y conocimientos locales.

              .div(titulo="Simulacros y entrenamientos regulares")
                p La preparación es clave en la gestión de emergencias. Realizar simulacros y entrenamientos periódicos, ayuda a mantener al personal alerta y familiarizado con los procedimientos establecidos. Estos ejercicios prácticos no solo refuerzan la confianza del equipo, sino que también permiten identificar áreas de mejora en los protocolos existentes. Durante los simulacros, es importante evaluar el tiempo de respuesta, la efectividad de la comunicación y la coordinación entre los miembros del equipo. Además, se deben documentar los resultados de cada ejercicio para realizar ajustes necesarios y así optimizar la planificación.

          .col-lg-4
            figure
              img(src="@/assets/curso/tema1/14.png", alt="").mb-4.mb-lg-0



        h4.mb-4(data-aos="fade-left") d. Evacuación de personas en caso de incendio

        p(data-aos="fade-left").mb-4 La evacuación eficaz es crucial durante un incendio. La capacitación debe incluir:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/15.svg"
                alt="Barreras"
                style="width: 90px"
              )
              h5.mb-2.text-center Desarrollo de planes de evacuación
              p.mb-0.text-center Cómo elaborar y comunicar planes de evacuación claros y efectivos, adaptados a diferentes tipos de estructuras y situaciones.

          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/16.svg"
                alt="Información"
                style="width: 90px"
              )
              h5.mb-2.text-center Simulacros de evacuación
              p.mb-0.text-center Realizar ejercicios regulares que permitan a los brigadistas y a los ocupantes familiarizarse con las rutas de escape y los procedimientos a seguir en caso de una emergencia.

          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/17.svg"
                alt="Producto"
                style="width: 90px"
              )
              h5.mb-2.text-center Comunicación durante la evacuación
              p.mb-0.text-center Enseñar habilidades de liderazgo y comunicación para guiar a las personas de manera ordenada y segura fuera del peligro.

    
    h2.mb-4(data-aos="fade-left") Búsqueda y rescate

    p(data-aos="fade-left").mb-4 Este tema es fundamental dentro de la formación, dado que si se realiza con una buena técnica dependerá el éxito de la brigada en dicha emergencia, ante lo cual las formaciones deben estar orientadas en lo siguiente:

    h4.mb-4(data-aos="fade-left") a. Técnicas de rescate en accidentes

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white(data-aos="zoom-in")
          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-1-2.png")
            .col-lg-7
              h5 Accidentes vehiculares
              p La formación debe incluir el uso de técnicas específicas para el rescate de personas atrapadas en vehículos tras colisiones. Esto incluye la comprensión de la anatomía de los vehículos, el uso de herramientas hidráulicas como cizallas y expansores, y la aplicación de técnicas de estabilización del vehículo para garantizar la seguridad del rescatador y la víctima.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-2-2.png")
            .col-lg-7
              h5 Accidentes en el lugar de trabajo
              p Los rescatistas deben estar familiarizados con los riesgos asociados a diferentes tipos de entornos laborales, como la construcción o la industria, donde pueden ocurrir caídas, atrapamientos o accidentes con maquinaria pesada.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5
              figure
                img(src="@/assets/curso/tema1/slider-3-2.png")
            .col-lg-7
              h5 Desastres naturales
              p La capacitación debe incluir el manejo de situaciones provocadas por desastres naturales como terremotos, inundaciones o deslizamientos de tierra. Esto implica el conocimiento de técnicas de búsqueda y rescate en terrenos difíciles y la utilización de equipamiento específico para operar en condiciones adversas.


    h4.mb-4(data-aos="fade-left") b. Extracción de víctimas atrapadas

    .row.mb-4
      .col-lg-8
        .bg-color-2.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 Cuando ocurre un colapso estructural, la extracción de víctimas atrapadas se convierte en una tarea crítica. Los miembros de las brigadas deben aprender a evaluar la estabilidad de las estructuras colapsadas y a utilizar técnicas de rescate que minimicen el riesgo de causar más daños a las víctimas.
        
        p(data-aos="fade-left") La formación debe incluir también la práctica de rescate en situaciones donde las víctimas están atrapadas bajo escombros, lo que requiere un enfoque cuidadoso y técnico para evitar el agravamiento de las lesiones.
        
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/18.png", data-aos="zoom-in").mb-4.mb-lg-0


    h4.mb-4(data-aos="fade-left") c. Protocolos de seguridad en rescates

    .row.mb-4
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/19.png', alt='')
      .col-lg-8
        p(data-aos="fade-left") Tal como lo establece la Resolución 4271 del 2021 del Ministerio de trabajo, todo trabajo en alturas debe tener un plan de rescate que como parte de un plan de prevención y respuesta ante emergencias, la seguridad es primordial en cualquier operación de rescate. Los brigadistas deben estar formados en la identificación y mitigación de riesgos, así como en la aplicación de protocolos de seguridad que garanticen un ambiente de trabajo seguro.

        p(data-aos="fade-left") Esto incluye la realización de reuniones de planificación antes de cada operación, la evaluación de la escena del incidente y la implementación de medidas de seguridad para proteger a todos los involucrados. También es crucial que los rescatistas sean capaces de reconocer sus límites y trabajar en equipo para asegurar una respuesta coordinada y efectiva.

        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/20.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La capacitación de las brigadas de emergencia en estas áreas claves, no solo mejora su capacidad de respuesta ante situaciones críticas, sino que también incrementa la seguridad de las víctimas y del propio equipo de rescate.


    p(data-aos="fade-left").mb-4 La inversión en formación continua y actualizada es esencial para mantener la eficacia y la preparación de estos equipos, garantizando así una respuesta rápida y adecuada ante cualquier emergencia.


    h2.mb-4(data-aos="fade-left") Gestión de riesgos y evaluación de amenazas

    p(data-aos="fade-left").mb-4 La gestión de riesgos es un proceso sistemático que permite identificar, evaluar y priorizar riesgos, seguido de la aplicación de recursos para minimizar, controlar y monitorear la probabilidad y el impacto de eventos adversos. Para ello, las brigadas de emergencia deben ser formadas en:

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.align-items-start.mb-5
          .col-lg-8

            AcordionA(tipo="b")
              .div(titulo="Identificación y análisis de riesgos potenciales en el entorno")
                p Esto implica un estudio detallado de los antecedentes geográficos, climáticos y sociales de la zona. La capacitación debe incluir métodos para identificar peligros como inundaciones, terremotos, incendios forestales, así como amenazas causadas por la actividad humana, como accidentes industriales o ataques terroristas.

              .div(titulo="Evaluación de daños en el área afectada")
                p Los miembros de la brigada deben aprender a realizar evaluaciones rápidas y precisas de los daños materiales y humanos. Esto incluye la utilización de herramientas y tecnologías adecuadas para medir el impacto y determinar las necesidades inmediatas de ayuda.

              .div(titulo="Aplicación de protocolos de seguridad en situaciones de riesgo")
                p Es esencial que los brigadistas estén entrenados en la manipulación segura de materiales peligrosos, incluyendo sustancias químicas, biológicas, radiológicas y nucleares. Esto asegura que puedan operar de manera segura y efectiva en entornos que presentan estos riesgos.

              .div(titulo="Capacitación en la identificación de peligros naturales y tecnológicos")
                p Los brigadistas deben recibir formación sobre cómo reconocer y responder a amenazas tanto naturales (como inundaciones, sismos) como tecnológicas (fallos de infraestructura, contaminación). Esto incluye el uso de mapas de riesgo y sistemas de alerta temprana.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1/21.png", alt="").mb-4.mb-lg-0

        h2.mb-4(data-aos="fade-left") Comunicación y coordinación en emergencias

        p(data-aos="fade-left").mb-4 La comunicación efectiva es una de las piedras angulares de la respuesta a emergencias. Durante una crisis, la información precisa y oportuna puede marcar la diferencia entre la vida y la muerte. Por ello, la capacitación en este ámbito debe abarcar varios aspectos cruciales:


        h4.mb-4(data-aos="fade-left") a. Uso de sistemas de comunicación en emergencias

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/22.svg"
                alt="Barreras"
                style="width: 90px"
              )
              h5.mb-2.text-center Radios y dispositivos de comunicación
              p.mb-0.text-center Los miembros de las brigadas deben familiarizarse con el uso de radios bidireccionales, que son esenciales para mantener el contacto en áreas donde las redes de telefonía pueden estar caídas o saturadas.

          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/23.svg"
                alt="Información"
                style="width: 90px"
              )
              h5.mb-2.text-center Comunicación por satélite
              p.mb-0.text-center Es fundamental que conozcan el uso de dispositivos de comunicación por satélite, que pueden ser utilizados para establecer contacto en situaciones donde las infraestructuras convencionales han sido destruidas.

          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/24.svg"
                alt="Producto"
                style="width: 90px"
              )
              h5.mb-2.text-center Redes de datos
              p.mb-0.text-center La capacitación debe incluir el uso de aplicaciones y plataformas digitales que permitan la comunicación y el intercambio de información en tiempo real, facilitando la coordinación entre diferentes equipos de respuesta.

    .bg-full-width.bg-fondo-3.mb-5
      .px-4.px-md-5.pb-md-3
        h4.mb-4(data-aos="fade-left") b. Coordinación con otras brigadas y autoridades:

        TabsC.color-primario.mb-5
          .tabs-content.border.px-4.p-md-5.py-3(titulo="Interoperabilidad" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
            .row
              .col-md-6.col-lg-5.col-xl-4.order-1
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/tab-1-2.png', alt='')
              .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
                h4 Interoperabilidad
                p Las brigadas de emergencia deben entrenarse en procedimientos de interoperabilidad para trabajar eficazmente con otras unidades de respuesta, como la policía, los servicios médicos de emergencia y las fuerzas armadas. Esto incluye comprender los roles y responsabilidades de cada entidad durante una crisis.
            

          .tabs-content.border.px-4.p-md-5.py-3(titulo="Establecimiento de protocolos de coordinación" :icon="require('@/assets/bullets/icon-tab-c-2.svg')" )
            .row
              .col-md-6.col-lg-5.col-xl-4.order-1
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/tab-2-2.png', alt='')
              .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
                h4 Establecimiento de protocolos de coordinación
                p Se deben desarrollar y practicar protocolos claros que definan cómo se llevará a cabo la coordinación entre diferentes agencias, asegurando que la información fluya de manera eficiente y que se tomen decisiones rápidas y fundamentadas.
            
        h4.mb-4(data-aos="fade-left") c. Protocolos de información y toma de decisiones en situaciones de crisis:
        
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card-2__image(src="@/assets/curso/tema1/25.png" alt="")
              .custom-image-card-2__text.p-4
                h5.mb-2.text-center Evaluación de situaciones
                p.mb-0 Los miembros de las brigadas deben ser entrenados en la evaluación rápida y precisa de las situaciones de emergencia para poder formular planes de acción adecuados.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card-2__image(src="@/assets/curso/tema1/26.png" alt="")
              .custom-image-card-2__text.p-4
                h5.mb-2.text-center Toma de decisiones bajo presión
                p.mb-0 La capacitación debe incluir simulaciones y ejercicios que permitan a los brigadistas practicar la toma de decisiones críticas en un entorno de alta presión e incertidumbre.


    h2.mb-4(data-aos="fade-left") Psicología de emergencias
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") La psicología de emergencias, es un campo especializado que se centra en las reacciones humanas ante situaciones de crisis y desastres. La formación en esta área es esencial para que los miembros de las brigadas de emergencia puedan comprender y gestionar las respuestas emocionales de las personas afectadas, así como las suyas propias en situaciones de alta presión.

        h4.mb-4(data-aos="fade-left") a. Manejo del estrés y apoyo emocional

        p(data-aos="fade-left") Una de las primeras áreas de enfoque debe ser el manejo del estrés, tanto en las víctimas como en los rescatistas. La exposición a situaciones traumáticas puede desencadenar respuestas intensas de estrés y ansiedad. Por lo tanto, es crucial que los miembros de las brigadas aprendan técnicas de autocuidado y manejo del estrés, para mantener su bienestar emocional. Esto incluye:
        
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/27.png", data-aos="zoom-in").mb-4.mb-lg-0


    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/28.png", alt="").mb-4.mb-lg-0
      .col-lg-8

        AcordionA(tipo="b")
          .div(titulo="Técnicas de relajación")
            p Prácticas como la respiración profunda, la meditación y el mindfulness pueden ayudar a reducir la ansiedad y mejorar la concentración durante las operaciones de rescate.

          .div(titulo="Gestión de equipos")
            p El liderazgo en situaciones de emergencia implica reconocer las señales de agotamiento emocional en el equipo, fomentando un ambiente de apoyo mutuo y comunicación abierta.

    .bg-full-width-2.bg-fondo-5.mb-5
      .px-4.px-md-5.pb-md-3
        h4.mb-4(data-aos="fade-left") b. Técnicas de apoyo psicológico

        p(data-aos="fade-left").mb-4 Los brigadistas deben estar equipados con técnicas de apoyo psicológico que les permitan brindar asistencia efectiva a las personas afectadas. Esto incluye:

        .row.align-items-start.mb-5
          .col-lg-8

            AcordionA(tipo="b")
              .div(titulo="Primera intervención psicológica")
                p Formar a los brigadistas en cómo proporcionar un primer apoyo psicológico puede ayudar a estabilizar a las personas afectadas, ofreciéndoles un espacio seguro para expresar sus emociones.

              .div(titulo="Escucha activa")
                p La habilidad de escuchar de manera empática y validar las emociones de los afectados puede ser crucial para su recuperación inicial.
          .col-lg-4
            figure
              img(src="@/assets/curso/tema1/29.png", alt="").mb-4.mb-lg-0

        h4.mb-4(data-aos="fade-left") b. Técnicas de apoyo psicológico

        p(data-aos="fade-left").mb-4 Los brigadistas deben estar equipados con técnicas de apoyo psicológico que les permitan brindar asistencia efectiva a las personas afectadas. Esto incluye:

        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-6.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card-2__image(src="@/assets/curso/tema1/30.png" alt="")
              .custom-image-card-2__text.p-4
                h5.mb-2.text-center Intervenciones breves
                p.mb-0 Técnicas que pueden ser aplicadas en el lugar del incidente para ayudar a las personas a recuperar el equilibrio emocional.
          .col-lg-6.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card-2__image(src="@/assets/curso/tema1/31.png" alt="")
              .custom-image-card-2__text.p-4
                h5.mb-2.text-center Educación sobre la normalidad de las reacciones
                p.mb-0 Informar a las víctimas que sus reacciones son respuestas naturales a eventos traumáticos puede ayudar a reducir la angustia y la confusión.

        p(data-aos="fade-left").mb-4 Finalmente, los brigadistas se adoptan como integrantes del equipo de seguridad y salud en el trabajo de las compañías, ante lo cual deben ser formados en:


    h2.mb-4(data-aos="fade-left") Salud y seguridad en el trabajo
    .row.align-items-start.mb-5
      .col-lg-8

        AcordionA(tipo="b")
          .div(titulo="Normas de seguridad para los brigadistas durante las operaciones")
            p La seguridad de los brigadistas es primordial, dado que su trabajo a menudo los expone a situaciones de alto riesgo. Es fundamental que estén familiarizados con las normas de seguridad que rigen su actividad, las cuales deben incluir directrices claras sobre cómo actuar en diferentes escenarios de emergencia. Esto implica conocer las leyes y regulaciones locales e internacionales que regulan la seguridad en el trabajo, así como los procedimientos específicos de la organización a la que pertenecen.

          .div(titulo="Manejo de situaciones de riesgo para el personal de la brigada")
            p No solo se necesita formación para actuar en emergencias, sino también para identificar y evaluar los riesgos potenciales que pueden afectar a los miembros de la brigada. Los brigadistas deben aprender a realizar evaluaciones de riesgo antes de iniciar cualquier operación, lo cual incluye la identificación de peligros en el entorno, la evaluación del estado de los equipos, y la consideración de factores como el clima y la geografía. Además, deben estar capacitados para desarrollar planes de contingencia que minimicen el riesgo durante la ejecución de sus tareas.
          
          .div(titulo="Equipos de Protección Personal (EPP) y su uso adecuado")
            p El uso adecuado de los Equipos de Protección Personal es un componente crucial de la capacitación de las brigadas. Esto incluye no solo el conocimiento sobre qué equipo es necesario para cada tipo de operación (casco, guantes, gafas de seguridad, trajes especiales, etc.), sino también cómo elegir, usar, mantener y almacenar correctamente dicho equipo. La formación debe abarcar también la importancia de la ergonomía y el bienestar del brigadista, promoviendo la salud física y mental en situaciones de estrés.

          .div(titulo="Protocolos de prevención de accidentes y enfermedades laborales")
            p Durante Intervenciones La capacitación en prevención es esencial para reducir la incidencia de accidentes y enfermedades laborales. Esto incluye el desarrollo de protocolos de actuación contra el agotamiento o estrés. Además, deben conocer los procedimientos de evacuación y priorizar la salud y seguridad del personal en el lugar de trabajo. Los brigadistas deben ser entrenados en técnicas de primeros auxilios, manejo de sustancias peligrosas, y en la identificación de signos de rescate en caso que su propia seguridad se vea comprometida.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/32.png", alt="").mb-4.mb-lg-0

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://gaia.gobiernobogota.gov.co/sites/default/files/documentos/sig/documentos/rol-brigadista.pdf" target="_blank" rel="noopener noreferrer") Gómez, E. P. G. (s/f). Rol del brigadista de emergencia y su certificación en la Secretaría Distrital de Gobierno.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=fv8aB0iqz6w" target="_blank" rel="noopener noreferrer") Johanita Meneses. (2017, 7 marzo). BRIGADA DE EMERGENCIA

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
