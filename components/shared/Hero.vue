<template>
  <section :class="$style.hero">
    <div :class="$style.mobileProfileFrame">
      <img :class="$style.mobileProfile" :src="require('@/assets/img/profile.jpg')"></img>
    </div>
    <div :class="$style.profileFrame">
      <img :class="$style.profile" :src="require('@/assets/img/profile.jpg')"></img>
      <img :class="$style.profile" :src="require('@/assets/img/profile2.jpg')"></img>
    </div>
    <div :class="$style.brands">
      <p :class="$style.label">Web Developer, Tech Enthusiast</p>
      <h2 :class="$style.title">I build web apps for clients.</h2>
      <button :class="$style.button">Explore Works <ic-next/></button>
    </div>
  </section>
</template>

<script>
import IcNext from "@/components/icons/IcNext"
export default {
    components: {
      IcNext
    }
}
</script>

<style module>
    .hero {
			@apply py-12 px-48 flex flex-row-reverse justify-between items-center gap-6;
      perspective: 1000px;
    }
    .profileFrame {
      @apply rounded-3xl;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      transition: .4s all;
      transform: rotateY(-50deg);
    }
    .profileFrame:hover {
      transform: rotateY(150deg);
    }
    .profileFrame .profile:nth-child(2) {
      display: none;
    }
    .profileFrame:hover .profile:nth-child(1) {
      display: none;
    }
    .profileFrame:hover .profile:nth-child(2) {
      display: block;
    }
    .profile {
      @apply object-cover rounded-3xl;
      border: 5px solid #41b883;
      border-bottom: 10px solid #41b883;
      border-right: 10px solid #41b883;
      width: 400px;
      height: 400px;
      position: relative;
    }
    .profile:hover {
      border: none;
      border: 5px solid #41b883;
      border-top: 10px solid #41b883;
      border-left: 10px solid #41b883;
    }
    .mobileProfileFrame {
      display: none;
    }
    .brands {
      @apply w-7/12;
    }
    .label {
      @apply uppercase text-sm;
      font-family: inter bold;
      letter-spacing: 1.63px;
    }
    .title {
      @apply font-bold mt-8;
      font-size: 76px;
      line-height: 90px;
      font-family: inter extrabold;
    }
    .button {
      @apply mt-10 mb-2 flex items-center gap-4;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 1.63px;
      text-transform: uppercase;
      padding: 23px 30px;
      border-radius: 50rem;
      color: #ffffff;
      background-color: #41b883;
      transition: all 0.4s ease-out 0s;
    }
    .button:hover {
      @apply mt-8 mb-4;
    }

    @media screen and (max-width: 1024px) {
      .hero {
        @apply py-12 px-8 flex-col justify-start items-start
      }
      .profileFrame {
        display: none;
      }
      .mobileProfileFrame {
        display: block;
      }
      .mobileProfile {
        @apply rounded-3xl;
        border: 3px solid #41b883;
        width: 250px;
        height: 250px;
      }
      .brands {
        @apply w-full mt-8;
      }
      .title {
        font-size: 67px;
      }
		}

		@media screen and (max-width: 512px) {
      .hero {
        @apply py-6 px-8
      }
      .mobileProfile {
        width: 150px;
        height: 150px;
      }
      .brands {
      }
      .label {
        @apply text-xs;
      }
      .title {
        font-size: 50px;
        line-height: 65px;
      }
      .button {
        @apply mt-10 mb-2 text-xs flex items-center gap-4;
        font-weight: 700;
        letter-spacing: 1.63px;
        text-transform: uppercase;
        padding: 18px 25px;
      }
      .button:hover {
        @apply mt-8 mb-4;
      }
		}
</style>