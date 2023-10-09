<template>
  <Bar
    id="back"
    title="Map / Information"
    color="hover:text-red-500"
  />
  <CardImage>
    <div class=" w-full aspect-w-1 aspect-h-1 rounded-full flex bg-red-600" />
  </CardImage>
  <CardText>
    <HeadingSans>
      About
    </HeadingSans><br />
    <HeadingSerif class="text-5xl">
      DayZ Modded Map inspired by Hashima, commonly called Gunkanjima (meaning Battleship Island), a abandoned island off Nagasaki.
    </HeadingSerif>
  </CardText>
  <CardImage class="col-span-2">
    <img src="~assets/images/hashima-map.png" width="2560" height="2560" alt="Hashima Islands Satellite" class="w-full" />
  </CardImage>
  <CardDetail class="col-span-2">
    <Detail name="Size">
      5 km2
    </Detail>
    <Detail name="Tier Zones">
      4
    </Detail>
    <Detail name="Contaminated Zones">
      1
    </Detail>
  </CardDetail>
  <CardImage class="col-span-2">
    <div class="bg-[#1b2838]/50 pattern w-full">
      <CardCTA
        title="Download Hashima Islands"
        description="Currently in development. Coming soon."
        idPrimary="cta-download-steam"
        labelPrimary="Subscribe on Steam Workshop"
        urlPrimary="https://steamcommunity.com/sharedfiles/filedetails/?id=2781560371"
        idSecondary="cta-download-twitter"
        labelSecondary="Follow @hashimagg on Twitter"
        urlSecondary="https://twitter.com/hashimagg"
      />
    </div>
  </CardImage>
  <CardText>
    <HeadingSans>
      Island
    </HeadingSans><br />
    <HeadingSerif class="text-5xl">
      West Hashima
    </HeadingSerif>
    <HeadingSans class="mt-3 block">
      West Hashima (西端島), aka lung (肺), is an island located West of New Hashima (新端島).
    </HeadingSans>
  </CardText>
  <CardDetail>
    <Detail name="City">
      Haruki City (春木市), is a city located in West Hashima (西端島).
    </Detail>
    <Detail name="POI">
      <div class="space-y-4">
        <div>
          Eiko Stadium (エイコースタジアム), is a football stadium located West of Haruki City (春木市).
        </div>
      </div>
    </Detail>
  </CardDetail>
  <CardText>
    <HeadingSans>
      Island
    </HeadingSans><br />
    <HeadingSerif class="text-5xl">
      East Hashima
    </HeadingSerif>
    <HeadingSans class="mt-3 block">
      East Hashima (東端島), aka lung (肺), is an island located East of New Hashima (新端島).
    </HeadingSans>
  </CardText>
  <CardDetail>
    <Detail name="City">
      Yasuo City (康夫市), is a city located in East Hashima (東端島).
    </Detail>
    <Detail name="POI">
      Okubo Airport (大久保空港), is an international airport located North of Yasuo City (康夫市).
    </Detail>
  </CardDetail>
  <CardText>
    <HeadingSans>
      Island
    </HeadingSans><br />
    <HeadingSerif class="text-5xl">
      New Hashima
    </HeadingSerif>
    <HeadingSans class="mt-3 block">
      New Hashima (新端島), aka heart (心臓), previously known as Hashima (端島), is an abandoned island off Nagasaki (長崎).
    </HeadingSans>
  </CardText>
  <CardDetail>
    <Detail name="City">
      New Hashima City (新端島市), is a city located in New Hashima (新端島).
    </Detail>
  </CardDetail>
  <CardText>
    <HeadingSans>
      Zone
    </HeadingSans><br />
    <HeadingSerif class="text-5xl">
      Path
    </HeadingSerif>
    <HeadingSans class="mt-3 block">
      Path (道), aka artery (動脈), is a buffer zone located Northwest of New Hashima (新端島).
    </HeadingSans>
  </CardText>
  <CardDetail>
    <Detail name="Complex">
      Tsukomogami Complex (付喪神), is a complex located in Path (道).
    </Detail>
    <Detail name="Complex">
      Shinkai Complex (神界), is a complex located in Path (道).
    </Detail>
  </CardDetail>
  <CardText>
    <HeadingSans>
      Zone
    </HeadingSans><br />
    <HeadingSerif class="text-5xl">
      Away
    </HeadingSerif>
    <HeadingSans class="mt-3 block">
      Away (遠さ), aka brain (脳), is a contaminated zone located Northwest of New Hashima (新端島).
    </HeadingSans>
  </CardText>
  <CardDetail>
    <Detail name="POI">
      <NavigationLink
        color="hover:text-red-500"
        class="underline"
        external="true"
        id="colophon-powwws"
        to="https://poww.ws"
      >
        POWWWS Laboratory
      </NavigationLink> Diag, is a testing site located in Away (遠さ).
    </Detail>
  </CardDetail>
  <CardText>
    <HeadingSans>
      Island
    </HeadingSans><br />
    <HeadingSerif class="text-5xl">
      Obake
    </HeadingSerif>
    <HeadingSans class="mt-3 block">
      Obake (おばけ), aka spirit (精神), is an island located Southeast of New Hashima (新端島).
    </HeadingSans>
  </CardText>
  <CardDetail>
    <Detail name="City">
      Kodama City (木魅), is a city located in Obake (おばけ).
    </Detail>
  </CardDetail>
  <CardDetail class="col-span-2">
    <Detail name="West Hashima (65%)">
      <div class="overflow-hidden rounded-full bg-zinc-800">
        <div class="h-3 rounded-full bg-red-600 text-white text-center" style="width: 65%" />
      </div>
    </Detail>
    <Detail name="East Hashima (65%)">
      <div class="overflow-hidden rounded-full bg-zinc-800">
        <div class="h-3 rounded-full bg-red-600 text-white text-center" style="width: 65%" />
      </div>
    </Detail>
    <Detail name="New Hashima (90%)">
      <div class="overflow-hidden rounded-full bg-zinc-800">
        <div class="h-3 rounded-full bg-red-600 text-white text-center" style="width: 90%" />
      </div>
    </Detail>
    <Detail name="Path (90%)">
      <div class="overflow-hidden rounded-full bg-zinc-800">
        <div class="h-3 rounded-full bg-red-600 text-white text-center" style="width: 90%" />
      </div>
    </Detail>
    <Detail name="Away (90%)">
      <div class="overflow-hidden rounded-full bg-zinc-800">
        <div class="h-3 rounded-full bg-red-600 text-white text-center" style="width: 90%" />
      </div>
    </Detail>
    <Detail name="Obake (40%)">
      <div class="overflow-hidden rounded-full bg-zinc-800">
        <div class="h-3 rounded-full bg-red-600 text-white text-center" style="width: 40%" />
      </div>
    </Detail>
    <Detail name="Economy (75%)">
      <div class="overflow-hidden rounded-full bg-zinc-800">
        <div class="h-3 rounded-full bg-red-600 text-white text-center" style="width: 75%" />
      </div>
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
    description="History and Events"
    id="more-map-timeline"
    label="Map"
    title="Timeline"
    url="/map/timeline"
  />
  <CardMain
    class="rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg pattern"
    color="group-hover:text-red-500"
    description="Credits and Thanks"
    id="more-extras-colophon"
    label="Extras"
    title="Colophon"
    url="/extras/colophon"
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
