/** @type {import('next').NextConfig} */


module.exports = {
  images:{
    domains:['profile.kowusu.me']
  },
  webpack(config) {
      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      })

      return config
    },

    typescript:{
      ignoreBuildErrors:true
    }
}