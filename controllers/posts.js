import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (_req, res) => {
	try {
		const postMessages = await PostMessage.find();

		console.log(postMessages);

		res.status(200).json(postMessages);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createPost = async (req, res) => {
	const post = req.body;

	const newPost = new PostMessage(post);

	try {
		await newPost.save();

		res.status(201).json(newPost);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const updatePost = async (req, res) => {
	try {
		const { postId } = req.params;
		const post = req.body;

		if (!mongoose.Types.ObjectId.isValid(postId))
			return res.status(404).send('No post in with that id');

		const updatedPost = await PostMessage.findByIdAndUpdate(postId, post, {
			new: true,
		});

		res.json(updatedPost);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
