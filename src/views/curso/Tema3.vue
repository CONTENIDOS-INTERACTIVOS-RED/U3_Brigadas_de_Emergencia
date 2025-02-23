<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Formatos e instructivos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

        
      .row.mb-5
        .col-lg-7
          p(data-aos="fade-right") Después de abordar todo lo correspondiente a evidencias documentales y procedimientos de brigada de emergencia, se hace necesario realizar un repaso por el uso de formatos e instructivos puesto que es esencial para garantizar la correcta ejecución de los procedimientos y asegurar que cada miembro del equipo siga los protocolos establecidos. Estos documentos sirven para estructurar la información, facilitar la toma de decisiones y mantener un registro detallado de las acciones realizadas durante una emergencia. A continuación, se describen algunos de los formatos e instructivos más comunes utilizados en las brigadas de emergencia:
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in").mb-4.mt-lg-0

      .bg-full-width.bg-fondo-slider
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white(data-aos="zoom-in")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slider-1.png")
              .col-lg-7
                h5 Hoja de vida del brigadista
                p El formato de hoja de vida de un brigadista es un documento que resume la experiencia, habilidades y formación de una persona que se ha capacitado o trabaja en áreas relacionadas con la prevención y atención de emergencias, como brigadas de emergencia, brigadas de salud, entre otras. Este tipo de hoja de vida puede ser utilizada para postularse a trabajos, cursos o programas relacionados con la gestión de riesgos, la seguridad y la atención a desastres.

                a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/HV_Brigadistas.xlsx')" target="_blank")(data-aos="flip-up")
                  .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p <strong>Anexo. </strong> Hoja de vida del brigadista


            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slider-2.png")
              .col-lg-7
                h5 Formato de activación de la brigada
                p Este formato se utiliza cuando se activa la brigada ante una emergencia. Permite documentar el momento en que se recibe la alerta, la identificación del incidente, el equipo de brigada activado y los recursos requeridos. También se incluyen los nombres de los miembros de la brigada que han sido convocados y su disponibilidad.

                p Elementos claves:

                ul.lista-ul
                  li.mb-2
                    i.fas.fa-check-circle
                    | Fecha y hora de activación.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Tipo de emergencia (incendio, accidente, desastre natural, etc.).
                  li.mb-2
                    i.fas.fa-check-circle
                    | Equipo de brigadistas asignados.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Recursos y equipos requeridos.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Acciones inmediatas para tomar.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slider-3.png")
              .col-lg-7
                h5 Informe de la evaluación inicial
                p Este formato se llena al llegar al lugar de la emergencia y se utiliza para documentar la evaluación preliminar de la situación. Sirve para identificar el tipo de emergencia, los riesgos inmediatos, las víctimas y la prioridad de las acciones a tomar. Es fundamental para decidir el despliegue de recursos y equipos.

                p Elementos claves:

                ul.lista-ul
                  li.mb-2
                    i.fas.fa-check-circle
                    | Descripción detallada de la emergencia.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Evaluación de riesgos inmediatos.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Condiciones del entorno (clima, accesibilidad, estructuras afectadas).
                  li.mb-2
                    i.fas.fa-check-circle
                    | Número de víctimas y su estado.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Prioridades de intervención.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slider-4.png")
              .col-lg-7
                h5 Formato de despliegue de equipos y recursos
                p Este formato es utilizado para registrar la asignación de equipos y recursos durante la emergencia. Permite a la brigada llevar un control claro de los recursos que están siendo utilizados, asegurando que todos los materiales y herramientas estén disponibles y operativos en todo momento.

                p Elementos claves:

                ul.lista-ul
                  li.mb-2
                    i.fas.fa-check-circle
                    | Lista de equipos y recursos disponibles.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Asignación de equipos a brigadistas.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Estado de los equipos (operativos o fuera de servicio).
                  li.mb-2
                    i.fas.fa-check-circle
                    | Reposición o solicitud de nuevos recursos si es necesario.

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slider-5.png")
              .col-lg-7
                h5 Acta de conformación de brigada de emergencia
                p El acta de conformación de brigadas de emergencia es un documento oficial que se utiliza para registrar la creación y el establecimiento de una brigada de emergencia en una organización, comunidad o institución. Este tipo de acta es fundamental para formalizar la estructura de la brigada, definir sus objetivos, funciones y responsabilidades, y asegurar que todos los miembros estén al tanto de su participación y compromiso. Este documento es clave, porque dentro de la resolución 0312 del 2019, por el cual se regula los estándares mínimos en seguridad y salud en el trabajo, se encuentra en la lista de chequeo del ministerio de trabajo exigiendo en la empresa con un cumplimiento obligatorio. (Ver anexo)  

                a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Conformacion_de_brigada.docx')" target="_blank")(data-aos="flip-up")
                  .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p <strong>Anexo. </strong> Conformación de brigada

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slider-6.png")
              .col-lg-7
                h5 Acta o formato entrega de dotación de brigada de emergencia
                p El formato de entrega de dotación para una brigada de emergencia es un documento que se utiliza para registrar y formalizar la entrega de equipos, herramientas, uniformes y otros materiales necesarios para el funcionamiento de una brigada de emergencia. Este tipo de brigadas suelen estar compuestas por personal capacitado para responder a situaciones de emergencia, como incendios, desastres naturales o accidentes.

                p Este documento es importante para llevar un control adecuado de los recursos disponibles y garantizar que el personal esté debidamente equipado para enfrentar emergencias de manera efectiva. (Ver anexo)  

                a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Entrega_de_dotacion_de_brigadistas.docx')" target="_blank")(data-aos="flip-up")
                  .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p <strong>Anexo. </strong> Formato entrega de dotación de brigada de emergencia

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slider-7.png")
              .col-lg-7
                h5 Formato para el control de víctimas
                p Este formato se utiliza para llevar un registro de las víctimas durante una emergencia. Permite anotar el estado de cada persona atendida, la naturaleza de las lesiones, el tratamiento recibido y su evacuación, si corresponde. Es importante para garantizar que todas las víctimas sean localizadas, atendidas y evacuadas de manera ordenada.

                p Elementos claves:

                ul.lista-ul
                  li.mb-2
                    i.fas.fa-check-circle
                    | Nombre de la víctima (si es posible).
                  li.mb-2
                    i.fas.fa-check-circle
                    | Descripción de lesiones o condiciones médicas.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Tratamiento inicial administrado.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Tiempo de evacuación o traslado.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Destino de la víctima (hospital, centro de atención, etc.).

            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slider-8.png")
              .col-lg-7
                h5 Instructivo de seguridad para brigadistas
                p Este instructivo contiene las normas y procedimientos de seguridad que deben seguir los miembros de la brigada antes, durante y después de la emergencia. Está diseñado para garantizar que los brigadistas se mantengan protegidos durante la intervención, minimizando riesgos y accidentes.

                p Elementos claves:

                ul.lista-ul
                  li.mb-2
                    i.fas.fa-check-circle
                    | Uso de equipo de protección personal (EPP).
                  li.mb-2
                    i.fas.fa-check-circle
                    | Procedimientos para manejar materiales peligrosos.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Protocolos de comunicación y señalización.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Acciones para seguir en caso de lesiones o accidentes dentro de la brigada.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Procedimientos para evacuar brigadistas en caso de ser necesario.


            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slider-9.png")
              .col-lg-7
                h5 Plan de emergencia
                p Este es un documento clave que describe las estrategias, rutas de evacuación y asignación de responsabilidades en caso de una emergencia. Aunque es un formato que se prepara antes que ocurra una emergencia, es una herramienta activa que guía la intervención y la respuesta ante situaciones críticas.

                p Elementos claves:

                ul.lista-ul
                  li.mb-2
                    i.fas.fa-check-circle
                    | Descripción de los escenarios posibles de emergencia.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Rutas de evacuación y puntos de reunión.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Roles y responsabilidades de cada miembro de la brigada.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Procedimientos de comunicación.
                  li.mb-2
                    i.fas.fa-check-circle
                    | Planes de contingencia para situaciones imprevistas.

      .bg-full-width.bg-color-2
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Aparte de los formatos, actas y evidencias documentales que acabamos de ver, existen otros formatos que se pueden adaptar al funcionamiento de la brigada, todo dependerá del manejo que se le brinde desde el Sistema de gestión de seguridad y salud en el trabajo de cada compañía.
      
      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>
            
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/51925" target="_blank" rel="noopener noreferrer") San Jaime, A. (2011). Actuaciones básicas en emergencias, evacuación y autoprotección: cómo actuar ante situaciones de emergencia y entender los planes de autoprotección: ( ed.). Editorial Tébar Flores. 

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=QmnhEV696gs" target="_blank" rel="noopener noreferrer") PREVENCIOSO Compañía Rso s.a. (2021, 15 abril). «Preparación para emergencias en las empresa. Por qué la pandemia no es el único riesgo»

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
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
              '¿Cuál es el primer paso en el diseño de programas de capacitación para brigadas de emergencias?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Establecimiento de objetivos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Evaluación de necesidades',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Implementación de simulacros',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Entrenamiento sobre el terreno',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es el primer paso en cualquier emergencia según los procedimientos de la brigada?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Evaluación inicial de la emergencia',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Ejecución de acciones de rescate',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Activación de la Brigada',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Despliegue de recursos',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'En la evaluación inicial de la emergencia, ¿qué debe identificar la brigada?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El equipo de comunicación',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Los riesgos inmediatos',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'La ubicación de los hospitales',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'La cantidad de recursos disponibles',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de los siguientes procedimientos es esencial para preservar la seguridad de los brigadistas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Despliegue de Recursos',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Coordinación y Comunicación',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Ejecución de las Acciones de Rescate',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Monitoreo y Evaluación Continua',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué se debe hacer durante el monitoreo y evaluación continua?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Reportar la situación a los medios de comunicación',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Verificar que los protocolos se sigan adecuadamente',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Desplegar más recursos sin evaluación',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Evacuar a todas las víctimas',
                esCorrecta: false,
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
