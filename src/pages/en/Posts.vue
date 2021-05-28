<template>
  <Layout>
    <h1>Posts</h1>

    <ul>
      <li
        v-for="post in $page.posts.edges"
        :key="post.node.id"
        :post="post.node"
      >
        <div class="flex flex-row">
          <span class="flex-1"
            >({{ post.node.lang }}) {{ post.node.title }}</span
          >
          <span class="flex-1">{{ post.node.path }}</span>
          <span class="flex-1">{{ post.node.slug }}</span>
        </div>
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
        slug
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
