<template>
  <CardImage class="col-span-2">
    <div class="w-full aspect-w-16 aspect-h-9">
      <iframe class="w-full" width="560" height="315" src="https://www.youtube.com/embed/QEFJjjM8w6A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardMain
    class="pattern-hover"
    color="group-hover:text-red-500"
    description="DayZ Modded Map inspired by Hashima, commonly called Gunkanjima (meaning Battleship Island), an abandoned island off Nagasaki."
    id="index-map-information"
    label="Map"
    title="Hashima Islands"
    url="/map/information"
  >
    <img src="~assets/images/hashima-map.png" width="5120" height="5120" alt="Hashima Islands Satellite" />
  </CardMain>
  <CardMain
    class="pattern-hover"
    color="group-hover:text-red-500"
    description="Retextured DayZ vanilla assets mod required for Hashima Islands."
    id="index-map-assets"
    label="Map"
    title="端島 Assets"
    url="/map/assets"
  >
    <img src="~assets/images/hashima-assets.png" width="5120" height="5120" alt="Hashima Islands Assets" />
  </CardMain>
  <CardMain
    class="rounded-b-none sm:rounded-bl-lg sm:rounded-br-lg pattern-hover col-span-2"
    color="group-hover:text-red-500"
    description="POWWWS Laboratory is a world-class research facility located in Hashima Islands. Passionate scientists and researchers are working to unravel the complexity of these pathologies and develop effective treatments and preventive measures to reduce their impact on society."
    id="index-powwws"
    external="true"
    label="Laboratory"
    title="POWWWS"
    url="https://poww.ws"
  >
    <img src="~assets/images/powwws.png" width="2560" height="1440" alt="POWWWS Laboratory" />
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
