<template>
  <Layout>
    <h1>{{ $page.post.title }}</h1>
    <span>{{ $page.post.date }}</span>
    <div v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query allArticle ($path: String!) {
  post: article (path: $path) {
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
    };
  },
};
</script>

<style>

</style>
