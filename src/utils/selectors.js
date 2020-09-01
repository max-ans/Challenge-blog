export const getPostsByCategory = (category, postsData) => {
  if (category === 'Accueil') {
    return postsData;
  }
  return postsData.filter((post) => post.category === category);
};

export const getPostBySlug = (slug, postData) => postData.find((post) => post.slug === slug);
