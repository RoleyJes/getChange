<script>
import CustomModal from '@/components/modals/CustomModal.vue'

export default {
  name: 'CustomerQueryModal',

  data() {
    return {
      history: [
        { description: 'NGN55 Airtime', date: '06 Aug, 2019', status: 'Redeemed as airtime' },
        { description: 'SAM***G (NGN500)', date: '06 Aug, 2019', status: '', selectable: true },
        { description: 'BRM***K (NGN100)', date: '06 Aug, 2019', status: 'Redeemed as voucher' },
        { description: 'NGN70 Airtime', date: '06 Aug, 2019', status: 'Redeemed as airtime' },
        { description: 'NGN30 Airtime', date: '06 Aug, 2019', status: 'Redeemed as airtime' },
      ],
    }
  },

  components: { CustomModal },
}
</script>

<template>
  <CustomModal @closeModal="$emit('closeCustomerQueryModal')">
    <div class="mt-8 px-15 pb-15">
      <!-- Phone number banner -->
      <p
        class="bg-green shadow-green mb-17 w-full rounded-md py-10 text-center text-[40px] leading-6 font-light -tracking-[0.23px] text-white"
      >
        08012345678
      </p>

      <!-- Header row -->
      <div class="text-primary mb-7.5 grid grid-cols-3 text-sm">
        <p>DESCRIPTION</p>
        <p>DATE</p>
        <p>STATUS</p>
      </div>

      <!-- Content rows -->
      <div class="text-gray grid grid-cols-3 items-center gap-y-4.5 text-sm">
        <template v-for="(item, index) in history" :key="index">
          <!-- Description -->
          <p>{{ item.description }}</p>

          <!-- Date -->
          <p>{{ item.date }}</p>

          <!-- Status -->
          <div>
            <template v-if="item.selectable">
              <select
                v-model="item.status"
                class="border-gray/40 rounded-3 text-gray focus:border-green w-full cursor-pointer border bg-white px-0.5 py-0.5 text-sm focus:outline-none"
              >
                <option value="">Change status</option>
                <option>Redeemed as airtime</option>
                <option>Redeemed as voucher</option>
              </select>
            </template>
            <template v-else>
              <span class="bg-red/10 text-red rounded-3 block px-2.5 py-1 text-sm">
                {{ item.status }}
              </span>
            </template>
          </div>
        </template>
      </div>
    </div>
  </CustomModal>
</template>
