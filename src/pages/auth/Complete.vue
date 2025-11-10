<template>
  <AuthRightGridUI>
    <div class="text-center flex flex-col items-center justify-center gap-6 mx-auto max-w-md">
      <p class="text-semibold text-4xl">Great to have you onboard</p>
      <p class="text-lg text-gray mb-4">
        We just mailed you a confirmation link to josh.bakery@gmail.com. Complete registration by
        following the link.
      </p>
      <CustomButton path="/" buttonText="Dashboard" :btnEnd="false" icon />
    </div>
  </AuthRightGridUI>
</template>

<script>
import AuthRightGridUI from '@/components/auth/AuthRightGridUI.vue'
import CustomButton from '@/components/CustomButton.vue'

export default {
  name: 'Complete',

  components: { AuthRightGridUI, CustomButton },
}
</script>

<style lang="scss" scoped></style>
