<template>
  <div class="flex gap-3 w-full flex-col">
    <label :for="label" class="text-gray">{{ label }}</label>
    <div class="relative">
      <input
        :id="label"
        :type="currentType"
        class="text-xl focus:outline-none border-b border-b-[#e6e7eb] w-full pb-2 pe-6"
      />
      <img
        v-if="icon"
        :src="icon"
        :class="['absolute bottom-3 right-0', clickableIcon ? 'cursor-pointer' : '']"
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
      required: true,
    },
    inputType: {
      type: String,
      required: true,
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
