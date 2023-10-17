<template>
  <header
    class="bg-base-content fixed left-0 bottom-0 sm:top-0 w-full center-center sm:h-16 sm:py-2 sm:px-0 z-50 top-initial"
    :class="onMenu ? 'h-52 pt-4 pb-8 px-2' : 'h-16 py-2 px-6'"
  >
    <nav class="relative w-h-full between-center sm:px-8 max-w-5xl">
      <a href="#home">
        <h1 class="text-2xl text-primary font-bold">J J M L</h1>
      </a>

      <div
        v-if="onMenu"
        class="absolute top-0 left-0 w-full bg-base-content grid sm:hidden grid-cols-4 grid-rows-2 gap-y-4 gap-x-2 text-center text-sm text-primary transition-all"
      >
        <a
          href="#inicio"
          @click="activeMenu = 'inicio'"
          :class="activeMenu === 'inicio' ? 'text-secondary' : ''"
          class="center-center gap-1 flex-col font-bold text-xs hover:text-base-100 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m20 8l-6-5.26a3 3 0 0 0-4 0L4 8a3 3 0 0 0-1 2.26V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8.75A3 3 0 0 0 20 8Zm-6 12h-4v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Zm5-1a1 1 0 0 1-1 1h-2v-5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v5H6a1 1 0 0 1-1-1v-8.75a1 1 0 0 1 .34-.75l6-5.25a1 1 0 0 1 1.32 0l6 5.25a1 1 0 0 1 .34.75Z"
            />
          </svg>
          Inicio
        </a>

        <a
          href="#sobre"
          @click="activeMenu = 'sobre'"
          :class="activeMenu === 'sobre' ? 'text-secondary' : ''"
          class="center-center gap-1 flex-col font-bold text-xs hover:text-base-100 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z"
            />
          </svg>
          Sobre
        </a>

        <a
          href="#habilidades"
          @click="activeMenu = 'habilidades'"
          :class="activeMenu === 'habilidades' ? 'text-secondary' : ''"
          class="center-center gap-1 flex-col font-bold text-xs hover:text-base-100 transition-all"
        >
          <svg
            class="text-3xl"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 48 48"
          >
            <g fill="none">
              <path
                d="M21.37 36c1.45-5.25 6.52-9 12.36-8.38c5.56.59 9.98 5.28 10.26 10.86c.07 1.47-.13 2.88-.56 4.19c-.26.8-1.04 1.33-1.89 1.33H11.758c-5.048 0-8.834-4.619-7.844-9.569L10 4h12l4 7l-8.57 6.13L15 14"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                stroke-width="4"
                d="M21.37 36c1.45-5.25 6.52-9 12.36-8.38c5.56.59 9.98 5.28 10.26 10.86c.07 1.47-.13 2.88-.56 4.19c-.26.8-1.04 1.33-1.89 1.33H11.758c-5.048 0-8.834-4.619-7.844-9.569L10 4h12l4 7l-8.57 6.13L15 14m2.44 3.13L22 34"
              />
            </g>
          </svg>
          Habilidades
        </a>

        <a
          href="#experiencia"
          @click="activeMenu = 'experiencia'"
          :class="activeMenu === 'experiencia' ? 'text-secondary' : ''"
          class="center-center gap-1 flex-col font-bold text-xs hover:text-base-100 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15.098 12.634L13 11.423V7a1 1 0 0 0-2 0v5a1 1 0 0 0 .5.866l2.598 1.5a1 1 0 1 0 1-1.732ZM12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8Z"
            />
          </svg>
          Experiencia
        </a>

        <a
          href="#logros"
          @click="activeMenu = 'logros'"
          :class="activeMenu === 'logros' ? 'text-secondary' : ''"
          class="center-center gap-1 flex-col font-bold text-xs hover:text-base-100 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M21 4h-3V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v1H3a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4h1.54A6 6 0 0 0 11 13.91V16h-1a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3h-1v-2.09A6 6 0 0 0 16.46 12H18a4 4 0 0 0 4-4V5a1 1 0 0 0-1-1ZM6 10a2 2 0 0 1-2-2V6h2v2a6 6 0 0 0 .35 2Zm8 8a1 1 0 0 1 1 1v1H9v-1a1 1 0 0 1 1-1Zm2-10a4 4 0 0 1-8 0V4h8Zm4 0a2 2 0 0 1-2 2h-.35A6 6 0 0 0 18 8V6h2Z"
            />
          </svg>
          Logros
        </a>

        <a
          href="#portafolio"
          @click="activeMenu = 'portafolio'"
          :class="activeMenu === 'portafolio' ? 'text-secondary' : ''"
          class="center-center gap-1 flex-col font-bold text-sm hover:text-base-100 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 2H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a2.81 2.81 0 0 0 .49-.05l.3-.07h.12l.37-.14l.13-.07c.1-.06.21-.11.31-.18a3.79 3.79 0 0 0 .38-.32l.07-.09a2.69 2.69 0 0 0 .27-.32l.09-.13a2.31 2.31 0 0 0 .18-.35a1 1 0 0 0 .07-.15c.05-.12.08-.25.12-.38v-.15a2.6 2.6 0 0 0 .1-.6V5a3 3 0 0 0-3-3ZM5 20a1 1 0 0 1-1-1v-4.31l3.29-3.3a1 1 0 0 1 1.42 0l8.6 8.61Zm15-1a1 1 0 0 1-.07.36a1 1 0 0 1-.08.14a.94.94 0 0 1-.09.12l-5.35-5.35l.88-.88a1 1 0 0 1 1.42 0l3.29 3.3Zm0-5.14L18.12 12a3.08 3.08 0 0 0-4.24 0l-.88.88L10.12 10a3.08 3.08 0 0 0-4.24 0L4 11.86V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1ZM13.5 6A1.5 1.5 0 1 0 15 7.5A1.5 1.5 0 0 0 13.5 6Z"
            />
          </svg>
          Portafolio
        </a>

        <a
          href="#contacto"
          @click="activeMenu = 'contacto'"
          :class="activeMenu === 'contacto' ? 'text-secondary' : ''"
          class="center-center gap-1 flex-col font-bold text-xs hover:text-base-100 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m20.34 9.32l-14-7a3 3 0 0 0-4.08 3.9l2.4 5.37a1.06 1.06 0 0 1 0 .82l-2.4 5.37A3 3 0 0 0 5 22a3.14 3.14 0 0 0 1.35-.32l14-7a3 3 0 0 0 0-5.36Zm-.89 3.57l-14 7a1 1 0 0 1-1.35-1.3l2.39-5.37a2 2 0 0 0 .08-.22h6.89a1 1 0 0 0 0-2H6.57a2 2 0 0 0-.08-.22L4.1 5.41a1 1 0 0 1 1.35-1.3l14 7a1 1 0 0 1 0 1.78Z"
            />
          </svg>
          Contacto
        </a>

        <button @click="onMenu = false" class="center-center">
          <svg
            class="w-16 h-16 p-4 text-3xl text-primary font-bold bg-secondary/50 rounded-2xl hover:bg-secondary"
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 12a1 1 0 0 0 1 1h7.59l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76a1 1 0 0 0-.21-.33l-4-4a1 1 0 1 0-1.42 1.42l2.3 2.29H5a1 1 0 0 0-1 1ZM17 2H7a3 3 0 0 0-3 3v3a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z"
            />
          </svg>
        </button>
      </div>
      <div
        class="hidden sm:flex justify-between items-center gap-4 md:gap-6 text-center text-xs md:text-sm text-primary transition-all"
      >
        <a
          href="#inicio"
          @click="activeMenu = 'inicio'"
          :class="activeMenu === 'inicio' ? 'text-secondary' : ''"
          class="center-center flex-col font-medium hover:text-base-100 transition-all"
        >
          Inicio
        </a>

        <a
          href="#sobre"
          @click="activeMenu = 'sobre'"
          :class="activeMenu === 'sobre' ? 'text-secondary' : ''"
          class="center-center flex-col font-medium hover:text-base-100 transition-all"
        >
          Sobre
        </a>

        <a
          href="#habilidades"
          @click="activeMenu = 'habilidades'"
          :class="activeMenu === 'habilidades' ? 'text-secondary' : ''"
          class="center-center flex-col font-medium hover:text-base-100 transition-all"
        >
          Habilidades
        </a>

        <a
          href="#experiencia"
          @click="activeMenu = 'experiencia'"
          :class="activeMenu === 'experiencia' ? 'text-secondary' : ''"
          class="center-center flex-col font-medium hover:text-base-100 transition-all"
        >
          Experiencia
        </a>

        <a
          href="#logros"
          @click="activeMenu = 'logros'"
          :class="activeMenu === 'logros' ? 'text-secondary' : ''"
          class="center-center flex-col font-medium hover:text-base-100 transition-all"
        >
          Logros
        </a>

        <a
          href="#portafolio"
          @click="activeMenu = 'portafolio'"
          :class="activeMenu === 'portafolio' ? 'text-secondary' : ''"
          class="center-center flex-col font-medium hover:text-base-100 transition-all"
        >
          Portafolio
        </a>

        <a
          href="#contacto"
          @click="activeMenu = 'contacto'"
          :class="activeMenu === 'contacto' ? 'text-secondary' : ''"
          class="center-center flex-col font-medium hover:text-base-100 transition-all"
        >
          Contacto
        </a>
      </div>

      <button v-if="!onMenu" @click="onMenu = true" class="sm:hidden">
        <svg
          class="text-primary font-bold hover:text-secondary"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M10 13H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Zm-1 7H4v-5h5ZM21 2h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 7h-5V4h5Zm1 4h-7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1Zm-1 7h-5v-5h5ZM10 2H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1ZM9 9H4V4h5Z"
          />
        </svg>
      </button>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGlobalStore } from '@/stores/global'
import { onMounted, ref } from 'vue'

const { onMenu } = storeToRefs(useGlobalStore())
const activeMenu = ref<string>('inicio')

onMounted(() => {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header')
    if (this.scrollY >= 80) {
      header?.classList.add('scroll-header')
    } else {
      header?.classList.remove('scroll-header')
    }
  })
})
</script>

<style scoped>
.scroll-header {
  box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
}
</style>
