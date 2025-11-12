<script>
import CustomButton from '../CustomButton.vue'
import ChevronLeft from '../dashboard/ChevronLeft.vue'
import CustomModal from './CustomModal.vue'

export default {
  name: 'RedeemVoucherModal',

  data() {
    return {
      enterCode: true,
    }
  },

  components: { CustomModal, ChevronLeft, CustomButton },
}
</script>

<template>
  <CustomModal @closeModal="$emit('closeRedeemVoucherModal')">
    <!-- Display Enter IOU Code -->
    <div v-if="enterCode" class="mt-2.5 px-12.5">
      <p class="text-green flex items-center gap-3.5 text-lg font-medium">
        <ChevronLeft class="h-4" />
        <span>Back</span>
      </p>

      <div class="mx-auto mt-32 flex w-full max-w-[463px] flex-col items-center gap-10.5">
        <p class="text-primary text-center text-3xl leading-11.5 font-semibold">
          Kindly enter customer unique IOU code to validate their voucher
        </p>

        <!-- Inputs -->
        <form @submit.prevent="enterCode = false">
          <div class="mb-12 flex gap-5.5">
            <input
              type="text "
              class="border-gray/50 focus:outline-primary h-[55px] w-[58px] rounded-sm border px-2 text-2xl"
            />
            <input
              type="text "
              class="border-gray/50 focus:outline-primary h-[55px] w-[58px] rounded-sm border px-2 text-2xl"
            />
            <input
              type="text "
              class="border-gray/50 focus:outline-primary h-[55px] w-[58px] rounded-sm border px-2 text-2xl"
            />
            <input
              type="text "
              class="border-gray/50 focus:outline-primary h-[55px] w-[58px] rounded-sm border px-2 text-2xl"
            />
            <input
              type="text "
              class="border-gray/50 focus:outline-primary h-[55px] w-[58px] rounded-sm border px-2 text-2xl"
            />
          </div>

          <CustomButton buttonText="Submit" class="mx-auto" />
        </form>

        <!-- Error -->
        <p class="text-red text-sm">Error: code not associated with customer’s phone number</p>
      </div>
    </div>

    <!--Display Successful -->
    <div v-else class="mx-auto mt-38 max-w-[373px]">
      <p class="text-primary mb-8 text-center text-3xl font-semibold">
        IOU Voucher reedemed successfully
      </p>

      <div
        class="shadow-green bg-green mx-auto flex size-[71px] items-center justify-center rounded-full text-3xl font-bold text-white"
      >
        &check;
      </div>
    </div>
  </CustomModal>
</template>

<style lang="scss" scoped></style>
