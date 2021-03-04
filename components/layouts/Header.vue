<template>
  <header :class="$style.header">
    <a href="/">
    	<h1 :class="$style.logo">Romadhan.</h1>
    </a>
		<div :class="$style.navigation">
			<ul :class="$style.navigationUl">
				<li :class="$style.navigationUlLi">
					<nuxt-link to="/" :class="$style.navigationUlLiA">About Me.</nuxt-link>
				</li>
				<li :class="$style.navigationUlLi">
					<nuxt-link to="/" :class="$style.navigationUlLiA">Portfolio.</nuxt-link>
				</li>
				<li :class="$style.navigationUlLi">
					<nuxt-link to="/" :class="$style.navigationUlLiA">Skills.</nuxt-link>
				</li>
				<li :class="$style.navigationUlLi">
					<nuxt-link to="/" :class="$style.navigationUlLiA">Contact.</nuxt-link>
				</li>
				<li :class="$style.navigationUlLi">
					<nuxt-link to="/" :class="$style.navigationUlLiA">Support.</nuxt-link>
				</li>
			</ul>
		</div>
		<div :class="$style.mobileNavigation">
			<ul :class="$style.mobileNavigationUl">
				<li :class="$style.mobileNavigationUlLi">
					<nuxt-link to="/" :class="$style.mobileNavigationUlLiA" active="true">
						<ic-aperture />
						About Me
					</nuxt-link>
				</li>
				<li :class="$style.mobileNavigationUlLi">
					<nuxt-link to="/" :class="$style.mobileNavigationUlLiA">
						<ic-aperture />
						Portfolio
					</nuxt-link>
				</li>
				<li :class="$style.mobileNavigationUlLi">
					<nuxt-link to="/" :class="$style.mobileNavigationUlLiA">
						<ic-aperture />
						Skills
					</nuxt-link>
				</li>
				<li :class="$style.mobileNavigationUlLi">
					<nuxt-link to="/" :class="$style.mobileNavigationUlLiA">
						<ic-aperture />
						Contact
					</nuxt-link>
				</li>
				<li :class="$style.mobileNavigationUlLi">
					<nuxt-link to="/" :class="$style.mobileNavigationUlLiA">
						<ic-aperture />
						Support
					</nuxt-link>
				</li>
			</ul>
		</div>
  </header>
</template>

<script>
import IcAperture from "@/components/icons/IcAperture"
export default {
    components: {
			IcAperture
		}
}
</script>

<style module>
    .header {
			@apply py-2 px-24 flex justify-between items-center;
    }
    .logo {
			@apply text-6xl lowercase;
			font-family: creationdemo;
    }
		.navigation {
			
		}
		.navigationUl {
			
		}
		.navigationUlLi {
			@apply inline-block;
		}
		.navigationUlLiA {
			@apply px-4 font-semibold text-base lowercase;
			transition: all 0.4s ease-out 0s;
		}
		.navigationUlLiA:hover {
			color: #41b883;
		}
		.mobileNavigation {
			display: none;
		}

		@media screen and (max-width: 768px) {
			.header {
				@apply px-8
			}
		}

		@media screen and (max-width: 512px) {
			.header {
				@apply py-0 justify-center;
			}
			.logo {
				@apply text-5xl lowercase;
			}
			.navigation {
				display: none;
			}
			.mobileNavigation {
				display: block;
				position: fixed;
				z-index: 1;
				bottom: 0;
				left: 0;
				width: 100%;
				background-color: rgb(13, 18, 31);
			}
			.mobileNavigationUl {
				@apply py-2 px-4 grid grid-cols-5
			}
			.mobileNavigationUlLi {
			}
			.mobileNavigationUlLiA {
				@apply flex flex-col gap-1 justify-center items-center text-center text-xs;
			}
			.mobileNavigationUlLiA[active="true"] {
				color: #41b883;
			}
			.mobileNavigationUlLiA[active="true"] svg {
				fill: #41b883 !important;
				color: #41b883;
			}
		}
</style>