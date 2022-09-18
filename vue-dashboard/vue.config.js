const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  chainWebpack: config => {
    config.optimization.delete("splitChunks");
    config
      .plugin("module-federation-plugin")
      .use(require("webpack").container.ModuleFederationPlugin, [{
        remotes: {
          "notifications": "notifications@/notifications/remoteEntry.js"
        },
        shared: {
          "vue": {
            eager: true,
            singleton: false
          },
          "vuetify": {
            eager: true,
            singleton: false
          }
        }
      }])
  },
  transpileDependencies: [
    'vuetify'
  ]
})
