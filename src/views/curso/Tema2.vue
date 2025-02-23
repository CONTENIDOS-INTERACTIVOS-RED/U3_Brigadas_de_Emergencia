<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Procedimientos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      p(data-aos="fade-left").mb-4 La adecuada ejecución de procedimientos en situaciones de emergencia es fundamental para minimizar riesgos y salvaguardar vidas.

      .bg-full-width.bg-color-7.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/1.png', alt='')
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Procedimientos  
              p.mb-4(data-aos="fade-right") En el PDF Procedimientos, se describen paso a paso los protocolos que deben seguirse, desde la activación de la brigada hasta la desmovilización y reposición de recursos. Este documento ofrece una guía detallada sobre cómo gestionar cada etapa de una intervención, garantizando una respuesta rápida, eficiente y segura. Además, se abordan aspectos clave como la evaluación continua, la coordinación interinstitucional y la correcta documentación de las acciones realizadas, contribuyendo a mejorar los protocolos y reforzar la capacidad operativa de las brigadas frente a situaciones críticas.


              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Procedimientos 


      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/113233" target="_blank" rel="noopener noreferrer") Conesa Bernal, J. A. (Coord.). (2014). Diseño del plan de emergencia: ( ed.). Editorial ICB. 

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=md4vzFUuHbw" target="_blank" rel="noopener noreferrer") CATP Consultor. (2021, 10 diciembre). COMO SE HACE UN INFORME SIMULACRO DE EVACUACIÓN

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
