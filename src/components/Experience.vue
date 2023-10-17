<template>
  <section class="mgContainer" id="experiencia">
    <article class="mgContent">
      <div class="tittle center-center flex-col mb-4">
        <h2>Experiencia</h2>
        <span class="text-sm">Mi línea de tiempo</span>
      </div>

      <div class="w-full flex flex-col justify-center items-center">
        <div class="grid grid-cols-3 gap-5 mb-4">
          <button
            :class="toggleState === 1 ? 'center-center text-secondary' : 'center-center'"
            @click="setToggleState(1)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              class="mr-1"
            >
              <path
                fill="currentColor"
                d="m21.49 10.19l-1-.55l-9-5h-.11a1.06 1.06 0 0 0-.19-.06h-.37a1.17 1.17 0 0 0-.2.06h-.11l-9 5a1 1 0 0 0 0 1.74L4 12.76v4.74a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-4.74l2-1.12v2.86a1 1 0 0 0 2 0v-3.44a1 1 0 0 0-.51-.87ZM16 17.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3.63l4.51 2.5l.15.06h.09a1 1 0 0 0 .25 0a1 1 0 0 0 .25 0h.09a.47.47 0 0 0 .15-.06l4.51-2.5Zm-5-3.14L4.06 10.5L11 6.64l6.94 3.86Z"
              />
            </svg>
            <span class="text-lg">Educacion</span>
          </button>

          <button
            :class="toggleState === 0 ? 'center-center text-secondary' : 'center-center'"
            @click="setToggleState(0)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              class="mr-1"
            >
              <path
                fill="currentColor"
                d="M8 12a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1Zm2 3H7a3 3 0 0 1 0-6h3a1 1 0 0 0 0-2H7a5 5 0 0 0 0 10h3a1 1 0 0 0 0-2Zm7-8h-3a1 1 0 0 0 0 2h3a3 3 0 0 1 0 6h-3a1 1 0 0 0 0 2h3a5 5 0 0 0 0-10Z"
              />
            </svg>
          </button>

          <button
            :class="toggleState === 2 ? 'center-center text-secondary' : 'center-center'"
            @click="setToggleState(2)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              class="mr-1"
            >
              <path
                fill="currentColor"
                d="M19 6.5h-3v-1a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3Zm-9-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm10 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V13a21.27 21.27 0 0 0 3 .94v.59a1 1 0 0 0 2 0v-.21a23 23 0 0 0 3 .21a23 23 0 0 0 3-.21v.21a1 1 0 0 0 2 0v-.59a21.27 21.27 0 0 0 3-.94Zm0-7.69a20.39 20.39 0 0 1-3 1v-.31a1 1 0 0 0-2 0v.74a20.11 20.11 0 0 1-6 0v-.74a1 1 0 0 0-2 0v.33a20.39 20.39 0 0 1-3-1V9.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"
              />
            </svg>
            <span class="text-lg">Laboral</span>
          </button>
        </div>

        <div class="w-full max-w-3xl grid grid-cols-[1fr]">
          <div :class="toggleState === 1 ? 'grid gap-2' : 'grid gap-3'">
            <div v-for="(item, index) in experience" :key="index">
              <div
                v-if="item.type === 1"
                :class="
                  toggleState === 1 || toggleState === 0
                    ? 'grid grid-cols-[1fr_max-content_1fr] gap-x-6 gap-2'
                    : 'hidden'
                "
              >
                <div
                  class="w-full center-start flex-col gap-2 bg-white rounded-b-box rounded-tl-box p-4 shadow-xl"
                >
                  <h3 class="text-base font-medium start-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      class="mr-1"
                    >
                      <path
                        fill="currentColor"
                        d="m21.49 10.19l-1-.55l-9-5h-.11a1.06 1.06 0 0 0-.19-.06h-.37a1.17 1.17 0 0 0-.2.06h-.11l-9 5a1 1 0 0 0 0 1.74L4 12.76v4.74a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-4.74l2-1.12v2.86a1 1 0 0 0 2 0v-3.44a1 1 0 0 0-.51-.87ZM16 17.5a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3.63l4.51 2.5l.15.06h.09a1 1 0 0 0 .25 0a1 1 0 0 0 .25 0h.09a.47.47 0 0 0 .15-.06l4.51-2.5Zm-5-3.14L4.06 10.5L11 6.64l6.94 3.86Z"
                      />
                    </svg>
                    {{ item.title }}
                  </h3>
                  <span class="inline-block text-sm">{{
                    item.university + ' - ' + item.city
                  }}</span>
                  <div class="text-sm start-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 19a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0-4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm-5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm7-12h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h8v1a1 1 0 0 0 2 0V5h1a1 1 0 0 1 1 1ZM7 15a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Z"
                      />
                    </svg>
                    {{ item.initialyear + ' - ' + item.finalyear }}
                  </div>
                </div>
                <div>
                  <span class="inline-block w-[13px] h-[13px] bg-primary rounded-[50%]"></span>
                  <span
                    class="experience__line -mt-[15px] block w-[1px] h-[105%] bg-primary"
                  ></span>
                </div>
              </div>

              <div
                v-else-if="item.type === 2"
                :class="
                  toggleState === 2 || toggleState === 0
                    ? 'grid grid-cols-[1fr_max-content_1fr] gap-x-6 gap-2'
                    : 'hidden'
                "
              >
                <div></div>
                <div>
                  <span class="inline-block w-[13px] h-[13px] bg-primary rounded-[50%]"></span>
                  <span
                    class="experience__line -mt-[15px] block w-[1px] h-[105%] bg-primary"
                  ></span>
                </div>
                <div
                  class="w-full center-end flex-col gap-2 bg-white rounded-b-box rounded-tr-box p-4 shadow-xl"
                >
                  <h3 class="w-full text-base font-medium end-center gap-1">
                    {{ item.role }}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                      class="ml-1"
                    >
                      <path
                        fill="currentColor"
                        d="M19 6.5h-3v-1a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3Zm-9-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm10 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V13a21.27 21.27 0 0 0 3 .94v.59a1 1 0 0 0 2 0v-.21a23 23 0 0 0 3 .21a23 23 0 0 0 3-.21v.21a1 1 0 0 0 2 0v-.59a21.27 21.27 0 0 0 3-.94Zm0-7.69a20.39 20.39 0 0 1-3 1v-.31a1 1 0 0 0-2 0v.74a20.11 20.11 0 0 1-6 0v-.74a1 1 0 0 0-2 0v.33a20.39 20.39 0 0 1-3-1V9.5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"
                      />
                    </svg>
                  </h3>
                  <span class="w-full inline-block text-sm text-end">
                    {{ item.company }} - {{ item.city }}
                  </span>
                  <div class="w-full text-sm end-center gap-1">
                    {{ item.initialyear }} - {{ item.finalyear }}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 19a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0-4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm-5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm7-12h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h8v1a1 1 0 0 0 2 0V5h1a1 1 0 0 1 1 1ZM7 15a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-[1fr_max-content_1fr] gap-x-6 gap-2">
              <div></div>
              <div>
                <span class="inline-block w-[13px] h-[13px] bg-primary rounded-[50%]"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const experience: any = [
  {
    university: 'ITM',
    title: 'Informatica Musical',
    initialyear: '2016',
    finalyear: '2019',
    city: 'Medellin',
    type: 1
  },
  {
    company: 'Teatro Pablo Tobon Uribe',
    role: 'Tecnico de Sonido e Iluminacion',
    initialyear: '2019',
    finalyear: '2019',
    city: 'Medellin',
    type: 2
  },
  {
    company: 'Casa Teatro El Poblado',
    role: 'Tecnico de Sala',
    initialyear: '2021',
    finalyear: '2022',
    city: 'Medellin',
    type: 2
  },
  {
    university: 'Digital House',
    title: 'Certified Tech Developer',
    initialyear: '2022',
    finalyear: '2023',
    city: 'Argentina',
    type: 1
  }
]
const toggleState = ref<number>(0)
function setToggleState(state: number) {
  toggleState.value = state
}
</script>

<style scoped>
.experience__line {
  transform: translate(6px, 7px);
}
</style>
