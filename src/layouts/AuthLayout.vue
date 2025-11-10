<script>
import ImageCarousel from '@/components/auth/ImageCarousel.vue'
import CustomFooter from '../components/auth/CustomFooter.vue'

export default {
  name: 'AuthLayout',

  data() {
    return {
      imgSrc: '@/assets/auth/man.webp',
    }
  },

  methods: {
    carouselImage() {
      setInterval(() => {}, 2000)
    },
  },

  components: { CustomFooter, ImageCarousel },
}
</script>

<template>
  <section class="grid min-h-screen grid-cols-5">
    <!-- Image -->
    <div class="sticky top-0 col-span-2 h-screen">
      <ImageCarousel />
    </div>
    <!-- Route view -->
    <section class="text-primary col-span-3 flex min-h-screen flex-col pt-16">
      <div class="mx-auto mb-16 w-147.5">
        <RouterView />
      </div>

      <!-- footer -->
      <CustomFooter />
    </section>
  </section>
</template>

<style lang="scss" scoped></style>
