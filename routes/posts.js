import express from 'express';

// Controllers
import { getPosts } from '../controllers/posts.js';

const router = express.Router();

// {URL}/posts
router.get('/', getPosts);

export default router;
