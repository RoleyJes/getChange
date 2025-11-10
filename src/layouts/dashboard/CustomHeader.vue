<template>
  <header
    class="border-gray/10 flex items-center justify-between border-b bg-white ps-2 pe-20 pt-3 pb-4"
  >
    <img src="@/assets/dashboard/logo.png" alt="logo" />
    <div class="flex items-center gap-2">
      <div class="bg-gray size-9 rounded-full"></div>

      <div class="">
        <p
          class="flex cursor-pointer items-center font-medium"
          @click="ShowDropdown = !ShowDropdown"
        >
          <span>Hi, {{ userName }} </span>
          <span class="text-2xl">&blacktriangledown;</span>
        </p>

        <!-- Dropdown -->
        <div
          v-if="ShowDropdown"
          class="shadow-dropdown absolute top-17 right-20 z-100 flex flex-col gap-2 bg-white px-4 py-6"
        >
          <template v-for="data in dropdownData" :key="data.id">
            <component
              :is="data.path ? 'RouterLink' : 'button'"
              v-bind="data.path ? { to: data.path } : { type: 'button', onClick: handleLogout }"
              :class="[
                'hover:bg-primary/5 rounded-5 flex cursor-pointer items-center gap-4 px-4 py-2 transition-all',
                data.class ? data.class : '',
              ]"
            >
              <component
                :is="data.icon ? 'img' : data.component"
                v-bind="
                  data.icon && { src: data.icon, alt: data.alt, class: 'size-4 object-contain' }
                "
              >
              </component>
              <span>{{ data.label }}</span>
            </component>
          </template>
          <!-- <RouterLink
            v-for="data in dropdownData"
            :key="data.id"
            :to="data.path"
            class="hover:bg-primary/5 rounded-5 flex items-center gap-4 px-4 py-2 transition-all"
          >
            <img :src="data.icon" :alt="data.alt" class="size-4 object-contain" />
            <span>{{ data.label }}</span>
          </RouterLink>
          <button
            @click="handleLogout"
            class="hover:bg-primary/5 rounded-5 flex cursor-pointer items-center gap-4 px-4 py-2 transition-all"
          >
            <img :src="logoutIcon" alt="logout icon" class="size-4 object-contain" />
            <span>Logout</span>
          </button> -->
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import clockIcon from '@/assets/dashboard/clock.png'
import settingsIcon from '@/assets/dashboard/settings.png'
import logoutIcon from '@/assets/dashboard/logout.png'
import { logout } from '@/utils/isAuthenticated'
import LogoutIcon from '@/components/dashboard/LogoutIcon.vue'

export default {
  name: 'CustomHeader',

  data() {
    return {
      logoutIcon,
      ShowDropdown: false,
      dropdownData: [
        {
          id: 1,
          path: '/',
          icon: clockIcon,
          alt: 'clock icon',
          label: 'Wallet History',
        },
        {
          id: 2,
          path: '/',
          icon: settingsIcon,
          alt: 'Settings icon',
          label: 'Settings',
        },
        {
          id: 3,
          component: 'LogoutIcon',
          label: 'Logout',
          class: 'hover:bg-red-500/5 text-red-500',
        },
      ],
    }
  },

  methods: {
    handleLogout() {
      logout()
      this.$router.push('/auth/login')
    },
  },

  computed: {
    userName() {
      const { name } = JSON.parse(localStorage.getItem('user'))
      return name
    },
  },

  components: { LogoutIcon },
}
</script>

<style lang="scss" scoped></style>
