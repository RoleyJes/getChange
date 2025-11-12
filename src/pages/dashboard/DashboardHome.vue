<script>
import CustomButton from '@/components/CustomButton.vue'
import CustomerQueryModal from '@/components/modals/CustomerQueryModal.vue'
import RecentActivities from '@/components/dashboard/dashboardHome/RecentActivities.vue'
import TopSectionOverview from '@/components/dashboard/dashboardHome/TopSectionOverview.vue'
import TopUpModal from '@/components/modals/TopUpModal.vue'
import RedeemVoucherModal from '@/components/modals/RedeemVoucherModal.vue'
import AirtimeRechargeModal from '@/components/modals/AirtimeRechargeModal.vue'
import HomeKeyboard from '@/components/dashboard/dashboardHome/HomeKeyboard.vue'

export default {
  name: 'DashboardHome',

  data() {
    return {
      selectedOption: 'Airtime',
      showTopUpModal: false,
      showCustomerQueryModal: false,
      showRedeemVoucherModal: false,
      showAirtimeRechargeModal: false,
    }
  },

  methods: {
    closeModals(modalState) {
      this[modalState] = false
    },
  },

  components: {
    TopSectionOverview,
    CustomButton,
    RecentActivities,
    HomeKeyboard,
    CustomerQueryModal,
    TopUpModal,
    RedeemVoucherModal,
    AirtimeRechargeModal,
  },
}
</script>

<template>
  <main class="grid grid-cols-[1fr_395px] gap-16">
    <!-- Left display -->
    <section class="pt-20 pb-10">
      <!-- Top -->
      <TopSectionOverview
        header="Store Wallet"
        middleText="2,500"
        buttonText="Top up wallet"
        @buttonClick="showTopUpModal = true"
      />
      <TopSectionOverview
        header="Total Disbursed"
        middleText="12,000"
        buttonText="View History"
        @buttonClick="showCustomerQueryModal = true"
        class="mt-7"
      />

      <!-- Recent Activites Table-->
      <RecentActivities />
    </section>

    <!-- Right display -->
    <section>
      <div class="bg-primary rounded-5 space-y-14 px-8 pt-7.5 pb-7 text-white">
        <p class="text-sm">GETCHANGE WIDGET</p>

        <div>
          <!-- Amount input display -->
          <div class="mb-9 flex gap-5 font-medium text-white/50">
            <p>Amount</p>
            <p class="w-full border-b border-b-white/40 text-center"></p>
          </div>

          <!-- Radio options -->
          <div class="flex items-center justify-end gap-12">
            <label class="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                value="Airtime"
                v-model="selectedOption"
                class="accent-green text-primary"
              />
              <span class="font-medium text-white/50">Airtime</span>
            </label>

            <label class="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                value="IOU Voucher"
                v-model="selectedOption"
                class="accent-green"
              />
              <span class="font-medium text-white/50">IOU Voucher</span>
            </label>
          </div>
        </div>

        <p class="text-5xl">08012345678</p>
      </div>

      <HomeKeyboard />

      <!-- Buttons -->
      <div class="flex flex-col items-center justify-center gap-9.5 bg-white px-13 py-15.5">
        <CustomButton transparent buttonText="Query" @click="showRedeemVoucherModal = true" />
        <CustomButton buttonText="Generate" @click="showAirtimeRechargeModal = true" />
      </div>
    </section>

    <!-- Modals -->

    <!-- Top up Modal -->
    <TopUpModal v-if="showTopUpModal" @closeTopUpModal="closeModals('showTopUpModal')" />

    <!-- CutomerQueryModal -->
    <CustomerQueryModal
      v-if="showCustomerQueryModal"
      @closeCustomerQueryModal="closeModals('showCustomerQueryModal')"
    />

    <!-- RedeemVoucherModal -->
    <RedeemVoucherModal
      v-if="showRedeemVoucherModal"
      @closeRedeemVoucherModal="closeModals('showRedeemVoucherModal')"
    />

    <!-- AirtimeRechargeModal -->
    <AirtimeRechargeModal
      v-if="showAirtimeRechargeModal"
      @closeAirtimeRechargeModal="closeModals('showAirtimeRechargeModal')"
    />
  </main>
</template>

<style></style>
