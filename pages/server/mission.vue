<template>
  <Bar
    id="back"
    title="Server / Mission"
    color="hover:text-red-500"
  />
  <CardImage class="col-span-2">
    <div class="bg-[#1b2838]/50 pattern w-full">
      <CardCTA
        title="Download Mission Files"
        description="Download Hashima Islands Mission Files on GitHub."
        idPrimary="cta-download-steam"
        labelPrimary="Mission Files"
        urlPrimary="https://github.com/hashimagg/mission"
        idSecondary="cta-download-x"
        labelSecondary="Follow @hashimagg on X"
        urlSecondary="https://x.com/hashimagg"
      />
    </div>
  </CardImage>
  <CardImage class="col-span-2">
    <img src="~assets/images/hashima-mission.png" width="2560" height="1440" alt="Hashima Islands Mission Screenshot" />
  </CardImage>
  <CardCTADiscord />
  <CardMain
    class="rounded-b-none sm:rounded-bl-lg sm:rounded-br-none pattern"
    color="group-hover:text-red-500"
    description="HASHIMA.GG — Hashima Islands (Official)"
    id="more-server-information"
    label="Server"
    title="Information"
    url="/server/information"
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
