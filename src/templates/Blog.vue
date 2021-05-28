<template>
  <Layout>
    <h1>{{ $page.post.title }}</h1>
    <span>{{ $page.post.date }}</span>
    <div v-html="$page.post.content" />
  </Layout>
</template>

<page-query>
query Blog ($path: String!) {
  post: blog (path: $path) {
    title
    date (format: "YYYY-M-D")
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style></style>
