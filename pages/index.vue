<template>
  <CardImage class="col-span-2">
    <div class="w-full aspect-w-16 aspect-h-9">
      <iframe class="w-full" width="560" height="315" src="https://www.youtube.com/embed/v1waKj2u4Zo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardMain
    class="rounded-b-none sm:rounded-bl-lg sm:rounded-br-none pattern-hover"
    color="group-hover:text-red-500"
    description="DayZ Modded Map inspired by Hashima, commonly called Gunkanjima (meaning Battleship Island), a abandoned island off Nagasaki."
    id="index-map-information"
    label="Map"
    title="Hashima Islands"
    url="/map/information"
  >
    <img src="~assets/images/hashima-map.png" width="5120" height="5120" alt="Hashima Islands Satellite" />
  </CardMain>
  <CardMain
    class="rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg pattern-hover"
    color="group-hover:text-red-500"
    description="Retextured DayZ vanilla assets mod required for Hashima Islands."
    id="index-map-assets"
    label="Map"
    title="端島 Assets"
    url="/map/assets"
  >
    <img src="~assets/images/hashima-assets.png" width="5120" height="5120" alt="Hashima Islands Assets" />
  </CardMain>
</template>
<script>
  export default {
    mounted() {
      this.$nextTick(() => {
      })
    },
    beforeRouteLeave(to, from, next) {
      setTimeout(function() {
        next()
      }, 173)
    }
  }
</script>
