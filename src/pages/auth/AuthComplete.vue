<template>
  <AuthRightGridUI>
    <div class="mx-auto flex max-w-md flex-col items-center justify-center gap-6 text-center">
      <p class="text-semibold text-4xl">Great to have you onboard</p>
      <p class="text-gray mb-4 text-lg">
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
  name: 'AuthComplete',

  components: { AuthRightGridUI, CustomButton },
}
</script>

<style lang="scss" scoped></style>
