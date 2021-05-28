<template>
  <Layout>
    <h1>Pages</h1>

    <ul>
      <li v-for="page in $page.pages" :key="page.path">
        <g-link :to="page.path">{{ page.path }}</g-link>
      </li>
    </ul>
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
    title: 'Pages'
  }
};
</script>
