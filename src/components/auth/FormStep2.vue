<template>
  <div class="space-y-11 mb-14">
    <FormField label="Business Name" inputType="text" :icon="office" />
    <FormField label="Business Address" inputType="text" :icon="mapPin" />
    <FormField label="Phone Number" inputType="number" :icon="phone" />
  </div>
</template>

<script>
import FormField from './FormField.vue'
import phone from '@/assets/auth/phone.png'
import office from '@/assets/auth/office.png'
import mapPin from '@/assets/auth/map-pin.png'

export default {
  name: 'FormStep2',

  data() {
    return {
      phone,
      office,
      mapPin,
    }
  },

  components: { FormField },
}
</script>

<style lang="scss" scoped></style>
