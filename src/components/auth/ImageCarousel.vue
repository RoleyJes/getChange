<script>
export default {
  name: 'ImageCarousel',

  props: {
    img: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    dots: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    },
  },
}
</script>

<template>
  <div class="relative h-full">
    <img
      :src="img"
      :class="[
        'absolute inset-0 -z-10 w-full object-contain transition-opacity duration-700 ease-in-out',
      ]"
      :alt="alt"
    />
    <div class="mx-auto flex h-full max-w-[477px] space-y-5 text-center text-2xl text-white">
      <div class="mt-auto mb-18">
        <p class="font-semibold">{{ title }}</p>
        <p>{{ description }}</p>
        <div class="mt-8 flex items-center justify-center gap-3">
          <span
            @click="$emit('dotClick', i)"
            v-for="(_, i) in dots"
            :key="i"
            :class="[
              'size-2.5 cursor-pointer rounded-full',
              i === index
                ? 'bg-green outline-green-light outline outline-offset-3'
                : 'bg-green-light',
            ]"
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
