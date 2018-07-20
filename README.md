# gatsby-plugin-drip
Plugin that allows you to run Drip campaigns on your GatsbyJS powered website

Based off https://github.com/gabeskipio/gatsby-plugin-facebook-pixel

## Install
`yarn add gatsby-plugin-drip`
or
`npm install gatsby-plugin-drip`

## Usage
```
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-drip`,
    options: {
      accountId: 'drip account id',
    },
  },
]
```