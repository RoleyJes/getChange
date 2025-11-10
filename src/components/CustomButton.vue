<template>
  <component
    :is="path ? 'RouterLink' : 'button'"
    :to="path"
    :class="[
      'rounded-3 py-2 w-50 text-lg font-semibold  transition-all duration-300 cursor-pointer',
      btnEnd ? 'ms-auto me-0' : '',
      icon ? 'flex items-center justify-center gap-4 group ' : 'block',
      transparent
        ? 'bg-none border border-primary text-primary hover:bg-primary hover:text-white'
        : 'bg-green border border-green text-white hover:bg-green-darker',
    ]"
  >
    <slot>
      {{ buttonText }}
      <!-- Icon -->
      <div v-if="icon" class="group-hover:translate-x-2 transition">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.75 6.74998H12.75"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.75 0.75L12.75 6.75L6.75 12.75"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </slot>
  </component>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    btnEnd: {
      type: Boolean,
      required: false,
      default: false,
    },
    icon: {
      type: Boolean,
      required: false,
    },
    transparent: {
      type: Boolean,
      default: false,
      required: false,
    },
    path: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped></style>
