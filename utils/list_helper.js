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

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return []
  }
  return blogs.reduce((a, b) => {
    if (a.author === b.author) {
      a.blogs++
    } else {
      a.author = b.author
      a.blogs = 1
    }
    return a
  }, { author: '', blogs: 0 })
}

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return []
  }
  // Initialize variables to store the author with most likes and their total likes
  let mostLikedAuthor = null;
  let maxLikes = 0;

  // Use reduce to iterate through the data and accumulate author likes
  const authorLikes = blogs.reduce((acc, current) => {
    const author = current.author;
    acc[author] = (acc[author] || 0) + current.likes;
    // Check if current author has the most likes so far
    if (acc[author] > maxLikes) {
      mostLikedAuthor = author;
      maxLikes = acc[author];
    }
    return acc;
  }, {});

  // Return an object with the most liked author and their total likes
  return { author: mostLikedAuthor, likes: maxLikes };
}

module.exports = {
  // dummy,
  mostLikes,
  mostBlogs,
  favoriteBlog,
  totalLikes,
};
