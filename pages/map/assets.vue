<template>
  <Bar
    id="back"
    title="Map / Assets"
    color="hover:text-red-500"
  />
  <CardImage>
    <div class="w-full aspect-w-1 aspect-h-1 rounded-full flex justify-center items-center bg-white">
      <span class="flex flex-col justify-center items-center absolute top-2/4 left-2/4 text-black w-36 h-36 -translate-x-2/4 -translate-y-2/4 uppercase">
        <span class="text-3xl">
          — Assets —
        </span>
      </span>
    </div>
  </CardImage>
  <CardText>
    <HeadingSans>
      About
    </HeadingSans><br />
    <HeadingSerif class="text-5xl">
      Retextured DayZ vanilla assets mod required for Hashima Islands.
    </HeadingSerif>
  </CardText>
  <CardImage class="col-span-2">
    <div class="bg-[#1b2838]/50 pattern w-full">
      <CardCTA
        title="Download Hashima Islands Assets"
        description="—"
        idPrimary="cta-download-steam"
        labelPrimary="Subscribe on Steam Workshop"
        urlPrimary="https://steamcommunity.com/sharedfiles/filedetails/?id=3001202420"
        idSecondary="cta-download-x"
        labelSecondary="Follow @hashimagg on X"
        urlSecondary="https://x.com/hashimagg"
      />
    </div>
  </CardImage>
  <CardDetail class="col-span-2">
    <Detail name="Ammo">
      <img src="~assets/images/assets-ammo.png" width="1280" height="720" alt="Hashima Islands Ammo Screenshot" class="rounded-lg" />
    </Detail>
    <Detail name="Bag">
      <img src="~assets/images/assets-bag.png" width="1280" height="720" alt="Hashima Islands Bag Screenshot" class="rounded-lg" />
    </Detail>
    <Detail name="Beer">
      <img src="~assets/images/assets-beer.png" width="1280" height="720" alt="Hashima Islands Beer Screenshot" class="rounded-lg" />
    </Detail>
    <Detail name="Can">
      <img src="~assets/images/assets-can.png" width="1280" height="720" alt="Hashima Islands Can Screenshot" class="rounded-lg" />
    </Detail>
    <Detail name="Candy">
      <img src="~assets/images/assets-candy.png" width="1280" height="720" alt="Hashima Islands Candy Screenshot" class="rounded-lg" />
    </Detail>
    <Detail name="Clothing">
      <img src="~assets/images/assets-clothing.png" width="1280" height="720" alt="Hashima Islands Clothing Screenshot" class="rounded-lg" />
    </Detail>
    <Detail name="Drink">
      <img src="~assets/images/assets-drink.png" width="1280" height="720" alt="Hashima Islands Drink Screenshot" class="rounded-lg" />
    </Detail>
    <Detail name="Jar">
      <img src="~assets/images/assets-jar.png" width="1280" height="720" alt="Hashima Islands Jar Screenshot" class="rounded-lg" />
    </Detail>
    <Detail name="Medical">
      <img src="~assets/images/assets-medical.png" width="1280" height="720" alt="Hashima Islands Medical Screenshot" class="rounded-lg" />
    </Detail>
    <Detail name="Snack">
      <img src="~assets/images/assets-snack.png" width="1280" height="720" alt="Hashima Islands Snack Screenshot" class="rounded-lg" />
    </Detail>
    <Detail name="Tool">
      <img src="~assets/images/assets-tool.png" width="1280" height="720" alt="Hashima Islands Tool Screenshot" class="rounded-lg" />
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
    description="Overview"
    id="more-map-information"
    label="Map"
    title="Information"
    url="/map/information"
  />
  <CardMain
    class="rounded-b-lg sm:rounded-bl-none sm:rounded-br-lg pattern"
    color="group-hover:text-red-500"
    description="History and Events"
    id="more-map-timeline"
    label="Map"
    title="Timeline"
    url="/map/timeline"
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
