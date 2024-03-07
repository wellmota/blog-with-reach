export const loadPosts = async () => {
  const postResponses = fetch("https://jsonplaceholder.typicode.com/posts");
  const photoResponses = fetch("https://jsonplaceholder.typicode.com/photos");
  const [posts, photos] = await Promise.all([postResponses, photoResponses]);
  const postsJson = await posts.json();
  const photosJson = await photos.json();
  const postsAndPhotos = postsJson.map((post, index) => {
    return {
      ...post,
      cover: photosJson[index].url,
    };
  });

  return postsAndPhotos;
};
