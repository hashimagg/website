<template>
  <Bar title="Server / Information" />
  <CardImage class="col-span-2">
    <img src="~assets/images/hashima-server.png" width="2560" height="1440" alt="HASHIMA.GG Server Screenshot" />
  </CardImage>
  <CardDetail class="col-span-2">
    <Detail name="Name">
      HASHIMA.GG — Hashima Islands (Official)
    </Detail>
    <Detail name="Slots">
      40
    </Detail>
    <Detail name="IP">
      <Tag
        class="ml-2"
        color="bg-red-500"
      >
        Soon
      </Tag>
    </Detail>
    <Detail name="Region">
      —
    </Detail>
  </CardDetail>
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
