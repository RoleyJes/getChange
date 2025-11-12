<script>
import ChevronLeft from '../ChevronLeft.vue'
import ChevronRight from '../ChevronRight.vue'

export default {
  name: 'RecentActivities',

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
    }
  },

  components: { ChevronLeft, ChevronRight },
}
</script>

<template>
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
</template>

<style lang="scss" scoped></style>
