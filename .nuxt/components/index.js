export { default as Logo } from '../../components/Logo.vue'
export { default as IconsIcAperture } from '../../components/icons/IcAperture.vue'
export { default as IconsIcInfo } from '../../components/icons/IcInfo.vue'
export { default as IconsIcNext } from '../../components/icons/IcNext.vue'
export { default as LayoutsHeader } from '../../components/layouts/Header.vue'
export { default as SharedHero } from '../../components/shared/Hero.vue'
export { default as WaveBottom } from '../../components/wave/WaveBottom.vue'
export { default as WaveTop } from '../../components/wave/WaveTop.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyIconsIcAperture = import('../../components/icons/IcAperture.vue' /* webpackChunkName: "components/icons-ic-aperture" */).then(c => c.default || c)
export const LazyIconsIcInfo = import('../../components/icons/IcInfo.vue' /* webpackChunkName: "components/icons-ic-info" */).then(c => c.default || c)
export const LazyIconsIcNext = import('../../components/icons/IcNext.vue' /* webpackChunkName: "components/icons-ic-next" */).then(c => c.default || c)
export const LazyLayoutsHeader = import('../../components/layouts/Header.vue' /* webpackChunkName: "components/layouts-header" */).then(c => c.default || c)
export const LazySharedHero = import('../../components/shared/Hero.vue' /* webpackChunkName: "components/shared-hero" */).then(c => c.default || c)
export const LazyWaveBottom = import('../../components/wave/WaveBottom.vue' /* webpackChunkName: "components/wave-bottom" */).then(c => c.default || c)
export const LazyWaveTop = import('../../components/wave/WaveTop.vue' /* webpackChunkName: "components/wave-top" */).then(c => c.default || c)
