<template>
  <div class="grid h-screen grid-cols-[80px_1fr] grid-rows-[72px_1fr]">
    <CustomHeader class="sticky top-0 z-50 col-span-2" />
    <DashboardSidebar class="overflow-y-auto" />
    <main class="bg-gray/10 overflow-y-auto ps-18 [overflow-anchor:none]">
      <RouterView />
    </main>
  </div>
</template>

<script>
import CustomHeader from './CustomHeader.vue'
import DashboardSidebar from './DashboardSidebar.vue'

export default {
  name: 'DashboardLayout',

  components: {
    CustomHeader,
    DashboardSidebar,
  },
}
</script>

<style lang="scss" scoped></style>
