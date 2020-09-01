// eslint-disable-next-line import/prefer-default-export
export const getPostsByCategory = (category, postsData) => {
  if (category === 'Accueil') {
    return postsData;
  }
  return postsData.filter((post) => post.category === category);
};
