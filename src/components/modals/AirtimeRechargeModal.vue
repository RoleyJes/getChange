<script>
import CustomModal from './CustomModal.vue'

export default {
  name: 'AirtimeRechargeModal',

  components: { CustomModal },
}
</script>

<template>
  <CustomModal modalClassHeight="h-[300px]" @closeModal="$emit('closeAirtimeRechargeModal')">
    <div class="flex h-full flex-col items-center justify-center gap-5 text-center">
      <p class="text-primary text-3xl font-semibold">Recharge Successful</p>
      <p class="text-gray max-w-[300px] text-lg">
        The transfer of NGN200 to 08012345678 was successful
      </p>
    </div>
  </CustomModal>
</template>

<style lang="scss" scoped></style>
