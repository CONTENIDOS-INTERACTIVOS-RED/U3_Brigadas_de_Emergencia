<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Identificación de los tipos de brigadas de emergencia'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      .row.mb-5
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema4/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El #[b concepto de brigada] se puede simplificar y definir, como grupos de personas organizadas y capacitadas para emergencias, en donde ellas mismas son responsables de combatirlas de manera preventiva, o intervenir ante eventos de alto riesgo, siniestro o desastres, en instituciones educativas, empresas, industrias y cuya función está orientada a salvaguardar a las personas, sus bienes y el entorno de estos (Torres Nieto, 2012). 

          p(data-aos="fade-left").mb-4 La brigada de emergencia constituye un componente fundamental en la gestión de la seguridad y salud ocupacional de cualquier organización, ya sea pública o privada. Este grupo está conformado por un conjunto de trabajadores, servidores públicos, trabajadores del sector privado y contratistas, quienes comparten un compromiso común: la salvaguarda de la integridad física y emocional de sus compañeros de trabajo, así como la protección del entorno laboral.

          p(data-aos="fade-left") #[b Conozcamos algunos aspectos importantes:]  

        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")


      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white(data-aos="zoom-in")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-1.png")
              .col-lg-7
                h5 Capacitación continua
                p La capacitación continua es uno de los pilares sobre los que se sostiene la efectividad de una brigada de emergencia. Los miembros de la brigada reciben formación específica en diversos aspectos relacionados con la prevención de riesgos, la gestión de emergencias, el uso de Equipos de Protección Ppersonal (EPP ) y la aplicación de protocolos de evacuación y rescate, entre otros. Esta preparación les permite identificar, evaluar y clasificar las condiciones de riesgo presentes en su entorno, lo que resulta vital para implementar medidas proactivas, que minimicen la posibilidad de incidentes.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-2.png")
              .col-lg-7
                h5 Organización de la brigada de emergencia
                p La organización de la brigada de emergencia, se traduce en la creación de roles y responsabilidades claramente definidas dentro del grupo. Esto no solo potencia la respuesta ante situaciones críticas, sino que también fomenta un sentido de pertenencia y de trabajo en equipo entre sus miembros. Cada integrante juega un papel clave en la cadena de mando y en la ejecución de los planes de acción establecidos, lo que facilita una reacción coordinada y eficiente durante una emergencia.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-3.png")
              .col-lg-7
                h5 Capacidad de control y respuesta
                p La capacidad de control y respuesta ante situaciones de riesgo, es otro aspecto esencial del funcionamiento de una brigada de emergencia. En el caso de eventos inesperados, como incendios, derrames químicos, desastres naturales o accidentes laborales, la brigada actúa de manera rápida y efectiva. Su intervención puede marcar la diferencia en la minimización de daños materiales y en la protección de vidas humanas.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-4.png")
              .col-lg-7
                h5 Cultura de prevención y seguridad
                p El impacto de las brigadas de emergencia trasciende el ámbito inmediato de la organización. Al fomentar una cultura de prevención y seguridad, contribuyen a la concientización general de los funcionarios, los beneficios y ventajas que tiene la brigada. Esto no solo beneficia a los trabajadores, sino que también mejora la productividad y la reputación de la organización, al evidenciar su compromiso con el bienestar de sus empleados y el cumplimiento de normativas de seguridad.

      #t_4_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.1] Brigada de evacuación   

      
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")

        .col-lg-8
          p(data-aos="fade-left").mb-4  Para abordar la importancia de esta brigada, debemos conocer el concepto debido a que estas brigadas tienen como finalidad desalojar a las personas de zonas de riesgo a una zona segura, en el menor tiempo posible. Deben conocer las vías de evacuación y vigilar que ninguna persona se devuelva al sitio de riesgo (Torres Nieto, 2012).

          .bg-color-3.p-4(data-aos="fade-left")
            p.mb-0  La brigada de evacuación, está integrada por brigadistas cuya principal función es garantizar la seguridad de los funcionarios y visitantes mediante la orientación y el traslado a un lugar seguro o al punto de encuentro previamente establecido durante una emergencia. Este equipo juega un papel crucial en la protección del personal y en la implementación efectiva de las medidas de evacuación en situaciones de riesgo.
          

      p(data-aos="fade-left")  #[b Para la brigada de evacuación, daremos un repaso de sus principales funciones:]

      .bg-full-width.bg-fondo-2
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.mb-5

            .col-lg-4
              figure
                img(src="@/assets/curso/tema4/4.png", alt="")

            .col-lg-8

              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema4/icon-1.svg", alt="AvatarTop", style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Familiarización con el plan de emergencias
                  p.text-center Cada brigadista debe estar bien informado sobre el plan de emergencias que corresponde a su lugar de trabajo.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema4/icon-2.svg", alt="AvatarTop", style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Mantenimiento de la señalización
                  p.text-center Los brigadistas son responsables de verificar que toda la señalización de emergencia dentro de la sede, esté visible y en buen estado. Esto incluye la revisión de extintores, botiquines y gabinetes de seguridad, confirmando que estén accesibles y funcionales.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema4/icon-3.svg", alt="AvatarTop", style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Censo actualizado
                  p.text-center Es fundamental que la Brigada mantenga un registro actualizado y continuo de todos los empleados y contratistas presentes en la sede. Esto facilita la contabilización de personal durante una evacuación.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema4/icon-4.svg", alt="AvatarTop", style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Despeje de rutas de evacuación
                  p.text-center Los brigadistas tienen la tarea de observar y asegurar que las rutas de evacuación permanezcan desobstruidas y libres de cualquier peligro que pueda poner en riesgo a las personas durante una emergencia.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema4/icon-5.svg", alt="AvatarTop", style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Emisión de señales de evacuación
                  p.text-center Deben estar preparados para activar la señal de evacuación en el momento que la situación lo requiera, siguiendo estrictamente las pautas adquiridas en los entrenamientos de evacuación.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema4/icon-6.svg", alt="AvatarTop", style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Coordinación de simulacros
                  p.text-center La Brigada organiza y coordina simulacros de evacuación que simulan escenarios reales, donde la evacuación sea necesaria, permitiendo a todos los presentes familiarizarse con los procedimientos.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema4/icon-7.svg", alt="AvatarTop", style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Colaboración en emergencias
                  p.text-center En situaciones de emergencia, los brigadistas deben actuar en coordinación con otros miembros del equipo operativo, asegurando una respuesta cohesiva y efectiva.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema4/icon-8.svg", alt="AvatarTop", style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Organización y supervisión del desplazamiento
                  p.text-center Durante la evacuación, la Brigada es responsable de dirigir y organizar a las personas hacia el punto de encuentro, asegurándose de que nadie quede atrás en su área de competencia.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema4/icon-9.svg", alt="AvatarTop", style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Atención a capacidades diferenciales
                  p.text-center Es vital que los brigadistas identifiquen y conozcan a los trabajadores que presenten capacidades diferenciales, para proporcionarles la asistencia necesaria y garantizar una salida segura durante una evacuación.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema4/icon-10.svg", alt="AvatarTop", style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Identificación de rutas alternativas
                  p.text-center En el caso que la ruta de evacuación previamente planificada, esté bloqueada o represente un peligro, los brigadistas deben tener la capacidad de indicar rutas alternativas seguras a las personas.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema4/icon-11.svg", alt="AvatarTop", style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Censo al punto de encuentro
                  p.text-center Al llegar al punto de encuentro designado, es responsabilidad de la Brigada realizar un conteo de las personas para asegurar que todos han salido de manera segura.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema4/icon-12.svg", alt="AvatarTop", style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Coordinación para el regreso
                  p.text-center Una vez superada la emergencia o en el contexto de simulacros, los brigadistas deben coordinar el regreso de los trabajadores a las instalaciones, asegurando que no haya riesgos latentes.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema4/icon-13.svg", alt="AvatarTop", style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Capacitación continua
                  p.text-center Los miembros de la Brigada deben mantenerse actualizados en sus conocimientos y habilidades, participando en el proceso de capacitación regular para brigadistas, lo que les permitirá actuar con eficacia y confianza en situaciones de emergencia.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src="@/assets/curso/tema4/icon-14.svg", alt="AvatarTop", style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Comunicación con la dirección
                  p.text-center Finalmente, es crucial que los brigadistas informen sobre las actividades realizadas y el estado de los procedimientos al jefe de la brigada de su entidad, contribuyendo a la mejora continua del plan de evacuación y seguridad.


      .bg-full-width.bg-color-2.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La brigada de evacuación es un componente esencial en el plan de seguridad de una institución, porque también promueve la cultura de prevención y cuidado dentro del entorno laboral. Su labor es fundamental para asegurar que todos los trabajadores y visitantes puedan actuar con rapidez y seguridad ante cualquier eventualidad.


      #t_4_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.2] Brigada de primeros auxilios


      .row.mb-5
        .col-lg-8
                      
          p(data-aos="ßfade-left").mb-4 Abordaremos un concepto muy importante sobre esta brigada, puesto que como lo indica Torres Nieto (2012), tienen como finalidad atender y estabilizar víctimas en el sitio de la emergencia, solicitar ayuda especializada y remitir a los centros asistenciales si es necesario. Mantener el botiquín de primeros auxilios en un lugar visible y al alcance de los brigadistas. 

          .bg-color-4.px-4.py-4(data-aos="fade-left").mb-4
            p.mb-0 La Brigada de primeros auxilios, está compuesta por un grupo de brigadistas capacitados para intervenir en situaciones de emergencia. Su principal responsabilidad es la de estabilizar a los pacientes lesionados o incrédulos, de modo que se minimicen las complicaciones hasta que puedan ser trasladados a un centro de atención médica adecuado.

        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema4/6.png", data-aos="zoom-in").mt-4.mt-lg-0

      p(data-aos="fade-left").mb-4  Esta brigada es tan fundamental, que amerita que describamos algunas de sus funciones principales:

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white(data-aos="zoom-in")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-1-2.png")
              .col-lg-7
                h5 Convocatoria y organización en emergencias
                p En caso de una emergencia, los brigadistas deberán convocar de inmediato a todos los miembros de la brigada y sus colaboradores a un punto específico previamente designado. Allí, establecerán un puesto de socorro completamente equipado para gestionar la situación de alto riesgo, desastre o siniestro que se presente.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-2-2.png")
              .col-lg-7
                h5 Coordinación en situaciones críticas
                p Durante la emergencia, los brigadistas trabajarán de manera sinérgica con otros integrantes del grupo operativo, asegurando una respuesta efectiva y eficiente en la asistencia a los afectados.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-3-2.png")
              .col-lg-7
                h5 Valoración y atención inmediata
                p Al llegar a la escena, se realizará una valoración inicial o triage básico, que permitirá identificar la gravedad de las lesiones. A partir de esta evaluación, se brindarán cuidados inmediatos y temporales a quienes se encuentren en condiciones críticas, con el objetivo de estabilizarlos y evitar un deterioro adicional de su salud mientras se espera la llegada de asistencia médica especializada.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-4-2.png")
              .col-lg-7
                h5 Aplicación de protocolos de atención
                p Los brigadistas aplicarán rigurosamente los protocolos de atención aprendidos en los cursos de formación, asegurando que cada intervención se lleve a cabo de manera adecuada. Es esencial que actúen junto a sus compañeros y utilicen los dispositivos de comunicación para garantizar un contacto rápido con las líneas de emergencia.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-5-2.png")
              .col-lg-7
                h5 Transición a servicios de emergencia
                p Una vez que el paciente haya recibido la asistencia inicial, será entregado a los equipos de auxilio profesionales para su transporte y cuidado en un centro médico.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-6-2.png")
              .col-lg-7
                h5 Gestión de recursos posterior a la emergencia
                p Una vez superada la crisis, los brigadistas llevarán a cabo un inventario de los equipos utilizados y evaluarán aquellos que necesiten mantenimiento o reposición, así como llevar un control de los medicamentos empleados durante la intervención.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-7-2.png")
              .col-lg-7
                h5 Mantenimiento de materiales de primera necesidad
                p Se encargará de que los botiquines de primeros auxilios estén siempre actualizados, en buen estado y disponibles para su uso inmediato. Igualmente, es crucial que el equipo de dotación personal se mantenga en perfecto estado y en un lugar accesible y seguro.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-8-2.png")
              .col-lg-7
                h5 Actualización continua de conocimientos
                p Los brigadistas deben mantenerse al día con respecto a los conocimientos en primeros auxilios, participando regularmente en procesos de capacitación que fortalezcan sus habilidades y competencias.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-9-2.png")
              .col-lg-7
                h5 Registro de actuaciones
                p Finalmente, es fundamental llevar un registro detallado de las intervenciones realizadas, asegurando que la información se integre y actualice dentro del Sistema de Gestión de Salud y Seguridad en el Trabajo, contribuyendo así a la mejora continua de los procesos de atención.


      .bg-full-width.bg-color-2.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/7.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La Brigada de primeros auxilios juega un papel crucial en la respuesta a emergencias y desastres, ofreciendo cuidados inmediatos y coordinando el traslado de pacientes a servicios médicos, todo ello respaldado por formación y protocolos que aseguran una atención efectiva y profesional. 


      #t_4_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.3] Brigada de prevención y combate de incendios


      .row.mb-5
        .col-lg-8
                      
          .bg-color-4.px-4.py-4(data-aos="fade-left").mb-4
            p.mb-0 Una de las brigadas con mayor relevancia en su accionar y que siempre hemos visto con mayor funcionamiento a nivel mundial, es la Brigada de prevención y combate de incendios; está brigada es un grupo especializado compuesto por personal capacitado y entrenado para actuar de forma rápida y efectiva ante situaciones de incendio, con el objetivo primordial de minimizar daños a la vida humana y a la propiedad. Este equipo juega un papel crucial en la preparación y respuesta a emergencias, trabajando en la prevención de incendios y en la mitigación de sus efectos.

          p(data-aos="ßfade-left").mb-4 #[b Está brigada tiene funciones bastante riesgosas para la integridad de sus integrantes y describiremos sus roles principales en 9 pasos:]

        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema4/8.png", data-aos="zoom-in").mt-4.mt-lg-0

      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/9.png", alt="").mb-4.mb-lg-0
        .col-lg-8

          AcordionA(tipo="b")
            .div(titulo="Inspecciones regulares")
              p Esta brigada es encargada de realizar inspecciones periódicas a los extintores y sistemas de protección contra incendios para asegurar que todos los equipos se encuentren en óptimas condiciones de operación. Esto incluye verificar fechas de vencimiento, condiciones físicas y accesibilidad.

            .div(titulo="Mantenimiento del acceso")
              p Esta brigada debe supervisar que los equipos contra incendio estén debidamente ubicados y que no existan obstáculos que impidan su acceso durante una emergencia. Esta acción es fundamental para garantizar que, en el momento crítico, los recursos estén disponibles y sean de fácil utilización.

            .div(titulo="Identificación de riesgos")
              p Esta brigada debe reconocer potenciales riesgos asociados a situaciones de emergencia. Esto incluye la identificación de áreas vulnerables y la evaluación del ambiente de trabajo, según los estándares establecidos durante las formaciones.

            .div(titulo="Conocimiento de equipos de extinción")
              p Es esencial que los miembros de la brigada conozcan a fondo el funcionamiento y uso adecuado de los diferentes equipos de extinción disponibles, ajustándose al tipo de fuego que puedan enfrentar, ya sea eléctrico, químico o de otro tipo, siguiendo las directrices proporcionadas en su formación.

            .div(titulo="Operación de equipos")
              p En caso de emergencia, el equipo actuará conforme a los protocolos definidos por el organismo encargado de la capacitación. Esto asegura una respuesta organizada y eficaz ante cada situación de riesgo


      .row.align-items-start.mb-5
        .col-lg-8

          AcordionA(tipo="b")
            .div(titulo="Inspección de infraestructura")
              p Esta brigada debe realizar revisiones meticulosas para identificar sobrecargas en las líneas eléctricas y evitar la acumulación de materiales inflamables en los espacios de trabajo, reduciendo así el riesgo de incendios accidentales.

            .div(titulo="Coordinación en emergencias")
              p Durante cualquier emergencia, se prioriza la colaboración y coordinación entre los integrantes de la brigada y otros grupos operativos. Esta sinergia es vital para maximizar la eficacia de la respuesta.

            .div(titulo="Comunicación con servicios de emergencia")
              p En situaciones de peligro, la brigada de comunicación tiene la responsabilidad de notificar a los bomberos y otros cuerpos de emergencia sobre el siniestro, así como de detallar las acciones que ya se han realizado para abordar el incendio.

            .div(titulo="Reportes y seguimiento")
              p Después de una intervención, el líder de la brigada debe estar informado sobre todas las acciones llevadas a cabo, asegurando que se mantenga un registro adecuado que permita evaluar la respuesta y mejorar continuamente los protocolos de actuación ante incidentes futuros.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/10.png", alt="").mb-4.mb-lg-0


      .bg-full-width.bg-color-2.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Es importante resaltar que la brigada de prevención y combate de incendios, no solo actúa en la extinción de fuegos, sino que también desempeña un papel vital en la prevención y minimización de riesgos asociados a incendios, garantizando un ambiente laboral seguro. 


      #t_4_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.4] Brigada de comunicación

      .row.mb-5
        .col-lg-8
                      
          .bg-color-5.px-4.py-4(data-aos="fade-left").mb-4
            p.mb-0 La Brigada de Comunicación tiene la misión fundamental de garantizar que toda la información relacionada con situaciones de emergencia sea comunicada de manera efectiva y precisa dentro de la empresa. Su objetivo principal es concientizar a los trabajadores sobre los distintos riesgos y emergencias que pueden surgir en el entorno laboral, lo que les permitirá identificar y poner en práctica las medidas preventivas necesarias para resguardarse. En un entorno donde la seguridad y la salud son primordiales, esta brigada juega un papel crucial en la promoción de una cultura de prevención y preparación para emergencias.

          p(data-aos="ßfade-left").mb-4 #[b Los invito a que profundicemos acerca de las principales funciones:]

        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema4/12.png", data-aos="zoom-in").mt-4.mt-lg-0

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white(data-aos="zoom-in")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-1-3.png")
              .col-lg-7
                h5 Establecimiento de canales de comunicación
                p La brigada debe elaborar y mantener un listado actualizado de los números telefónicos de los órganos de auxilio y socorro que operan en la región donde se ubica la empresa. Además, es esencial que esta información sea comunicada a todos los trabajadores para que estén familiarizados con los contactos de emergencia disponibles.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-2-3.png")
              .col-lg-7
                h5 Gestión de emergencias
                p En caso que se presente una situación de alto riesgo, emergencia, siniestro o desastre, la Brigada de comunicación tiene la responsabilidad de realizar las llamadas necesarias a los cuerpos de auxilio pertinentes, asegurando así una respuesta rápida y efectiva.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-3-3.png")
              .col-lg-7
                h5 Documentación de emergencias médicas
                p Cuando se produzcan incidentes que requieran atención médica, la brigada deberá registrar la información relevante en el formato que adopte el Sistema de Gestión de Seguridad y Salud en el Trabajo. Esto incluye el número de ambulancia solicitada, el nombre del responsable de la atención, la dependencia involucrada y la ubicación a la que será trasladado el paciente. También es su deber notificar a los familiares sobre la situación del afectado.


            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-4-3.png")
              .col-lg-7
                h5 Coordinación de información
                p La Brigada de comunicación es responsable de recopilar y distribuir información sobre las circunstancias de cada incidente al Jefe de Brigada y a los responsables de la alta dirección que están involucrados en el Sistema de Comando de Incidentes (SCI). Esta acción es esencial para una correcta coordinación y toma de decisiones durante emergencias.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-5-3.png")
              .col-lg-7
                h5 Protocolos de amenazas
                p Se debe contar con un formato específico para responder a amenazas de explosión (bomba), tal como lo dictan las normas establecidas por el Sistema de Gestión de Seguridad y Salud en el Trabajo. Este proceder garantiza que, en caso de recibir una amenaza, la respuesta sea rápida y organizada.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-6-3.png")
              .col-lg-7
                h5 Mantenimiento de equipos de comunicación
                p La brigada es responsable de la supervisión y mantenimiento de los equipos de comunicación que se les proporciona. Esto implica mantener la carga de los dispositivos y asegurar su correcto funcionamiento, siguiendo las directrices aprendidas durante el entrenamiento previsto para este propósito.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-7-3.png")
              .col-lg-7
                h5 Capacitación y difusión
                p La brigada llevará a cabo actividades de difundir información entre los trabajadores de la sede acerca de sus funciones y la importancia de la preparación ante emergencias. Esto incluye la identificación de los integrantes de la brigada, la localización de los equipos de protección, las rutas de evacuación y las normas de conducta a seguir en situaciones críticas. La creación de una cultura de prevención es un objetivo clave.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema4/slider-8-3.png")
              .col-lg-7
                h5 Evaluación y reporte
                p Tras cada simulacro o situación real de emergencia, es obligatorio que la brigada emita un informe sobre los resultados obtenidos. Este procedimiento se dirige a mantener el Sistema de Gestión de Seguridad y Salud en el Trabajo actualizado y a mejorar continuamente las capacidades de respuesta de la organización.


      .bg-full-width.bg-color-2.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 A través de estas funciones, la Brigada de comunicación, no solo actúa como un nexo vital en la cadena de respuesta ante emergencias, sino que también promueve un ambiente laboral más seguro y cohesionado, contribuyendo al bienestar integral de todos los trabajadores.

      #t_4_5.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.5] Brigada de búsqueda y rescate

      .row.mb-5
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema4/14.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En la actualidad, las brigadas anteriormente mencionadas, son las más comunes; sin embargo, quisiera invitarlos a que revisemos una brigada poco mencionada, pero de gran relevancia en la gestión de emergencias. Si bien es cierto, pocas empresas la tienen conformada, vale la pena enmarcar su funcionamiento y sus roles. 

          p(data-aos="fade-left").mb-4 La Brigada de búsqueda y rescate, tiene como misión primordial asegurar la identificación y recuperación eficiente de personas en situaciones de emergencia, garantizando su bienestar y seguridad dentro de las empresas. Su objetivo principal es preparar a los trabajadores para actuar de manera rápida y efectiva durante situaciones de emergencia, lo que incluye la capacitación en técnicas de rescate. En un entorno donde el tiempo y la precisión son vitales, esta brigada desempeña un papel esencial en la protección de vidas y la mejora de la respuesta ante crisis.

          p(data-aos="fade-left") #[b Los invito a profundizar sobre sus funciones principales:]  

        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/15.png", data-aos="zoom-in")


      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/16.png", alt="").mb-4.mb-lg-0
        .col-lg-8


          AcordionA(tipo="b")
            .div(titulo="Establecimiento de protocolo de búsqueda")
              p La brigada debe desarrollar y mantener un protocolo claro para la búsqueda y localización de personas desaparecidas o atrapadas en situaciones de emergencia. Esta información debe ser accesible para todos los integrantes de la brigada, así como para el personal involucrado en las operaciones de rescate.

            .div(titulo="Entrenamiento de rescate")
              p La Brigada de búsqueda y rescate se encargará de realizar entrenamientos regulares para todos los miembros, asegurando que estén actualizados en técnicas de rescate, uso de herramientas especiales, y atención básica de emergencias. Esto incluye simulacros para preparar a los trabajadores para distintas eventualidades.

            .div(titulo="Coordinación de rescate")
              p La brigada será responsable de coordinarse con otros equipos de emergencia, incluyendo cuerpos de bomberos, policía y servicios médicos. Esta colaboración es fundamental para garantizar una respuesta unificada y eficiente, así como para facilitar la logística en las operaciones de rescate.

            .div(titulo="Equipamiento de rescate")
              p La brigada debe llevar a cabo el mantenimiento y supervisión de todos los equipos de rescate necesarios. Esto incluye revisar y mantener en óptimas condiciones herramientas de búsqueda, sistemas de comunicación y cualquier otro dispositivo que pueda ser utilizado en situaciones de emergencia.

            .div(titulo="Creación de sensibilización")
              p La brigada organizará campañas de sensibilización entre los trabajadores de la sede para informar sobre la importancia del rescate en situaciones críticas. Esto incluye la identificación de recursos disponibles, la importancia de la comunicación efectiva y cómo colaborar con la brigada en un evento de emergencia.

            .div(titulo="Evaluación y mejora continua")
              p Después de cada ejercicio de rescate o incidente real, la brigada deberá elaborar un informe que evalúe la eficacia de la respuesta, identificando áreas de mejora. Esta práctica no solo ayuda a optimizar los procesos, sino también contribuir al fortalecimiento del Sistema de Gestión de Seguridad y Salud en el Trabajo.

      .bg-full-width.bg-color-2
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/17.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La comprensión y clasificación de los diferentes tipos de brigadas de emergencia es fundamental para asegurar una respuesta efectiva y coordinada ante situaciones de crisis.

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Conceptos básicos de las brigadas de emergencia',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes elementos NO es parte de una brigada de emergencia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Extintores',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Equipos de comunicación',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Botiquín de primeros auxilios',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Equipos de entretenimiento',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: 'El SNGRD fue creado mediante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Decreto 1072 de 2015',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Ley 1523 de 2012',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Resolución 2400 de 1979',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ley 9 de 1979',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La función principal de la brigada de primeros auxilios es:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Controlar incendios menores',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Brindar atención inmediata a las víctimas y estabilizarlas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Supervisar las rutas de evacuación',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Gestionar recursos de emergencia',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'La capacitación continua es esencial para mantener la efectividad de una brigada de emergencia.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'La brigada de comunicación se encarga de brindar atención médica en emergencias.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
