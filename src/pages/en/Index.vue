<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="Example image" src="~/favicon.png" width="135" />

    <h1>{{ $t('main.ui.enter') }}</h1>

    <pre>
    <span>Using vue-i18n ($i18n):</span>
    Current locale is {{ $i18n.locale }}

    {{ $i18n.availableLocales }}
    </pre>

    <p>
    <ul>
      <li v-for="page in $page.pages" :key="page.path">
        <g-link :to="page.path">{{ page.path }}</g-link>
      </li>
    </ul>
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
        >Gridsome Docs</a
      >
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
    </p>
  </Layout>
</template>

<page-query>
query Pages {
  pages: allPage {
    path
    context
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
