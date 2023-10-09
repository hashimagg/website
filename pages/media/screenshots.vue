<template>
  <Bar
    id="back"
    title="Media / Screenshots"
    color="hover:text-red-500"
  />
  <CardImage class="col-span-2">
    <img src="~assets/images/hashima-1.png" width="2560" height="1440" alt="Hashima Islands Screenshot" />
  </CardImage>
  <CardImage class="col-span-2">
    <img src="~assets/images/hashima-2.png" width="2560" height="1440" alt="Hashima Islands Screenshot" />
  </CardImage>
  <CardImage class="col-span-2">
    <img src="~assets/images/hashima-3.png" width="2560" height="1440" alt="Hashima Islands Screenshot" />
  </CardImage>
  <CardImage class="col-span-2">
    <img src="~assets/images/hashima-4.png" width="2560" height="1440" alt="Hashima Islands Screenshot" />
  </CardImage>
  <CardImage class="col-span-2">
    <img src="~assets/images/hashima-5.png" width="2560" height="1440" alt="Hashima Islands Screenshot" />
  </CardImage>
  <CardImage class="col-span-2">
    <img src="~assets/images/hashima-6.png" width="2560" height="1440" alt="Hashima Islands Screenshot" />
  </CardImage>
  <CardImage class="col-span-2">
    <img src="~assets/images/hashima-7.png" width="2560" height="1440" alt="Hashima Islands Screenshot" />
  </CardImage>
  <CardImage class="col-span-2">
    <img src="~assets/images/hashima-8.png" width="2560" height="1440" alt="Hashima Islands Screenshot" />
  </CardImage>
  <CardImage class="col-span-2">
    <img src="~assets/images/hashima-9.png" width="2560" height="1440" alt="Hashima Islands Screenshot" />
  </CardImage>
  <CardImage class="col-span-2">
    <img src="~assets/images/hashima-10.png" width="2560" height="1440" alt="Hashima Islands Screenshot" />
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
    description="Teasers and Trailers"
    id="more-media-videos"
    label="Media"
    title="Videos"
    url="/media/videos"
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
