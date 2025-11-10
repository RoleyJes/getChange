<template>
  <main class="grid grid-cols-[1fr_395px] gap-16">
    <!-- Left display -->
    <section class="pt-20 pb-10">
      <!-- Top -->
      <div class="rounded-5 flex items-center justify-between bg-white px-6 py-4">
        <p class="text-lg font-semibold">Store Wallet</p>
        <p class="text-4xl font-semibold">
          <sup class="-me-2 text-xl font-medium">₦</sup>
          2,500
        </p>
        <CustomButton button-text="Top up wallet" @click="showModal = true" />
      </div>

      <div class="rounded-5 mt-7 flex items-center justify-between bg-white px-6 py-4">
        <p class="text-lg font-semibold">Total Disbursed</p>
        <p class="text-4xl font-semibold">
          <sup class="-me-2 text-xl font-medium">₦</sup>
          12,000
        </p>
        <CustomButton button-text="View History" transparent />
      </div>

      <!-- Recent Activites Table-->
      <section class="mt-16">
        <!-- Header -->
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold tracking-tight">Recent Activites</h3>

          <!-- Pagination -->
          <div class="flex items-center gap-4">
            <p class="flex items-center gap-2 text-sm">
              <span class="rounded-3 border-primary/10 border px-1.5">1</span>
              <span>of</span>
              <span>8</span>
            </p>

            <div class="flex items-center gap-3">
              <p
                class="bg-green flex size-5 cursor-pointer items-center justify-center rounded-full text-sm font-medium text-white"
              >
                <ChevronLeft class="size-2" />
              </p>
              <p
                class="bg-green flex size-5 cursor-pointer items-center justify-center rounded-full text-sm font-medium text-white"
              >
                <ChevronRight class="size-2" />
              </p>
            </div>
          </div>
        </div>

        <!-- Table -->
        <section class="mt-4">
          <table class="w-full table-auto border-separate border-spacing-y-4">
            <thead class="text-sm uppercase">
              <tr>
                <th class="w-25 ps-8 pe-4 text-start font-normal">#</th>
                <th class="px-4 text-start font-normal">description</th>
                <th class="px-4 text-start font-normal">date</th>
                <th class="px-4 text-start font-normal">time</th>
                <th class="px-4 text-start font-normal">staff</th>
                <th class="px-4 text-start font-normal">amount</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="row in transactions" :key="row.id" class="text-gray bg-white leading-8">
                <td class="rounded-tl-5 rounded-bl-5 order-b-16 order-gray/10 py-3 ps-8 pe-4">
                  {{ row.id }}
                </td>
                <td class="order-b-16 order-gray/10 px-4 py-3">
                  {{ row.description }}
                </td>
                <td class="order-b-16 order-gray/10 px-4 py-3">
                  {{ row.date }}
                </td>
                <td class="order-b-16 order-gray/10 px-4 py-3">
                  {{ row.time }}
                </td>
                <td class="order-b-16 order-gray/10 px-4 py-3">
                  {{ row.staff }}
                </td>
                <td class="order-b-16 order-gray/10 rounded-tr-5 rounded-br-5 px-4 py-3">
                  {{ row.amount }}
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
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

      <Keyboard />

      <div class="flex flex-col items-center justify-center gap-9.5 bg-white px-13 py-15.5">
        <CustomButton transparent buttonText="Query" />
        <CustomButton buttonText="Generate" />
      </div>

      <!-- <div class="bg-green/20 grid grid-cols-4 items-center gap-0">
        <p class="w-full px-10.5 py-6 text-2xl">c</p>
        <p class="text-primary w-full px-10.5 py-6 text-2xl">
          <ChevronLeft />
        </p>
        <p class="w-full px-10.5 py-6 text-2xl">
          <ChevronRight class="text-primary" />
        </p>
        <p class="w-full px-10.5 py-6 text-2xl">
          <img src="@/assets/dashboard/delete.png" alt="" />
        </p>
      </div>
      <div class="itemscenter grid grid-cols-4 gap-0">
        <p class="w-full bg-white py-4 ps-10.5 pe-4 text-3xl">1</p>
        <p class="w-full bg-white py-4 ps-10.5 pe-4 text-3xl">2</p>
        <p class="w-full bg-white py-4 ps-10.5 pe-4 text-3xl">3</p>
        <p class="bg-green/20 px-10 py-4 text-4xl">*</p>
      </div>
      <div class="itemscenter grid grid-cols-4 gap-0">
        <p class="w-full bg-white py-4 ps-10.5 pe-4 text-3xl">4</p>
        <p class="w-full bg-white py-4 ps-10.5 pe-4 text-3xl">5</p>
        <p class="w-full bg-white py-4 ps-10.5 pe-4 text-3xl">6</p>
        <p class="bg-green/20 px-10 py-4 text-4xl">#</p>
      </div> -->
    </section>

    <!-- Modal -->
    <CustomModal :showModal="showModal" @closeModal="showModal = false"></CustomModal>
  </main>
</template>

<script>
import CustomButton from '@/components/CustomButton.vue'
import CustomModal from '@/components/CustomModal.vue'
import ChevronLeft from '@/components/dashboard/ChevronLeft.vue'
import ChevronRight from '@/components/dashboard/ChevronRight.vue'
import Keyboard from '@/components/dashboard/Keyboard.vue'

export default {
  name: 'DashboardHome',

  data() {
    return {
      transactions: [
        {
          id: 1,
          description: 'Wallet top up',
          date: '06 Aug, 2019',
          time: '12:24PM',
          staff: 'Admin',
          amount: 'NGN2000.00',
        },
        {
          id: 2,
          description: 'Top for 081359491**',
          date: '06 Aug, 2019',
          time: '10:44AM',
          staff: 'Jane',
          amount: 'NGN55.00',
        },
        {
          id: 3,
          description: 'Top for 080234578**',
          date: '06 Aug, 2019',
          time: '09:14AM',
          staff: 'Hannah',
          amount: 'NGN400.00',
        },
        {
          id: 4,
          description: 'IOU for 081478491**',
          date: '05 Aug, 2019',
          time: '01:30PM',
          staff: 'John',
          amount: 'BRM***K',
        },
        {
          id: 5,
          description: 'IOU for 081359491**',
          date: '05 Aug, 2019',
          time: '11:24AM',
          staff: 'Admin',
          amount: 'SAM***G',
        },
        {
          id: 6,
          description: 'IOU for 081359491**',
          date: '04 Aug, 2019',
          time: '12:45PM',
          staff: 'Jane',
          amount: 'NGN105.00',
        },
      ],
      selectedOption: 'Airtime',
      showModal: false,
    }
  },

  components: { CustomButton, ChevronLeft, ChevronRight, Keyboard, CustomModal },
}
</script>

<style></style>
