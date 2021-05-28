<template>
  <Layout>
    <h1>Posts</h1>

    <ul>
      <li
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      >
        ({{ edge.node.lang }}) {{ edge.node.title }}
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Post {
  posts: allPost {
    edges {
      node {
        id
        path
        title
        summary
        lang
      }
    }    
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Posts'
  }
};
</script>
