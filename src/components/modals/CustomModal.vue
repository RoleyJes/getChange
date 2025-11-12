<template>
  <div class="fixed inset-0 z-50 flex w-full items-center justify-center bg-black/50">
    <div
      :class="[
        'rounded-5 flex max-h-141.5 w-full max-w-164 flex-col overflow-y-auto bg-white pt-4',
        modalClassHeight,
      ]"
    >
      <!-- Cancel button -->
      <div class="flex justify-end pe-5">
        <button
          class="bg-gray flex size-[22px] cursor-pointer items-center justify-center rounded-full text-white"
          @click="$emit('closeModal')"
        >
          <img src="@/assets/dashboard/x.png" alt="cancel" />
        </button>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalClassHeight: {
      type: String,
      required: false,
      default: 'h-full',
    },
  },
}
</script>

<style lang="scss" scoped></style>
