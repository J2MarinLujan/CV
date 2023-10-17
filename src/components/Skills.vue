<template>
  <section class="mgContainer animation" id="habilidades">
    <article class="mgContent">
      <div class="tittle center-center flex-col mb-4">
        <h2>Habilidades</h2>
        <span class="text-sm">Mi nivel tecnico</span>
      </div>

      <div class="center-center p-4 bg-white rounded-box shadow-xl">
        <div class="carousel carousel-center space-x-4 w-full gap-1">
          <div
            v-for="(item, index) in skills"
            :key="index"
            class="carousel-item flex-col bg-white w-[300px] p-4 my-4 rounded-xl border border-gray-300 shadow-lg"
          >
            <h3 class="text-center text-xl font-semibold mb-3">{{ item.title }}</h3>
            <div class="grid justify-center items-start min-h-[260px]">
              <div class="w-full flex justify-between items-start flex-wrap gap-y-5">
                <div
                  v-for="(subitem, index) in item.skills"
                  :key="index"
                  class="h-full min-w-[120px] start-center gap-1"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    class="w-5 h-5"
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
                  <div>
                    <h3 class="text-base font-medium">{{ subitem.title }}</h3>
                    <span class="text-xs">{{ subitem.level }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!--        <div class=" max-w-md p-4 space-x-4 bg-neutral rounded-box">-->
          <!--          <div class="">-->
          <!--            <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" class="rounded-box" />-->
          <!--          </div>-->
          <!--        </div>-->
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
let skills: any = [
  {
    title: 'Frontend',
    skills: [
      { title: 'HTML', level: 'Avanzado' },
      { title: 'CSS', level: 'Avanzado' },
      { title: 'Saas', level: 'Avanzado' },
      { title: 'Tailwind', level: 'Avanzado' },
      { title: 'JavaScript', level: 'Avanzado' },
      { title: 'ReactJS', level: 'Avanzado' }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { title: 'Java', level: 'Avanzado' },
      { title: 'Spring Boot', level: 'Intermedio' },
      { title: 'NodeJs', level: 'Intermedio' },
      { title: 'MySQL', level: 'Avanzado' },
      { title: 'Firebase', level: 'Avanzado' },
      { title: 'MongoDB', level: 'Intermedio' },
      { title: 'Postman', level: 'Intermedio' },
      { title: 'Git', level: 'Avanzado' }
    ]
  },
  {
    title: 'DevOps',
    skills: [
      { title: 'EC2', level: 'Intermedio' },
      { title: 'S3', level: 'Intermedio' },
      { title: 'RDS', level: 'Intermedio' }
    ]
  },
  {
    title: 'Diseño',
    skills: [
      { title: 'PhotoShop', level: 'Avanzado' },
      { title: 'Illustrator', level: 'Intermedio' },
      { title: 'PremiePro', level: 'Avanzado' },
      { title: 'AfterEffects', level: 'Intermedio' }
    ]
  },
  {
    title: 'Metodologías Agiles',
    skills: [
      { title: 'Scrum', level: 'Avanzado' },
      { title: 'Kanban', level: 'Avanzado' }
    ]
  },
  {
    title: 'Audio',
    skills: [
      { title: 'Produccion Musical', level: 'Intermedio' },
      { title: 'Grabacion', level: 'Avanzado' },
      { title: 'Mezcla', level: 'Intermedio' },
      { title: 'Masterizacion', level: 'Intermedio' },
      { title: 'Sonido en vivo', level: 'Avanzado' }
    ]
  },
  {
    title: 'Iluminacion',
    skills: [
      { title: 'Diseño', level: 'Avanzado' },
      { title: 'Montaje', level: 'Avanzado' },
      { title: 'Operacion', level: 'Avanzado' }
    ]
  },
  {
    title: 'Otras Habilidades',
    skills: [
      { title: 'Excel', level: 'Avanzado' },
      { title: 'Word', level: 'Avanzado' },
      { title: 'PowerPoint', level: 'Avanzado' },
      { title: 'SketchUp', level: 'Intermedio' },
      { title: 'AutoCAD', level: 'Intermedio' }
    ]
  }
]
</script>

<style scoped></style>
