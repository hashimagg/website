<template>
  <CardImage class="col-span-2">
    <div class="w-full aspect-video">
      <iframe class="w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/1r6onMKCYrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardCTADownload />
  <CardImage>
    <div class=" w-full aspect-square rounded-full flex bg-red-600" />
  </CardImage>
  <CardText>
    <HeadingSans>
      Hashima Islands 端島
    </HeadingSans><br />
    <HeadingSerif class="text-5xl">
      DayZ Modded Map inspired by Hashima, commonly called Gunkanjima (meaning Battleship Island), an abandoned island off Nagasaki.
    </HeadingSerif>
  </CardText>
  <CardImage class="col-span-2">
    <img src="~assets/images/hashima-map.png" width="2560" height="2560" alt="Hashima Islands Satellite" class="w-full" />
  </CardImage>
  <CardCTADiscord />
  <CardMain
    class="pattern-hover col-span-2"
    color="group-hover:text-red-500"
    description="POWWWS Laboratory is a world-class research facility located in Hashima Islands. Passionate scientists and researchers are working to unravel the complexity of these pathologies and develop effective treatments and preventive measures to reduce their impact on society"
    id="index-powwws"
    external="true"
    label="Laboratory"
    title="POWWWS"
    url="https://poww.ws"
  >
    <img src="~assets/images/powwws.png" width="2560" height="1440" alt="POWWWS Laboratory" />
  </CardMain>
  <CardMain
    class="rounded-b-none sm:rounded-bl-lg sm:rounded-br-none pattern-hover"
    color="group-hover:text-red-500"
    description="Database with everything you need to know"
    id="index-database"
    external="true"
    label="About"
    title="端島 Database"
    url="https://db.hashima.gg"
  >
    <img src="~assets/images/hashima-database.png" width="5120" height="5120" alt="Hashima Islands Database" />
  </CardMain>
  <CardMain
    class="rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg pattern-hover"
    color="group-hover:text-red-500"
    description="Hashima Islands Official Goodies"
    id="index-shop"
    external="true"
    label="Extras"
    title="端島 Shop"
    url="https://shop.creepycrappy.show"
  >
    <img src="~assets/images/hashima-shop.png" width="5120" height="5120" alt="Hashima Islands Satellite" />
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
