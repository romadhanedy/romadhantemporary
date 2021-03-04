export default {
  head: {
    title: process.env.APP_TITLE,
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: process.env.APP_DESC }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: process.env.APP_ICON }]
  },
  css: [
    "@/assets/css/fonts.css"
  ],
  plugins: [],
  components: true,
  buildModules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/dotenv",

    "nuxt-simple-line-icons"
  ],
  modules: [],
  globalName: "wrapper",
  globals: {
    id: globalName => `__${globalName}`,
  },
  build: {
    publicPath: "/public",
    loaders: {
      cssModules: {
        modules: {
          localIdentName: "__[hash:24]"
        }
      }
    }
  },
};