<template>
  <div v-if="isDesktop" class="flex flex-col relative rounded-lg border border-zinc-700 mt-6 md:mt-12">
    <div class="flex border-b border-zinc-700 text-white flex-1">
      <div id="previous" class="flex border-r border-zinc-700">
        <button @click.prevent="previous" title="Previous" class="flex flex-1 items-center justify-center cursor-pointer pattern-hover p-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-auto h-6">
            <path
              fill="currentColor"
              d="M8 11.3333L18.2227 4.51823C18.4524 4.36506 18.7628 4.42714 18.916 4.65691C18.9708 4.73904 19 4.83555 19 4.93426V19.0657C19 19.3419 18.7761 19.5657 18.5 19.5657C18.4013 19.5657 18.3048 19.5365 18.2227 19.4818L8 12.6667V19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19V5C6 4.44772 6.44772 4 7 4C7.55228 4 8 4.44772 8 5V11.3333Z"
            />
          </svg>
        </button>
      </div>
      <div id="play" class="flex border-r border-zinc-700">
        <button @click.prevent="togglePlay" :title="playing ? 'Pause' : 'Play'" class="flex flex-1 items-center justify-center cursor-pointer pattern-hover p-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-auto h-6">
            <path
              v-if="!playing"
              fill="currentColor"
              d="M19.376 12.4161L8.77735 19.4818C8.54759 19.635 8.23715 19.5729 8.08397 19.3432C8.02922 19.261 8 19.1645 8 19.0658V4.93433C8 4.65818 8.22386 4.43433 8.5 4.43433C8.59871 4.43433 8.69522 4.46355 8.77735 4.5183L19.376 11.584C19.6057 11.7372 19.6678 12.0477 19.5146 12.2774C19.478 12.3323 19.4309 12.3795 19.376 12.4161Z"
            />
            <path
              v-else
              fill="currentColor"
              d="M6 5H8V19H6V5ZM16 5H18V19H16V5Z"
            />
          </svg>
        </button>
      </div>
      <div id="next" class="flex border-r border-zinc-700">
        <button @click.prevent="next" title="Next" class="flex flex-1 items-center justify-center cursor-pointer pattern-hover p-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-auto h-6">
            <path
              fill="currentColor"
              d="M16 12.6667L5.77735 19.4818C5.54759 19.6349 5.23715 19.5729 5.08397 19.3431C5.02922 19.261 5 19.1645 5 19.0657V4.93426C5 4.65812 5.22386 4.43426 5.5 4.43426C5.59871 4.43426 5.69522 4.46348 5.77735 4.51823L16 11.3333V5C16 4.44772 16.4477 4 17 4C17.5523 4 18 4.44772 18 5V19C18 19.5523 17.5523 20 17 20C16.4477 20 16 19.5523 16 19V12.6667Z"
            />
          </svg>
        </button>
      </div>
      <div id="seek" class="flex flex-col flex-1 border-r border-zinc-700">
        <div class="flex w-full flex-1 border-b border-zinc-700 p-3">
          <div class="relative w-full flex-1 pattern rounded-full">
            <div :style="progressStyle" class="absolute top-0 left-0 bottom-0 h-full player-progress bg-red-900/50 pattern rounded-full" />
            <div @click="seek" class="absolute top-0 left-0 bottom-0 w-full h-full cursor-pointer player-seeker" title="Seek" />
          </div>
        </div>
        <div class="flex flex-1 justify-between items-center relative">
          <div class="flex flex-1 border-r border-zinc-700 px-3 py-1.5">
            <div>{{ currentSecondsConverted }}</div>
            <div class="flex-1 relative">
              <div class="player-title max-w-full overflow-hidden absolute">
                <p>You are listening to {{ currentTitle }}</p>
              </div>
            </div>
          </div>
          <div class="text-zinc-400 px-3 py-1.5">{{ durationSecondsConverted }}</div>
        </div>
      </div>
      <div id="mute" class="flex border-r border-zinc-700" v-show="!showVolume">
        <button @click.prevent="mute" title="Mute" class="flex flex-1 items-center justify-center cursor-pointer pattern-hover p-6">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-auto h-6">
            <path
              v-if="!muted"
              fill="currentColor"
              d="M2 16.0001H5.88889L11.1834 20.3319C11.2727 20.405 11.3846 20.4449 11.5 20.4449C11.7761 20.4449 12 20.2211 12 19.9449V4.05519C12 3.93977 11.9601 3.8279 11.887 3.73857C11.7121 3.52485 11.3971 3.49335 11.1834 3.66821L5.88889 8.00007H2C1.44772 8.00007 1 8.44778 1 9.00007V15.0001C1 15.5524 1.44772 16.0001 2 16.0001ZM23 12C23 15.292 21.5539 18.2463 19.2622 20.2622L17.8445 18.8444C19.7758 17.1937 21 14.7398 21 12C21 9.26016 19.7758 6.80629 17.8445 5.15557L19.2622 3.73779C21.5539 5.75368 23 8.70795 23 12ZM18 12C18 10.0883 17.106 8.38548 15.7133 7.28673L14.2842 8.71584C15.3213 9.43855 16 10.64 16 12C16 13.36 15.3213 14.5614 14.2842 15.2841L15.7133 16.7132C17.106 15.6145 18 13.9116 18 12Z"
              />
              <path
              v-else
              fill="currentColor"
              d="M5.88889 16.0001H2C1.44772 16.0001 1 15.5524 1 15.0001V9.00007C1 8.44778 1.44772 8.00007 2 8.00007H5.88889L11.1834 3.66821C11.3971 3.49335 11.7121 3.52485 11.887 3.73857C11.9601 3.8279 12 3.93977 12 4.05519V19.9449C12 20.2211 11.7761 20.4449 11.5 20.4449C11.3846 20.4449 11.2727 20.405 11.1834 20.3319L5.88889 16.0001ZM20.4142 12.0001L23.9497 15.5356L22.5355 16.9498L19 13.4143L15.4645 16.9498L14.0503 15.5356L17.5858 12.0001L14.0503 8.46454L15.4645 7.05032L19 10.5859L22.5355 7.05032L23.9497 8.46454L20.4142 12.0001Z"
            />
          </svg>
        </button>
      </div>
      <div id="volume">
        <button
          @click.prevent=""
          @mouseenter="showVolume = true"
          @mouseleave="showVolume = false"
          :title="volumeTitle"
          class="flex flex-1 items-center justify-center pattern-hover p-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="w-auto h-6">
            <path
              fill="currentColor"
              d="M19,13.805C19,14.462,18.462,15,17.805,15H1.533c-0.88,0-0.982-0.371-0.229-0.822l16.323-9.055C18.382,4.67,19,5.019,19,5.9V13.805z"
            />
          </svg>
          <input
            v-model.lazy.number="volume"
            v-show="showVolume"
            class="ml-4 cursor-pointer"
            type="range"
            min="0"
            max="100"
          />
        </button>
      </div>
    </div>
    <audio
      class="hidden"
      ref="audio"
      :src="currentFile"
      @timeupdate="update"
      @loadeddata="load"
      @pause="playing = false"
      @play="playing = true"
      @ended="autoplayNext"
      preload="auto"
    />
    <div class="playlist">
      <ul>
        <li
          v-for="(song, index) in playlist"
          :key="index"
          :class="[{ active: index === currentIndex }, 'flex justify-between px-6 py-3 pattern-hover border-b border-zinc-700 text-white cursor-pointer']"
          @click="selectSong(index)"
        >
          <span class="flex-1">{{ song.title }}</span>
          <span class="text-zinc-400">{{ song.length || "—" }}</span>
        </li>
        <li class="text-zinc-600 flex justify-between px-6 py-3">
          <span>端島 hashplayer()</span>
          <span> v1.0.0</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    autoPlay: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "Audio Title",
    },
  },
  data() {
    return {
      playlist: [
        { title: "Hashima Islands - Afternoon", file: "/CCS_Hashima_OST_Afternoon.ogg", length: "1:20", id: "ost-afternoon" },
        { title: "Hashima Islands - Dawn", file: "/CCS_Hashima_OST_Dawn.ogg", length: "1:35", id: "ost-dawn" },
        { title: "Hashima Islands - Dusk", file: "/CCS_Hashima_OST_Dusk.ogg", length: "1:50", id: "ost-dusk" },
        { title: "Hashima Islands - Morning", file: "/CCS_Hashima_OST_Morning.ogg", length: "1:20", id: "ost-morning" },
        { title: "Hashima Islands - Night", file: "/CCS_Hashima_OST_Night.ogg", length: "1:50", id: "ost-night" },
        { title: "Hashima Islands - Noon", file: "/CCS_Hashima_OST_Noon.ogg", length: "1:10", id: "ost-noon" },
      ],
      currentIndex: 0,
      currentSeconds: 0,
      durationSeconds: 0,
      loaded: false,
      playing: false,
      previousVolume: 35,
      volume: 100,
      showVolume: false,
      isDesktop: false
    };
  },
  computed: {
    currentFile() {
      return this.playlist[this.currentIndex]?.file || null;
    },
    currentTitle() {
      return this.playlist[this.currentIndex]?.title || "No Title";
    },
    currentSecondsConverted() {
      return this.convertTimeHHMMSS(this.currentSeconds);
    },
    durationSecondsConverted() {
      return this.convertTimeHHMMSS(this.durationSeconds);
    },
    muted() {
      return this.volume === 0;
    },
    percentComplete() {
      return parseInt((this.currentSeconds / this.durationSeconds) * 100);
    },
    progressStyle() {
      return { width: `${this.percentComplete}%` };
    },
    volumeTitle() {
      return `Volume (${this.volume}%)`;
    },
  },
  watch: {
    playing(value) {
      if (value) {
        return this.$refs.audio.play();
      }
      this.$refs.audio.pause();
    },
    volume(value) {
      this.$refs.audio.volume = value / 100;
    },
  },
  methods: {
    autoplayNext() {
      if (this.currentIndex < this.playlist.length - 1) {
        this.currentIndex++; // Move to the next song
      } else {
        this.currentIndex = 0; // Loop back to the first song
      }
      this.$refs.audio.load();
      this.$refs.audio.onloadeddata = () => {
        this.$refs.audio.play(); // Start playing the next song automatically
        this.playing = true;
      };
    },
    selectSong(index) {
      this.currentIndex = index;
      this.playing = false;
      this.$refs.audio.load();
      this.$refs.audio.onloadeddata = () => {
        this.$refs.audio.play();
        this.playing = true;
      };
    },
    convertTimeHHMMSS(val) {
      let hhmmss = new Date(val * 1000).toISOString().substr(11, 8);
      return hhmmss.indexOf("00:") === 0 ? hhmmss.substr(3) : hhmmss;
    },
    togglePlay() {
      if (!this.loaded) {
        this.load(); // Ensure the audio is loaded
      }
      this.playing = !this.playing;
    },
    load() {
      if (this.$refs.audio.readyState >= 2) {
        this.loaded = true;
        this.durationSeconds = parseInt(this.$refs.audio.duration);
      } else {
        this.$refs.audio.load();
        this.$refs.audio.onloadeddata = () => {
          this.loaded = true;
          this.durationSeconds = parseInt(this.$refs.audio.duration);
        };
      }
    },
    mute() {
      if (this.volume === 0) {
        this.volume = this.previousVolume || 100;
      } else {
        this.previousVolume = this.volume;
        this.volume = 0;
      }
      this.$refs.audio.volume = this.volume / 100;
    },
    seek(e) {
      if (!this.loaded) return;
      const bounds = e.target.getBoundingClientRect();
      const seekPos = (e.clientX - bounds.left) / bounds.width;
      this.$refs.audio.currentTime = parseInt(this.$refs.audio.duration * seekPos);
    },
    update(e) {
      this.currentSeconds = parseInt(this.$refs.audio.currentTime);
    },
    next() {
      if (this.currentIndex < this.playlist.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.$refs.audio.load();
      this.$refs.audio.onloadeddata = () => {
        this.$refs.audio.play();
        this.playing = true;
      };
    },
    previous() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.playlist.length - 1;
      }
      this.$refs.audio.load();
      this.$refs.audio.onloadeddata = () => {
        this.$refs.audio.play();
        this.playing = true;
      };
    },
  },
  mounted() {
    // Detect if the user is on a desktop browser
    this.isDesktop = !/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }
};
</script>
