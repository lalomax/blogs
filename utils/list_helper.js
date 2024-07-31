// const dummy = (blogs) => {
//   return 1;
// };

const totalLikes = (blogs) => {
  const reducer = (sum, blog) => {
    return sum + blog.likes;
  };
  // console.log(blogs.length)
  return blogs.length === 0 ? 0 : blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => { 
  if (blogs.length === 0) {
    return []
  }
  return blogs.reduce((a, b) => (a.likes > b.likes ? a : b))
}

module.exports = {
  // dummy,
  favoriteBlog,
  totalLikes,
};
