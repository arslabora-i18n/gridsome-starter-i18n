// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Awesome Blog',
  siteDescription: 'Blog about awesome lists, collections of resources around a specific technology.',
  siteUrl: process.env.DEPLOY_URL || 'https://gridsome-i18n-starter.netlify.com',
  metadata: {
    author: 'Andrea Spada',
  },
  plugins: [
    {
      use: 'gridsome-plugin-typescript',
    },
    {
      use: 'gridsome-plugin-windicss',
      options: {
        // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
      },
    },
    {
      use: 'gridsome-plugin-i18n',
      options: {
        locales: ['en-us', 'it-it', 'pt-br'],
        pathAliases: {
          'en-us': 'en',
          'it-it': 'it',
          'pt-br': 'pt',
        },
        fallbackLocale: 'en-us',
        defaultLocale: 'en-us',
        enablePathRewrite: true,
        rewriteDefaultLanguage: true,
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Article',
        path: './content/articles/**/*.md',
        includePaths: ['./content/snippets'],
        remark: {
          plugins: [
            '@noxify/gridsome-remark-classes',
            {
              // add classes to markdown elements
              // 'heading[depth=1]': 'title',
              // 'heading[depth=2]': 'subtitle',
              // 'paragraph': 'text-normal font-serif'
            },
            'gridsome-remark-figure-caption',
            {
              // define classes for figure
              // figureClassName: "md-figure-block",
              // imageClassName: "md-figure-image",
              // captionClassName: "md-figure-caption",
            },
          ],
          // remark options
        },
      },
    },
  ],
  templates: {
    // Tag: '/tag/:id',
    Article: '/articles/:slug',
    // Blog: '/blog/:year/:month/:slug',
  },
  transformers: {
    remark: {
      // global remark options
    },
  },
};
