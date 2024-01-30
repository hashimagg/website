<template>
  <Bar
    id="back"
    title="Map / Timeline"
    color="hover:text-red-500"
  />
  <CardDetail class="col-span-2">
    <Detail name="Disclaimer">
      The timeline is based on the real history of Hashima. However, some aspects of the content have been fictionalized for the purposes of gameplay. Events might change during development. Source:
      <NavigationLink
        color="hover:text-red-500"
        class="underline"
        external="true"
        id="colophon-gunkanjima-excursion"
        to="https://gunkanjima-excursion.com"
      >
        Gunkanjima Excursion
      </NavigationLink>
    </Detail>
  </CardDetail>
  <CardDetail class="col-span-2">
    <Detail name="1801-1920" />
    <img src="~assets/images/timeline-1.gif" alt="Hashima Islands" class="w-full rounded-lg mb-4 pixelated" width="1920" height="540" />
    <div class="space-y-2 pt-4">
      <Timeline
        color="bg-gray-100"
        year="1810"
      >
        Discovery of coal.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1887"
      >
        Opening of the first vertical shaft.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1890"
      >
        Mitsubishi purchases Hashima Coal Mine from Sonrokuro Nagashima for 100,000 yen and takes over its management as Takashima's subsidiary mine.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1891"
      >
        Commencement of coal mining.<br />
        Installation of distillation water machine for distributing drinking water and salt production to each household.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1893"
      >
        Commencement of excavation for the second vertical shaft.<br />
        Mitsubishi holds the opening ceremony for a private (corporate) elementary school.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1895"
      >
        Opening of the second vertical shaft.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1896"
      >
        Completion of the former third vertical shaft.
      </Timeline>
      <Timeline
      color="bg-orange-500"
        year="1897"
      >
        Implementation of the first land reclamation.<br />
        The first vertical shaft experiences an underground fire and is closed due to flooding caused by extinguishing the fire.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1899"
      >
        Implementation of the second land reclamation project.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1900"
      >
        Implementation of the third land reclamation project.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1901"
      >
        Implementation of the fourth land reclamation project.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1907"
      >
        Submarine cable between Takashima and Hashima is established.<br />
        Implementation of the fifth land reclamation project.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1911"
      >
        Steam and electricity are used together as the power source for the hoisting machinery used in the second and third vertical shafts.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1916"
      >
        Osaka Asahi Shimbun reports that Hashima resembles a massive warship with two smokestacks.<br />
        Construction of Japan's oldest reinforced concrete apartment building, Unit 30, is completed.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1917"
      >
        The first submarine cable line between Futago and Hashima is laid, enabling power transmission.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1918"
        last="true"
      >
        Construction of a 9-story reinforced concrete apartment building, the 'Nikyu-ken' company housing, is completed.<br />
        The transition from steam to electricity as the main power source is mostly completed.
      </Timeline>
    </div>
  </CardDetail>
  <CardDetail class="col-span-2">
    <Detail name="1921-1980" />
    <img src="~assets/images/timeline-2.gif" alt="Hashima Islands" class="w-full rounded-lg mb-4 pixelated" width="1920" height="540" />
    <div class="space-y-2 pt-4">
      <Timeline
        color="bg-gray-100"
        year="1921"
      >
        Nagasaki Nichinichi Shimbun introduces Hashima as 'Gunkan-jima' (Battleship Island), likening it to the battleship Tosa.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1922"
      >
        Completion of the landing pier (crane-type).
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1925"
      >
        Completion of the fourth vertical shaft (depth: 370 meters).
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1927"
      >
        Opening of a movie theater (Showa Hall).
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1930"
      >
        Deepening of the second vertical shaft and start of excavation.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1933"
      >
        Conversion of the loading pier to a steel structure.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1934"
      >
        Completion of the deepening of the second vertical shaft (depth: 636 meters).<br />
        Discontinuation of the salt production facility.<br />
        Abandonment of the third vertical shaft.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1935"
      >
        Opening of a private kindergarten on the rooftop of Building 20.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1936"
      >
        Construction of Hashima Shrine.<br />
        Operation begins in the second vertical shaft.<br />
        Operation of trolley cars in the underground tunnels of the second vertical shaft begins.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1941"
      >
        Record production of 411,100 tons of coal per year.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1942"
      >
        Fire occurs at the mouth of the second vertical shaft.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1944"
      >
        Construction of the Hokkoku Dormitory (Building 65).
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1945"
      >
        Sinking of the ship Hakushumaru while loading coal.<br />
        Flooding of the underground tunnels in the second vertical shaft.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1947"
      >
        Installation of public telephones.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1949"
      >
        Hashima gains national attention through documentary film 'Island Without Green' (1948).
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1953"
      >
        Completion of Hashima Nursery School operated by Takahama Village.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1954"
      >
        Completion of the first Hashima Dolphin Pier.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1955"
      >
        Merger of Takahama Village, Hashima, and Takashima Town, becoming Hashima Town.
      </Timeline>
      <Timeline
        color="bg-orange-500"
        year="1956"
      >
        Typhoon #9 occurs, causing damage to the Dolphin Pier, the southern waterfront, and the Hashima Pool.
      </Timeline>
      <Timeline
        color="bg-red-500"
        year="1957"
      >
        Hashima Elementary School and Hashima Middle School buildings are destroyed by fire.<br />
        Hashima Hospital and Building 65 (company housing) are partially burned.<br />
        Completion of Hashima Elementary School and Middle School.<br />
        Completion of the underwater pipeline project.<br />
        Decommissioning of the water supply ship Asagao-maru.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1958"
      >
        Restoration and completion of Hashima Hospital.<br />
        Swimming competition held at the newly completed Hashima South Pool.<br />
        Completion of the second Hashima Dolphin Pier.
      </Timeline>
      <Timeline
        color="bg-orange-500"
        year="1959"
      >
        Typhoon #14 occurs, causing significant damage to the Dolphin Pier, planting pier, and revetment wall.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1961"
      >
        Ships Tuya-maru and Sei-maru start operating.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1962"
      >
        Completion of the third Hashima Dolphin Pier.<br />
        Decommissioning of the ship Yugao-maru.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1963"
      >
        Greening campaign begins.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1964"
      >
        Completion of Hashima Public Hall.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1970"
      >
        Completion of the gymnasium, martial arts room, and cafeteria kitchen of Hashima Elementary School and Hashima Middle School.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1971"
      >
        Uncommon seismic movement detected. Autorities are notified.
      </Timeline>
      <Timeline
        color="bg-red-500"
        year="1973"
      >
        Major fire breaks out.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1974"
      >
        <img src="~assets/images/timeline-3.gif" alt="Hashima Islands" class="max-w-full rounded-lg mt-2 pixelated" width="400" height="254" />
        Closure of the Hashima mine.<br />
        Closing ceremonies held for the Hashima branch office and various facilities, as well as for Hashima Elementary School and Hashima Middle School.<br />
        The island becomes uninhabited.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1975"
      >
        The Japan Coast Guard installs the 'Hizen Hashima Lighthouse'.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1976"
      >
        Mitsubishi Materials donates Hashima to Takashima Town free of charge.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1977"
      >
        The remains of the Takashima Coal Mine are designated as a National Historic Site.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1978"
      >
        Registered as a UNESCO World Cultural Heritage site.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1979"
      >
        UNESCO withdraw decision and remove the World Cultural Heritage status.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1980"
        last="true"
      >
        <NavigationLink
          color="hover:text-red-500"
          class="underline"
          external="true"
          id="colophon-powwws"
          to="https://poww.ws"
        >
          POWWWS Laboratory
        </NavigationLink> under the Japanase Government concession purchases Hashima and 3 other uninhabited islands from Takashima.<br />
        Reconstruction of Hashima begins.
      </Timeline>
    </div>
  </CardDetail>
  <CardDetail class="col-span-2">
    <Detail name="1981-202_" />
    <img src="~assets/images/timeline-4.gif" alt="Hashima Islands" class="w-full rounded-lg mb-4 pixelated" width="1920" height="540" />
    <div class="space-y-2 pt-4">
      <Timeline
        color="bg-gray-100"
        year="1984"
      >
        Uncommon gas detected in air samples. Autorities are notified.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1985"
      >
        Implementation of the sixth land reclamation project.<br />
        Yasuo City construction started.<br />
        Hakuri City construction started.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1986"
      >
        Mutation of the Ophiocordyceps unilateralis Fungus discovered.<br />
        International autorities are notified.<br />
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1987"
      >
        Implementation of the seventh land reclamation project.<br />
        Hashima it's now called New Hashima.<br />
        Hashima Town it's now called New Hashima City.<br />
        Construction of bridges connecting to New Hashima started.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1988"
      >
        Hashima Islands are now part of Nagazaki.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1989"
      >
        Uncommon seismic movement detected. Autorities are notified.<br />
        Construction of POWWWS Laboratory started.<br />
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1991"
      >
        Completion of the northwest section of Path.<br />
        Construction of POWWWS Laboratory Diag started.<br />
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1994"
      >
        Completion of the southeast section of Path.<br />
        Yasuo City located in West Hashima is founded.<br />
        Completion of Eiko Stadium.
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="1996"
      >
        Haruki City located in East Hashima is founded.<br />
        Completion of Okubo Airport.
      </Timeline>
      <Timeline
        color="bg-red-500"
        year="1998"
      >
        Major fire breaks out in New Hashima.<br />
        Mutated fungus spread across the islands.<br />
        Special studies conducted by POWWWS in progress.
      </Timeline>
      <Timeline
        color="bg-red-500"
        year="1999"
      >
        Construction of the Safe Zone Compound started.<br />
        Air strikes hits the islands trying to contain the spread.
      </Timeline>
      <Timeline
        color="bg-red-500"
        year="2000"
      >
        Kodama City (Safe Zone Compound) is founded.<br />
        Communications stopped working.<br />
        Region declared as デスゾーン.<br />
      </Timeline>
      <Timeline
        color="bg-gray-100"
        year="202_"
        last="true"
      >
        ... <span class="blinking-cursor">|</span>
      </Timeline>
    </div>
  </CardDetail>
  <CardImage class="col-span-2">
    <div class="bg-indigo-900/50 pattern w-full">
      <CardCTA
        title="Join the Discord Channel"
        description="for full access on the development, updates, screenshots, videos and more."
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
