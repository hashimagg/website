<template>
  <Bar
    id="back"
    title="Server / H.A.S ™"
    color="hover:text-red-500"
  />
  <CardImage class="col-span-2">
    <img src="~assets/images/has.gif" width="800" height="450" alt="H.A.S ™" class="w-full" />
  </CardImage>
  <CardDetail class="col-span-2">
    <Detail name="Location">
      New Hashima City
    </Detail>
    <Detail name="Slots">
      7
    </Detail>
    <Detail name="I want an ad!">
      <Tag
        class="ml-2"
        color="bg-red-500"
      >
        Not Available
      </Tag>
    </Detail>
  </CardDetail>
  <CardImage class="col-span-2">
    <div class="bg-indigo-900/50 pattern w-full">
      <CardCTA
        title="Join the Discord Channel"
        description="For full access on the development, updates, screenshots, videos and more."
        idPrimary="cta-discord"
        labelPrimary="Join the Discord"
        urlPrimary="https://discord.gg/Uap8rwekfA"
        idSecondary="cta-x"
        labelSecondary="Follow @hashimagg on X"
        urlSecondary="https://x.com/hashimagg"
      />
    </div>
  </CardImage>
  <CardMain
    class="rounded-b-none sm:rounded-bl-lg sm:rounded-br-none pattern"
    color="group-hover:text-red-500"
    description="Landscapes and Closeups"
    id="more-media-screenshots"
    label="Media"
    title="Screenshots"
    url="/media/screenshots"
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
