<template>
  <AuthRightGridUI
    header="Reset Password"
    subHeader="Don’t have an account?"
    headerButton="Sign up"
    link="/auth/signup"
  >
    <form @submit.prevent="">
      <div class="mt-11 mb-28">
        <FormField label="Email" inputType="email" :icon="atIcon" />
      </div>

      <div class="flex justify-between items-center">
        <RouterLink
          to="/auth/login"
          class="text-green font-medium text-sm hover:scale-105 transition-transform duration-300"
          >Back to login</RouterLink
        >
        <CustomButton buttonText="Recover" />
      </div>
    </form>
  </AuthRightGridUI>
</template>

<script>
import AuthRightGridUI from '@/components/auth/AuthRightGridUI.vue'
import atIcon from '@/assets/auth/@.png'
import CustomButton from '@/components/CustomButton.vue'
import FormField from '@/components/auth/FormField.vue'

export default {
  name: 'ForgotPassword',

  data() {
    return {
      atIcon,
    }
  },

  components: { AuthRightGridUI, CustomButton, FormField },
}
</script>

<style lang="scss" scoped></style>
