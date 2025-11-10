<template>
  <nav class="flex flex-col items-center gap-20 bg-white pt-[4.1825rem] pb-6">
    <RouterLink
      v-for="route in routes"
      :key="route.path"
      :to="route.path"
      :class="[
        'w-full border-l-5 py-4',
        isActiveRoute(route.path) ? 'border-l-green' : 'border-l-transparent',
      ]"
    >
      <component
        :is="route.component"
        :to="route.path"
        :class="[isActiveRoute(route.path) ? 'text-green' : 'text-primary', 'ms-4']"
      ></component>
    </RouterLink>
  </nav>
</template>

<script>
import CardsIcon from '@/components/dashboard/CardsIcon.vue'
import HomeIcon from '@/components/dashboard/HomeIcon.vue'
import UsersIcon from '@/components/dashboard/UsersIcon.vue'

export default {
  name: 'Sidebar',

  data() {
    return {
      routes: [
        { path: '/', component: 'HomeIcon' },
        { path: '/user', component: 'UsersIcon' },
        { path: '/cards', component: 'CardsIcon' },
      ],
    }
  },

  methods: {
    isActiveRoute(routePath) {
      return routePath === this.$route.path
    },
  },

  components: { HomeIcon, UsersIcon, CardsIcon },
}
</script>

<style lang="scss" scoped></style>
