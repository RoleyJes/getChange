<template>
  <div class="grid h-screen grid-cols-[80px_1fr] grid-rows-[72px_1fr]">
    <CustomHeader class="sticky top-0 z-50 col-span-2" />
    <Sidebar class="overflow-y-auto" />
    <main class="bg-gray/10 overflow-y-auto ps-18 [overflow-anchor:none]">
      <RouterView />
    </main>
  </div>
</template>

<script>
import CustomHeader from './CustomHeader.vue'
import Sidebar from './Sidebar.vue'

export default {
  name: 'DashboardLayout',

  components: {
    CustomHeader,
    Sidebar,
  },
}
</script>

<style lang="scss" scoped></style>
