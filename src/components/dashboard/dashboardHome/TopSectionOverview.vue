<script>
import CustomButton from '../../CustomButton.vue'

export default {
  name: 'TopSectionOverview',

  props: {
    header: {
      type: String,
      required: true,
    },
    middleText: {
      type: String,
      required: false,
    },
    buttonText: {
      type: String,
      required: false,
    },
  },

  components: { CustomButton },
}
</script>
<template>
  <div class="rounded-5 flex items-center justify-between bg-white px-6 py-4">
    <p class="text-lg font-semibold">{{ header }}</p>
    <p v-if="middleText" class="text-4xl font-semibold">
      <sup class="-me-2 text-xl font-medium">₦</sup>
      {{ middleText }}
    </p>
    <CustomButton v-if="buttonText" :buttonText="buttonText" @click="$emit('buttonClick')" />
  </div>
</template>

<style lang="scss" scoped></style>
