module.exports = {
  pwa: {
    workboxPluginMode: 'InjectManifest',
    name: '.rukkie()',
    themeColor: '#FFFFFF',
    manifestCrossorigin: 'use-credentials',
    manifestOptions: {
      background_color: '#FFFFFF'
    }
  },

  runtimeCompiler: true,

  transpileDependencies: [
    'vuetify'
  ]
}
