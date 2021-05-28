// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
module.exports = {
  siteName: 'Awesome Blog',
  siteDescription:
    'Blog about awesome lists, collections of resources around a specific technology.',
  siteUrl:
    process.env.DEPLOY_URL || 'https://gridsome-i18n-starter.netlify.com',
  metadata: {
    author: 'Andrea Spada'
  },
  plugins: [
    {
      use: 'gridsome-plugin-typescript'
    },
    {
      use: 'gridsome-plugin-windicss',
      options: {
        // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
      }
    },
    {
      use: 'gridsome-plugin-i18n',
      options: {
        locales: ['en', 'it'],
        fallbackLocale: 'en',
        defaultLocale: 'en',
        enablePathRewrite: true,
        rewriteDefaultLanguage: true
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Article',
        path: 'src/content/articles/**/*.md',
        includePaths: ['src/content/snippets']
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'src/content/posts/**/*.md',
        includePaths: ['src/content/snippets']
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Blog',
        path: 'src/content/blog/**/*.md',
        includePaths: ['src/content/snippets']
      }
    }
  ],
  templates: {
    Article: '/articles/:slug',
    Post: '/posts/:slug',
    Blog: '/blog/:slug'
  },
  transformers: {
    remark: {
      plugins: []
      // global remark options
    }
  }
};
