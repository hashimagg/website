<template>
  <Bar
    id="back"
    title="Media / Videos"
    color="hover:text-red-500"
  />
  <CardImage class="col-span-2">
    <div class="w-full aspect-w-16 aspect-h-9">
      <iframe class="w-full" width="560" height="315" src="https://www.youtube.com/embed/v1waKj2u4Zo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardImage class="col-span-2">
    <div class="w-full aspect-w-16 aspect-h-9">
      <iframe class="w-full" width="560" height="315" src="https://www.youtube.com/embed/dH2PqVuYL58" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardImage class="col-span-2">
    <div class="w-full aspect-w-16 aspect-h-9">
      <iframe class="w-full" width="560" height="315" src="https://www.youtube.com/embed/pccyAtW3dUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardImage class="col-span-2">
    <div class="w-full aspect-w-16 aspect-h-9">
      <iframe class="w-full" width="560" height="315" src="https://www.youtube.com/embed/glMviq1KBvI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardImage class="col-span-2">
    <div class="w-full aspect-w-16 aspect-h-9">
      <iframe class="w-full" width="560" height="315" src="https://www.youtube.com/embed/GdN1GVsXvkU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardImage class="col-span-2">
    <div class="bg-indigo-900/50 pattern w-full">
      <CardCTA
        title="Join the Discord Channel"
        description="for full access on the development, updates, screenshots, videos and more."
        idPrimary="cta-discord"
        labelPrimary="Join the Discord"
        urlPrimary="https://discord.gg/Uap8rwekfA"
        idSecondary="cta-twitter"
        labelSecondary="Follow @hashimagg on Twitter"
        urlSecondary="https://twitter.com/hashimagg"
      />
    </div>
  </CardImage>
  <CardMain
    class="rounded-b-none sm:rounded-bl-lg sm:rounded-br-none pattern"
    color="group-hover:text-red-500"
    description="Overview and Development Status"
    id="more-map-information"
    label="Map"
    title="Information"
    url="/map/information"
  />
  <CardMain
    class="rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg pattern"
    color="group-hover:text-red-500"
    description="Landscapes and Closeups"
    id="more-media-screenshots"
    label="Media"
    title="Screenshots"
    url="/media/screenshots"
  />
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
