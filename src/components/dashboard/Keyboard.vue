<!-- <template>
  <div v-for="key in keys" :key="key" class="grid grid-cols-4 gap-0 bg-white">
    <p class="w-full bg-white py-4 ps-10.5 pe-4 text-3xl">{{ key.data }}</p>
    <p class="w-full bg-white py-4 ps-10.5 pe-4 text-3xl">{{ key.data }}</p>
    <p class="w-full bg-white py-4 ps-10.5 pe-4 text-3xl">{{ key.data }}</p>
    <p class="bg-green/20 px-10 py-4 text-4xl">{{ key.data }}</p>
  </div>
</template>

<script>
export default {
  name: 'Keyboard',

  props: {
    keys,
  },
}
</script>

<style lang="scss" scoped></style> -->

<template>
  <div class="space-y-0">
    <!-- Top row -->
    <div class="bg-green/20 grid grid-cols-4 items-center">
      <div
        v-for="(item, index) in topRow"
        :key="index"
        class="flex w-full justify-center px-10.5 py-6 text-2xl"
      >
        <component v-if="item.component" :is="item.component" class="text-primary" />
        <img v-else-if="item.image" :src="item.image" alt="" class="h-6 w-6 object-contain" />
        <span v-else>{{ item.label }}</span>
      </div>
    </div>

    <!-- Main keypad rows -->
    <div
      v-for="(row, rIndex) in keyboardRows"
      :key="rIndex"
      class="last:border-b-primary/1 grid grid-cols-4 gap-0 last:border-b-[0.5px]"
    >
      <div
        v-for="(key, kIndex) in row"
        :key="kIndex"
        class="flex w-full justify-center px-10.5 py-5.5 text-3xl"
        :class="key.bg"
      >
        {{ key.label }}
      </div>
    </div>
  </div>
</template>

<script>
import ChevronLeft from './ChevronLeft.vue'
import ChevronRight from './ChevronRight.vue'

export default {
  name: 'Keyboard',
  components: { ChevronLeft, ChevronRight },
  data() {
    return {
      topRow: [
        { label: 'c' },
        { component: 'ChevronLeft' },
        { component: 'ChevronRight' },
        { image: '@/assets/dashboard/delete.png' },
      ],
      keyboardRows: [
        [
          { label: '1', bg: 'bg-white' },
          { label: '2', bg: 'bg-white' },
          { label: '3', bg: 'bg-white' },
          { label: '*', bg: 'bg-green/20 text-4xl' },
        ],
        [
          { label: '4', bg: 'bg-white' },
          { label: '5', bg: 'bg-white' },
          { label: '6', bg: 'bg-white' },
          { label: '#', bg: 'bg-green/20' },
        ],
        [
          { label: '7', bg: 'bg-white' },
          { label: '8', bg: 'bg-white' },
          { label: '9', bg: 'bg-white' },
          { label: '0', bg: 'bg-green/20' },
        ],
      ],
    }
  },
}
</script>
