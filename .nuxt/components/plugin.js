import Vue from 'vue'

const components = {
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  IconsIcAperture: () => import('../../components/icons/IcAperture.vue' /* webpackChunkName: "components/icons-ic-aperture" */).then(c => c.default || c),
  IconsIcInfo: () => import('../../components/icons/IcInfo.vue' /* webpackChunkName: "components/icons-ic-info" */).then(c => c.default || c),
  IconsIcNext: () => import('../../components/icons/IcNext.vue' /* webpackChunkName: "components/icons-ic-next" */).then(c => c.default || c),
  LayoutsHeader: () => import('../../components/layouts/Header.vue' /* webpackChunkName: "components/layouts-header" */).then(c => c.default || c),
  SharedHero: () => import('../../components/shared/Hero.vue' /* webpackChunkName: "components/shared-hero" */).then(c => c.default || c),
  WaveBottom: () => import('../../components/wave/WaveBottom.vue' /* webpackChunkName: "components/wave-bottom" */).then(c => c.default || c),
  WaveTop: () => import('../../components/wave/WaveTop.vue' /* webpackChunkName: "components/wave-top" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
