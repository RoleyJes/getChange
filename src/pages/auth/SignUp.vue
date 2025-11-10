<template>
  <AuthRightGridUI
    header="Create your free account"
    subHeader="Already registered?"
    headerButton="Sign in"
    link="/auth/login"
  >
    <form @submit.prevent="">
      <FormStep1 v-if="step === 1" />
      <FormStep2 v-if="step === 2" />

      <div class="flex items-center justify-between">
        <CustomButton v-if="step === 2" @click="step = 1" buttonText="Previous" />
        <CustomButton @click="nextStep" :buttonText="buttonText" />
      </div>
    </form>
  </AuthRightGridUI>
</template>

<script>
import AuthRightGridUI from '@/components/auth/AuthRightGridUI.vue'
import CustomButton from '@/components/CustomButton.vue'
import FormStep1 from '@/components/auth/FormStep1.vue'
import FormStep2 from '@/components/auth/FormStep2.vue'

export default {
  data() {
    return {
      step: 1,
    }
  },

  methods: {
    nextStep() {
      this.step === 1 ? this.step++ : this.$router.push('/auth/complete')
    },
  },

  computed: {
    buttonText() {
      return this.step === 1 ? 'Continue' : 'Finish'
    },
  },

  components: { FormStep1, FormStep2, AuthRightGridUI, CustomButton },
}
</script>

<style lang="scss" scoped></style>
