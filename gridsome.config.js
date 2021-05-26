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
          'en',
          'it',
          'pt'
        ],
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
          plugins: [
            '@noxify/gridsome-remark-classes', {
              // add classes to markdown elements
              // 'heading[depth=1]': 'title',
              // 'heading[depth=2]': 'subtitle',
              // 'paragraph': 'text-normal font-serif'
            },
            "gridsome-remark-figure-caption",
            {
              // define classes for figure
              // figureClassName: "md-figure-block",
              // imageClassName: "md-figure-image",
              // captionClassName: "md-figure-caption",
            },
          ],
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
