// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: 'gridsome-plugin-i18n',
      options: {
        locales: [
          'en-us',
          'it-it',
          'pt-br'
        ],
        pathAliases: {
          'en-us': 'en',
          'it-it': 'it',
          'pt-br': 'pt'
        },
        fallbackLocale: 'en-us',
        defaultLocale: 'en-us',
        enablePathRewrite: true,
        rewriteDefaultLanguage: true      
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/blog/**/*.md',
        typeName: 'Post',
        remark: {
          // remark options
        }
      }
    }
  ],
  transformers: {
    remark: {
      // global remark options
    }
  }
}
