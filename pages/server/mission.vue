<template>
  <Bar
    id="back"
    title="Server / Mission"
    color="hover:text-red-500"
  />
  <CardImage class="col-span-2">
    <img src="~assets/images/hashima-mission.png" width="2560" height="1440" alt="Hashima Islands Mission Screenshot" />
  </CardImage>
  <CardImage class="col-span-2">
    <div class="bg-[#1b2838]/50 pattern w-full">
      <CardCTA
        title="Download Mission Files"
        description="Currently in development. Coming soon."
        idPrimary="cta-download-steam"
        labelPrimary="Download Mission Files"
        urlPrimary="https://github.com/hashimagg/mission"
        idSecondary="cta-download-twitter"
        labelSecondary="Follow @hashimagg on Twitter"
        urlSecondary="https://twitter.com/hashimagg"
      />
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
