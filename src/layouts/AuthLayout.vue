<script>
import ImageCarousel from '@/components/auth/ImageCarousel.vue'
import CustomFooter from '../components/auth/CustomFooter.vue'
import man from '@/assets/auth/man.webp'
import lady from '@/assets/auth/lady.webp'

export default {
  name: 'AuthLayout',

  data() {
    return {
      imageIndex: 0,
      interval: null,
      carousel: [
        {
          id: 1,
          img: man,
          alt: 'A man standing and smiling',
          title: 'No Hazzles',
          dots: ['', ''],
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        },
        {
          id: 2,
          img: lady,
          alt: 'Woman smiling while working on her laptop',
          title: 'Simple Looking',
          dots: ['', ''],
          description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero dolor minus ipsa quasi, magni velit ipsum?',
        },
      ],
    }
  },

  mounted() {
    this.startInnterval()
  },

  methods: {
    startInnterval() {
      clearInterval(this.interval)

      this.interval = setInterval(() => {
        this.imageIndex = this.imageIndex === 1 ? 0 : 1
      }, 5000)
    },
  },

  watch: {
    imageIndex() {
      this.startInnterval()
    },
  },

  beforeUnmount() {
    clearInterval(this.interval)
  },

  components: { CustomFooter, ImageCarousel },
}
</script>

<template>
  <section class="grid min-h-screen grid-cols-5">
    <!-- Image -->
    <div class="sticky top-0 col-span-2 h-screen overflow-hidden">
      <template v-for="(item, index) in carousel" :key="item.id">
        <ImageCarousel
          class="animate-fade-in"
          v-bind="{ ...item }"
          :index="index"
          v-show="imageIndex === index"
          @dotClick="(i) => (imageIndex = i)"
        />
      </template>
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
