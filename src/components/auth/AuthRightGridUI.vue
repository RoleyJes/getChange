<template>
  <!-- Header -->
  <div class="mb-9 space-y-3">
    <h1 class="text-xl font-semibold">{{ header }}</h1>
    <p class="text-sm">
      <span class="font-medium">{{ subHeader }}</span>
      <RouterLink v-if="link" :to="link" class="text-green ms-1 font-semibold">{{
        headerButton
      }}</RouterLink>
    </p>
  </div>

  <!-- Form ?? -->
  <article class="shadow-form-shadow py-12 px-14">
    <slot />
  </article>
</template>

<script>
export default {
  name: 'AuthRightGridUI',

  props: {
    header: {
      type: String,
      required: false,
    },
    subHeader: {
      type: String,
      required: false,
    },
    headerButton: {
      type: String,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped></style>
