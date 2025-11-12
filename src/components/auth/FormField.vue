<template>
  <div class="flex w-full flex-col gap-3">
    <label v-if="label" :for="label" class="text-gray">{{ label }}</label>
    <div class="relative">
      <input
        :id="label"
        :type="currentType"
        :placeholder="placeholder"
        class="placeholder:text-gray w-full border-b border-b-[#e6e7eb] pe-6 pb-2 text-xl placeholder:text-base placeholder:font-normal focus:outline-none"
      />
      <img
        v-if="icon"
        :src="icon"
        :class="['absolute right-0 bottom-3', clickableIcon ? 'cursor-pointer' : '']"
        alt="icon"
        @click="toggleVisibility"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormField',

  data() {
    return {
      currentType: this.inputType,
    }
  },

  props: {
    label: {
      type: String,
      required: false,
    },
    inputType: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    clickableIcon: {
      type: Boolean,
      required: false,
    },
  },

  methods: {
    toggleVisibility() {
      if (this.inputType === 'password') {
        this.currentType = this.currentType === 'password' ? 'text' : 'password'
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
