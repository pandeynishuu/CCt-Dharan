// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
]
// app:{
//   head:{
//     link:[
//       {
//         rel:"stylesheet",
//         href:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
//       }
//     ],
//     script:[
//       {
//         src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js",
//         type:"text/javascript"
//       }
//     ]
//   }
// }
})
