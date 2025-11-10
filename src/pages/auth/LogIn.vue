<template>
  <AuthRightGridUI
    header="Welcome"
    subHeader="Don't have an account?"
    headerButton="Sign up"
    link="/auth/signup"
  >
    <form @submit.prevent="">
      <div class="space-y-11 mb-14">
        <FormField label="Email" inputType="email" :icon="atIcon" />
        <FormField label="Password" inputType="password" :icon="eye" clickableIcon />
      </div>

      <div class="flex justify-between items-center">
        <RouterLink
          to="/auth/forgotPassword"
          class="text-green font-medium text-sm hover:scale-105 transition-transform duration-300"
          >Forgot password?</RouterLink
        >
        <CustomButton buttonText="Sign in" @click.prevent="handleLogin" />
      </div>
    </form>
  </AuthRightGridUI>
</template>

<script>
import AuthRightGridUI from '@/components/auth/AuthRightGridUI.vue'
import CustomButton from '@/components/CustomButton.vue'
import FormField from '@/components/auth/FormField.vue'
import atIcon from '@/assets/auth/@.png'
import eye from '@/assets/auth/eye.png'
import { login } from '@/utils/isAuthenticated'

export default {
  name: 'LogIn',

  data() {
    return {
      atIcon,
      eye,
    }
  },

  methods: {
    handleLogin() {
      login()
      console.log('khgkg')
      this.$router.push({ name: 'home' })
    },
  },

  components: { AuthRightGridUI, FormField, CustomButton },
}
</script>

<style lang="scss" scoped></style>
