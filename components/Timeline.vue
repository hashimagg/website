<template>
  <div class="relative group flex gap-x-2 hover:bg-zinc-950 rounded-xl">
    <div :class="last ? 'h-6 absolute left-0 top-0 flex w-6 justify-center' : '-bottom-6 absolute left-0 top-0 flex w-6 justify-center'">
      <div class="w-px bg-zinc-700" />
    </div>
    <div class="relative flex h-6 w-6 flex-none items-center justify-center bg-zinc-900 border border-zinc-700 rounded-full group-hover:bg-zinc-950">
      <div :class="color + ' h-2 w-2 rounded-full'"/>
    </div>
    <div class="relative -top-px flex pr-2 leading-2 text-zinc-400 space-x-4">
      <div class="text-white">{{ year }}</div>
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: [
      'color',
      'last',
      'year'
    ]
  }
</script>
