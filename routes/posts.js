import express from 'express';
import { createPost, deletePost, getPost, udpatePost } from '../controllers/postController.js'
const router = express.Router();

// Get all posts GET
router.get('/', getPosts);

// Get single post GET
router.get('/:id', getPost);

// Create new post POST
router.post('/', createPost);

// Update post PUT
router.put('/:id', udpatePost);

// Delete post DELETE
router.delete('/:id', deletePost);

export default router;