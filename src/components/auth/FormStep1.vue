<template>
  <div class="space-y-11 mb-14">
    <div class="flex w-full gap-10 items-center">
      <FormField label="First Name" inputType="text" :icon="userIcon" />
      <FormField label="Last Name" inputType="text" :icon="userIcon" />
    </div>
    <FormField label="Email" inputType="email" :icon="atIcon" />
    <FormField label="Password" inputType="password" :icon="eye" clickableIcon />
  </div>
</template>

<script>
import FormField from './FormField.vue'
import userIcon from '@/assets/auth/user.png'
import atIcon from '@/assets/auth/@.png'
import eye from '@/assets/auth/eye.png'

export default {
  name: 'FormStep1',

  data() {
    return {
      userIcon,
      atIcon,
      eye,
    }
  },

  components: { FormField },
}
</script>

<style lang="scss" scoped></style>
