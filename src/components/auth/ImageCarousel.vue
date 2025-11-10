<template>
  <img
    src="@/assets/auth/man.webp"
    class="absolute inset-0 -z-10 h-full w-full object-cover"
    alt="A man standing and smiling"
  />
  <div class="mx-auto flex h-full max-w-[477px] space-y-5 text-center text-2xl text-white">
    <div class="mt-auto mb-18">
      <p class="font-semibold">No Hazzles</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
      <div class="mt-8 flex items-center justify-center gap-3">
        <div class="bg-green size-2.5 rounded-full"></div>
        <div class="size-2.5 rounded-full bg-[#D0E8DF]"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageCarousel',
}
</script>

<style lang="scss" scoped></style>
