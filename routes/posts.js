import express from 'express';

// Controllers
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

// {URL}/posts
router.route('/').get(getPosts).post(createPost);

export default router;
