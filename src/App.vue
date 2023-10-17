<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Home from '@/components/Home.vue'
import About from '@/components/About.vue'
import Skills from '@/components/Skills.vue'
import Experience from '@/components/Experience.vue'
import Achievements from '@/components/Achievements.vue'
import Portfolio from '@/components/Portfolio.vue'
import { onMounted } from 'vue'
import Contact from '@/components/Contact.vue'

onMounted(() => {
  window.addEventListener('scroll', function () {
    const scrollUp = document.querySelector('.scrollUp')
    if (this.scrollY >= 560) {
      scrollUp?.classList.add('show-scroll')
    } else {
      scrollUp?.classList.remove('show-scroll')
    }
  })
})
</script>

<template>
  <Header />
  <main class="w-h-full center-center flex-col z-10">
    <div class="mt-0 sm:mt-14"></div>
    <Home />
    <About />
    <Skills />
    <Experience />
    <Achievements />
    <Portfolio />
    <Contact />
  </main>
  <Footer />
  <a
    href="#inicio"
    class="scrollUp fixed bg-primary opacity-75 p-2 rounded-md z-10 hover:bg-secondary transition-[1s]"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      class="scrollUp__icon"
    >
      <path
        fill="currentColor"
        d="m17.71 11.29l-5-5a1 1 0 0 0-.33-.21a1 1 0 0 0-.76 0a1 1 0 0 0-.33.21l-5 5a1 1 0 0 0 1.42 1.42L11 9.41V17a1 1 0 0 0 2 0V9.41l3.29 3.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
      />
    </svg>
  </a>
</template>

<style scoped>
.show-scroll {
  bottom: 3rem;
  right: 50px;
}
@media screen and (max-width: 768px) {
  .show-scroll {
    bottom: 6rem;
    right: 46%;
  }
}
</style>
