const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const mf = require('@angular-architects/module-federation/webpack');
const share = mf.share;

module.exports = {
  output: {
    publicPath: "auto",
    uniqueName: "mfe1",
    scriptType: 'text/javascript'
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({

      // For remotes (please adjust)
      name: "mfe1",
      // library: { type: "var", name: "mfe1" },
      filename: "remoteEntry.js",
      exposes: {
        './Module': './src/bootstrap.ts',
      },

      shared: share({
        "@angular/core": { requiredVersion: 'auto' },
        "@angular/common": { requiredVersion: 'auto' },
        "@angular/router": { requiredVersion: 'auto' },
        "rxjs": { requiredVersion: 'auto' }
      })
    }

    )
  ],
};