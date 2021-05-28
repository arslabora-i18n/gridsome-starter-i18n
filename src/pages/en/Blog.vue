<template>
  <Layout>
    <h1>Posts</h1>

    <ul>
      <li
        v-for="entry in $page.blogs.edges"
        :key="entry.node.id"
        :post="entry.node"
      >
        ({{ entry.node.lang }}) {{ entry.node.title }}
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Blog {
  blogs: allBlog {
    edges {
      node {
        id
        path
        title                
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
