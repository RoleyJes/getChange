<script>
import FormField from '../auth/FormField.vue'
import CustomButton from '../CustomButton.vue'
import CustomModal from './CustomModal.vue'

export default {
  name: 'TopUpModal',

  components: { CustomModal, CustomButton, FormField },
}
</script>

<template>
  <CustomModal @closeModal="$emit('closeTopUpModal')">
    <div class="mt-4.5 px-22 pb-19">
      <p class="text-3xl font-semibold">Top up your store wallet</p>

      <form class="mt-12 flex flex-col gap-15" @submit.prevent="">
        <FormField placeholder="Enter Amount" inputType="text" />
        <FormField placeholder="Card Number" inputType="number" />
        <div class="flex gap-14">
          <FormField placeholder="Expiry Date (MM/YY)" inputType="number" class="grow basis-34" />
          <FormField placeholder="CVV" inputType="number" class="basis-1/3" />
        </div>

        <!-- Buttons -->
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <input id="useSavedDebitCard" type="checkbox" class="peer hidden" />
            <div
              class="outline-gray/40 peer-checked:bg-green size-3 rounded-[0.5px] outline outline-offset-[1.5px] transition-all"
            ></div>
            <label for="useSavedDebitCard" class="text-gray text-sm">Use saved debit card</label>
          </div>

          <CustomButton buttonText="Credit Wallet" />
        </div>
      </form>
    </div>
  </CustomModal>
</template>

<style lang="scss" scoped></style>
