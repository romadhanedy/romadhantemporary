<template>
  <div :class="$style.app">
    <div :class="$style.fadeIn">
      <Header />
      <Nuxt />
      <div :class="$style.bottomSpace"></div>
    </div>
    <wave-bottom :class="$style.waveBottom"/>
    <wave-top :class="$style.waveTop"/>
  </div>
</template>

<script>
import Header from "@/components/layouts/Header"
import WaveBottom from "@/components/wave/WaveBottom"
import WaveTop from "@/components/wave/WaveTop"
export default {
  components: {
    Header,
    WaveBottom,
    WaveTop
  }
}
</script>

<style module>
.app {
  position: relative;
  width: 100%;
  height: 100%;
}
.waveBottom {
  position: absolute;
  bottom: 0;
  left: 0;
  transform: scaleX(-1);
  z-index: -1;
}
.waveTop {
  display: none;
}

@media screen and (max-width: 512px) {
  .waveBottom {
    display: none;
  }
  .waveTop {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
}


.fadeIn {
  @apply pb-64;
  animation: fadeIn ease 1.5s;
  -webkit-animation: fadeIn ease 1.5s;
  -moz-animation: fadeIn ease 1.5s;
  -o-animation: fadeIn ease 1.5s;
  -ms-animation: fadeIn ease 1.5s;
}
@keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-moz-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-webkit-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-o-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@-ms-keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}
</style>
<style>
body {
  background-color: rgb(22, 28, 45) !important;
  @apply text-white;
}
</style>