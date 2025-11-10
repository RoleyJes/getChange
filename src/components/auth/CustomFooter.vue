<template>
  <footer class="mt-auto mb-8">
    <div class="flex text-[13px] text-gray justify-between items-center max-w-209 mx-auto">
      <p class="">
        By siging up, you agree to our <span class="text-green">Terms</span> and
        <span class="text-green">Privacy Policy</span>
      </p>
      <p class="">© {{ date }} Tinylabs. All rights reserved.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'CustomFooter',

  data() {
    return {
      date: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss" scoped></style>
