<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Marco conceptual y normativo'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 En el contexto colombiano, la gestión de emergencias y desastres se ha vuelto un tema de vital importancia, dado que el país es propenso a fenómenos naturales como terremotos, inundaciones y deslizamientos, así como a situaciones de emergencia de origen antrópico. Para hacer frente a estas eventualidades, se han establecido brigadas de emergencia que desempeñan un papel crucial en la prevención, atención y recuperación ante desastres.
        p(data-aos="fade-left").mb-4 El marco conceptual que sustenta la creación y funcionamiento de estas brigadas, se basa en principios de preparación, respuesta y resiliencia, promoviendo una cultura de autoprotección y solidaridad comunitaria. Las brigadas están conformadas por grupos de personas capacitadas para actuar de manera rápida y efectiva ante situaciones de riesgo, con el fin de minimizar el impacto en la vida y los bienes de la población.
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Desde el punto de vista normativo, Colombia cuenta con una serie de leyes, decretos y directrices, #[b que regulan] la organización y operación de las brigadas de emergencia. La Ley 1523 del 2012, por ejemplo, establece el Sistema Nacional de Gestión del Riesgo de Desastres (SNGRD), que articula las acciones de prevención, atención y recuperación a nivel nacional, departamental y local. 


      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")


    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")

      .col-lg-8
        
        p(data-aos="fade-left").mb-4 Además, se han promulgado estándares y protocolos que guían la formación y el funcionamiento de estas brigadas, asegurando que actúen de acuerdo  con las mejores prácticas y en coordinación con las autoridades competentes.

        
        .bg-color-2.p-4(data-aos="fade-left")
          p.mb-0  Este marco conceptual y normativo, se presenta como una herramienta fundamental para fortalecer la capacidad de respuesta ante emergencias, promoviendo la colaboración entre el Estado, la comunidad y otros actores sociales. A través de la capacitación y la organización de brigadas de emergencia, se busca no solo proteger a la población en situaciones críticas, sino también fomentar una cultura de prevención y autocuidado que contribuya a la construcción de un país más resiliente. 

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              span Vergara, K. A. F., Arrieta, J. C., Mariano, L. E. M., & De la Hoz Lara, R. (2019). ANÁLISIS DEL NIVEL DE CUMPLIMIENTO DE LA LEGISLACIÓN CONTRA INCENDIO EN LAS GRANDES EMPRESAS DE TIPO INDUSTRIAL DEL MUNICIPIO DE SOLEDAD, ATLÁNTICO. Encuentro Internacional de Educación en Ingeniería


            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/jk8x2vtGICk?si=AuTPPV9WYis0GT80" target="_blank" rel="noopener noreferrer") URCapacitaciones. (23 feb 2021) UR Capacitaciones Normatividad Bomberil

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
