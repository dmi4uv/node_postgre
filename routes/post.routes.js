const Router = require('express')
const router = new Router
const postController = require('../controller/post.controller')

router.post('/post', postController.createPosts)
router.get('/post', postController.getPostsByUser)

module.exports = router