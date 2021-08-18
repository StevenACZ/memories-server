import express from 'express';

// Controllers
import { getPosts, createPost, updatePost } from '../controllers/posts.js';

const router = express.Router();

// {URL}/posts
router.route('/').get(getPosts).post(createPost);

// {URL}/posts/postId
router.route('/:postId').patch(updatePost);

export default router;
