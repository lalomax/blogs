const postsRouter = require('express').Router()
const Blog = require('../models/blog')

postsRouter.get('/', (request, response) => {
  Post.find({}).then(posts => {
    response.json(posts)
  })
})

postsRouter.get('/:id', (request, response, next) => {
  Post.findById(request.params.id)
    .then(post => {
      if (post) {
        response.json(post)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

postsRouter.post('/', (request, response, next) => {
  const blog = new Blog(request.body)

  blog.save()
    .then(result => {
      response.status(201).json(result)
    })
})

postsRouter.delete('/:id', (request, response, next) => {
  Post.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

postsRouter.put('/:id', (request, response, next) => {
  const body = request.body

  const post = {
    content: body.content,
    important: body.important,
  }

  Post.findByIdAndUpdate(request.params.id, note, { new: true })
    .then(updatedPost => {
      response.json(updatedPost)
    })
    .catch(error => next(error))
})

module.exports = postsRouter