<template>
  <section class="mgContainer" id="logros">
    <article class="mgContent">
      <div class="tittle center-center flex-col mb-4">
        <h2>Logros</h2>
        <span class="text-sm">Titulos y certificaciones</span>
      </div>
      <div class="center-center bg-white border rounded-lg h-full shadow-xl p-4">
        <div class="carousel carousel-center">
          <div
            v-for="(item, index) in achievements"
            :id="`logro-${index + 1}`"
            :key="index"
            class="carousel-item w-full center-center"
          >
            <div class="w-full center-center gap-10 md:gap-0 flex-col md:flex-row">
              <img
                :src="item.image"
                class="w-full md:w-[70%] aspect-auto border rounded-lg shadow-md"
                :alt="`Imagen +${item.title}`"
              />
              <div class="w-full between-center flex-col gap-2 md:gap-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  class="text-success"
                >
                  <path
                    fill="currentColor"
                    d="M4.035 15.479A3.976 3.976 0 0 0 4 16c0 2.378 2.138 4.284 4.521 3.964C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.036C17.857 20.284 20 18.378 20 16c0-.173-.012-.347-.035-.521C21.198 14.786 22 13.465 22 12s-.802-2.786-2.035-3.479C19.988 8.347 20 8.173 20 8c0-2.378-2.143-4.288-4.521-3.964C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.036C6.138 3.712 4 5.622 4 8c0 .173.012.347.035.521C2.802 9.214 2 10.535 2 12s.802 2.786 2.035 3.479zm1.442-5.403l1.102-.293l-.434-1.053A1.932 1.932 0 0 1 6 8c0-1.103.897-2 2-2c.247 0 .499.05.73.145l1.054.434l.293-1.102a1.99 1.99 0 0 1 3.846 0l.293 1.102l1.054-.434C15.501 6.05 15.753 6 16 6c1.103 0 2 .897 2 2c0 .247-.05.5-.145.73l-.434 1.053l1.102.293a1.993 1.993 0 0 1 0 3.848l-1.102.293l.434 1.053c.095.23.145.483.145.73c0 1.103-.897 2-2 2c-.247 0-.499-.05-.73-.145l-1.054-.434l-.293 1.102a1.99 1.99 0 0 1-3.846 0l-.293-1.102l-1.054.434A1.935 1.935 0 0 1 8 18c-1.103 0-2-.897-2-2c0-.247.05-.5.145-.73l.434-1.053l-1.102-.293a1.993 1.993 0 0 1 0-3.848z"
                  />
                  <path
                    fill="currentColor"
                    d="m15.742 10.71l-1.408-1.42l-3.331 3.299l-1.296-1.296l-1.414 1.414l2.704 2.704z"
                  />
                </svg>
                <div class="center-center h-auto md:h-full flex-col md:gap-5">
                  <h3 class="max-w-[350px] text-2xl text-center">{{ item.title }}</h3>
                  <div class="text-center">
                    <p class="font-bold text-base">{{ item.university }}</p>
                    <p class="text-sm">{{ item.issued }}</p>
                  </div>
                  <a
                    :href="item.credential"
                    target="_blank"
                    class="btn btn-primary text-lg mt-8 md:mt-14"
                  >
                    Ver
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      class="text-2xl transition-[0.4s]"
                    >
                      <path
                        fill="currentColor"
                        d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full pt-6 gap-2">
        <a
          v-for="index in achievements.length"
          :href="`#logro-${index}`"
          :key="index"
          class="btn btn-xs"
          >{{ index }}</a
        >
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import DP from '../assets/achievements/DesarrolladorProfesional.jpg'
import RJS from '../assets/achievements/ReactJS.jpg'
import JS from '../assets/achievements/JavaScript.jpg'
import OSS from '../assets/achievements/OptimizacionSistemasDeSonido.jpg'
import RX from '../assets/achievements/IzotopeRX.jpg'
import IM from '../assets/achievements/TecnicasIngenierosMonitores.jpg'
import MO from '../assets/achievements/MezclaOnline.jpg'
import GTR from '../assets/achievements/GrabacionProduccionDeGuitarras.jpg'
import MD from '../assets/achievements/MarketingDigital.jpg'
const achievements: any = [
  {
    title: 'Desarrollador Profesional',
    university: 'Digital House',
    issued: 'Marzo - 2023',
    image: DP,
    credential:
      'https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FDesarrolladorProfesional.pdf?alt=media&token=3cd4b8e4-eb61-4cb2-b43f-098e6dd8be94'
  },
  {
    title: 'Curso ReactJS',
    university: 'Coder House',
    issued: 'Enero - 2023',
    image: RJS,
    credential:
      'https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FReactJS.pdf?alt=media&token=73cf3f5e-6a62-4693-a94e-53d452e2f1c2'
  },
  {
    title: 'Curso JavaScript',
    university: 'Coder House',
    issued: 'Octubre - 2022',
    image: JS,
    credential:
      'https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FJavaScript.pdf?alt=media&token=248fdbdc-a46c-47b8-9f9b-448ecd96f59c'
  },
  {
    title: 'Optimisación de Sistemas de Sonido',
    university: 'Instituto Ene Audio',
    issued: 'Abril - 2020',
    image: OSS,
    credential:
      'https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FOptimizacionSistemasDeSonido.pdf?alt=media&token=f3a5f902-5235-4cac-8c65-20509019c4b8'
  },
  {
    title: 'Limpieza de Audio en Izotope RX',
    university: 'Instituto Ene Audio',
    issued: 'Abril - 2020',
    image: RX,
    credential:
      'https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FIzotopeRX.pdf?alt=media&token=e68831f4-dabf-44e6-b0d3-3070908796f0'
  },
  {
    title: 'Tecnicas Aplicadas para Ingenieros de Monitores',
    university: 'Instituto Ene Audio',
    issued: 'Abril - 2020',
    image: IM,
    credential:
      'https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FTecnicasDeMonitores.pdf?alt=media&token=f8f2f85d-4f03-4ae1-b616-9b7c0a25e8fe'
  },
  {
    title: 'Clase Magistral de Mezcla Online',
    university: 'Instituto Ene Audio',
    issued: 'Mayo - 2020',
    image: MO,
    credential:
      'https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FMezclaOnline.pdf?alt=media&token=1ba18bbc-3c1c-4f4d-a1e2-be1f91a2bda1'
  },
  {
    title: 'Clase Magistral de Grabación y Producción de Guitarras',
    university: 'Instituto Ene Audio',
    issued: 'Mayo - 2020',
    image: GTR,
    credential:
      'https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FGrabacionProduccionGuitarras.pdf?alt=media&token=7e60e715-7543-4456-a469-ba57b445598a'
  },
  {
    title: 'Marketing Digital',
    university: 'MDALatam',
    issued: 'Diciembre - 2021',
    image: MD,
    credential:
      'https://firebasestorage.googleapis.com/v0/b/curriculumvitae-jjml.appspot.com/o/Achievements%2FMarketing%20Digital.pdf?alt=media&token=1d1da8cf-7200-4d1a-88c7-46e8e3040f26'
  }
]
</script>

<style scoped></style>
