// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// Google analytics is enabled only if this OR environment variable by the same name is set
const GOOGLE_ANALYTICS_ID = undefined

// Configure plugins here
let plugins = [
  {
    use: 'gridsome-plugin-tailwindcss',
    options: {
      tailwindConfig: './tailwind.config.js',
      purgeConfig: {},
      presetEnvConfig: {},
      shouldPurge: false,
      shouldImport: true,
      shouldTimeTravel: true,
    },
  },
]

if (GOOGLE_ANALYTICS_ID || process.env.GRIDSOME_GOOGLE_ANALYTICS_ID) {
  plugins.push({
    use: '@gridsome/plugin-google-analytics',
    options: {
      id: GOOGLE_ANALYTICS_ID || process.env.GRIDSOME_GOOGLE_ANALYTICS_ID,
    },
  })
}

module.exports = {
  siteName: 'Open Graph Image Builder',
  // Default titleTemplate is '%s - <siteName>'
  // Overrided here to avoid having 'My Site Name - My Site Name' on homepage
  titleTemplate: '%s',
  // Default is './src/favicon.png'
  icon: './src/assets/img/favicon.png',
  plugins,
}
// All configuration options: https://gridsome.org/docs/config
