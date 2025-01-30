<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Conceptos básicos de las brigadas de emergencia'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

      p(data-aos="fade-left").mb-4 Para abordar los conceptos básicos de brigadas de emergencia, debemos comprender el marco conceptual en seguridad y salud en el trabajo, porque las brigadas se enmarcan en la estructura general de un sistema de gestión de seguridad y salud en el trabajo, para lo cual brindaremos un repaso de estos conceptos:


      .bg-full-width.bg-color-info
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              ImagenInfografica.color-secundario
                  template(v-slot:imagen)
                    figure
                      img(src="@/assets/curso/tema3/info1.svg", alt="", style="max-width: 967px;").mx-auto

                  .bg-color-white.box-shadow.p-3(x="11%" y="28%" numero="1")
                    h5  Sistema de gestión de seguridad y salud en el trabajo
                    p Consiste en el desarrollo de un proceso lógico y por etapas, basado en la mejora continua; incluye la política, la organización, la planificación, la aplicación, la evaluación, la auditoría y las acciones de mejora, con el objetivo de anticipar, reconocer, evaluar y controlar los riesgos que puedan afectar la seguridad y la salud en el trabajo.

                  .bg-color-white.box-shadow.p-3(x="27%" y="28%" numero="2")
                    h5 Primeros auxilios
                    p Según la OMS, definen primeros auxilios como "cuidados inmediatos, adecuados y provisionales brindados a las personas accidentadas o con enfermedades de aparición súbita antes de la llegada de profesionales especializados o de la respectiva atención en un centro asistencial".

                  .bg-color-white.box-shadow.p-3(x="43%" y="28%" numero="3")
                    h5 Evacuación
                    p Entendido como el conjunto de actividades y procedimientos tendientes a conservar la vida y la integridad física de las personas en el evento de verse afectadas por amenazas naturales y/o antrópicas no intencionales, mediante el traslado hacia una localización segura.

                  .bg-color-white.box-shadow.p-3(x="58.5%" y="28%" numero="4")
                    h5 Peligro
                    p Fuente, situación o acto con potencial de causar daño en la salud de los trabajadores, en los equipos o en las instalaciones.

                  .bg-color-white.box-shadow.p-3(x="74%" y="28%" numero="5")
                    h5 Riesgo
                    p Combinación de la probabilidad que ocurra una o más exposiciones o eventos peligrosos, y la severidad del daño que puede ser causada por estos.

                  .bg-color-white.box-shadow.p-3(x="90%" y="28%" numero="6")
                    h5 Amenaza
                    p Peligro latente para que un evento físico de origen natural, o causado, o inducido por la acción humana de manera accidental, se presente con una severidad suficiente para causar pérdida de vidas, lesiones u otros impactos en la salud, así como daños y pérdidas en los bienes, la infraestructura, los medios de sustento, la prestación de servicios y los recursos ambientales.

                  .bg-color-white.box-shadow.p-3(x="11%" y="80%" numero="7")
                    h5 Urgencia
                    p Cualquier evento que por ser imprevisto, agudo y apremiante requiere de atención médica inmediata y de asistencia especial en una institución hospitalaria, de lo contrario el estado general de salud del asegurado puede deteriorarse, agravarse o llevarle a serias complicaciones y/o secuelas.

                  .bg-color-white.box-shadow.p-3(x="27%" y="80%" numero="8")
                    h5 Emergencia
                    p Alteración del funcionamiento normal que se produce en el ámbito laboral, motivada por causas no habituales y que conlleva un riesgo o daño para las personas, instalaciones, equipos, edificios e incluso el medio ambiente (Conesa Bernal, 2017).

                  .bg-color-white.box-shadow.p-3(x="43%" y="80%" numero="9")
                    h5 Evento catastrófico
                    p Acontecimiento imprevisto y no deseado que altera significativamente el funcionamiento normal de la empresa; implica daños masivos al personal que labora en instalaciones, parálisis total de las actividades de la empresa o una parte de ella y afecta a la cadena productiva, o genera destrucción parcial o total de una instalación.

                  .bg-color-white.box-shadow.p-3(x="58.5%" y="80%" numero="10")
                    h5 Vulnerabilidad
                    p Condiciones en las que se encuentran las personas y los bienes expuestos ante una amenaza. Se relaciona con la incapacidad física, económica, política o social de anticipar, resistir y recuperarse del daño sufrido cuando opera dicha amenaza.

                  .bg-color-white.box-shadow.p-3(x="74%" y="80%" numero="11")
                    h5 Autogestión
                    p Capacidad de controlar nuestro comportamiento, pensamientos y emociones de una manera productiva. Esto significa destacarte en el cumplimiento de responsabilidades personales y profesionales para tu propio beneficio y el de tu equipo.

                  .bg-color-white.box-shadow.p-3(x="90%" y="80%" numero="12")
                    h5 Resiliencia
                    p Capacidad de las personas, las organizaciones, la infraestructura y los ecosistemas de asimilar un impacto negativo y/o de recuperar su funcionalidad.

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://repositorio.konradlorenz.edu.co/handle/001/4123" target="_blank" rel="noopener noreferrer") Ortiz Cruz, D.  (2014).  Brigadas de Emergencia. 

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://open.spotify.com/episode/3kTS1aQ78FbTosY9uAOx6E?si=SUbnP0vQT4SIYTvbhyJCuQ&context=spotify%3Ashow%3A0trLU0ZXJmM6iBTrp8m4A0&t=6" target="_blank" rel="noopener noreferrer") Podcast Spotify. Las brigadas de emergencia 

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>
