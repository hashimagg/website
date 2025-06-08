<template>
  <Bar
    id="back"
    title="Media / Videos"
    color="hover:text-red-500"
  />
  <CardCTADownload />
  <CardImage class="col-span-2">
    <div class="w-full aspect-video">
      <iframe class="w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/843GDvtpMWM" title="Hashima Islands 端島 1.0.0 — DayZ Map" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardImage class="col-span-2">
    <div class="w-full aspect-video">
      <iframe class="w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/1r6onMKCYrA" title="Hashima Islands 端島 — DayZ Map Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardImage class="col-span-2">
    <div class="w-full aspect-video">
      <iframe class="w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/BVPAdBtAUDQ" title="2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardImage class="col-span-2">
    <div class="w-full aspect-video">
      <iframe class="w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/QEFJjjM8w6A" title="U0FLVVJB" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardImage class="col-span-2">
    <div class="w-full aspect-video">
      <iframe class="w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/Fl329viBObA" title="HORDESHAKE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardImage class="col-span-2">
    <div class="w-full aspect-video">
      <iframe class="w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/fXu_ZTwDKMM" title="死屍累累" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardImage class="col-span-2">
    <div class="w-full aspect-video">
      <iframe class="w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/v1waKj2u4Zo" title="Hashima Islands 端島 — DayZ Map Teaser #5 (feat. 回路, Kairo)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardImage class="col-span-2">
    <div class="w-full aspect-video">
      <iframe class="w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/dH2PqVuYL58" title="Hashima Islands 端島 — DayZ Map Teaser #4 (feat. 馬渡松子, Yū Yū Hakusho)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardImage class="col-span-2">
    <div class="w-full aspect-video">
      <iframe class="w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/pccyAtW3dUk" title="Hashima Islands 端島 — DayZ Map Teaser #3 (feat. Vincent Bell, Airport Love Theme)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardImage class="col-span-2">
    <div class="w-full aspect-video">
      <iframe class="w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/glMviq1KBvI" title="Hashima Islands 端島 — DayZ Map Teaser #2 (feat. Blur, FIFA 98)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardImage class="col-span-2">
    <div class="w-full aspect-video">
      <iframe class="w-full h-full" width="560" height="315" src="https://www.youtube.com/embed/GdN1GVsXvkU" title="Hashima Islands 端島 — DayZ Map Teaser #1 (feat. Teriyaki Boyz, Fast and Furious)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </CardImage>
  <CardCTADiscord />
  <CardMain
    class="rounded-b-none sm:rounded-bl-lg sm:rounded-br-none pattern"
    color="group-hover:text-red-500"
    description="Mision files for Hashima Islands"
    id="more-server-mission"
    label="Server"
    title="Mission Files"
    url="/server/mission"
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
