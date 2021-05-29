<template>
  <Layout>
    <h1>Articles</h1>

    <pre>
      {{ $context.locale }}
      {{ articles }}
    </pre>

    <ul>
      <li
        v-for="article in $page.articles.edges"
        :key="article.node.id"
        :post="article.node"
      >
        ({{ article.node.lang }}) / {{ article.node.title }}
      </li>
    </ul>
  </Layout>
</template>

<page-query>
query Article {
  articles: allArticle (filter: { lang: { eq: "en" }} ) {
    edges {
      node {
        id
        path
        title
        lang        
      }
    }    
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Articles'
  }
};
</script>
