import MongoDBPostDAO from '../dao/MongoDBPostDAO';
import PostService from '../services/PostService';
import config from '../config';

const postDAO = new MongoDBPostDAO(config.MONGO_URI);
const postService = new PostService(postDAO);

export default postService;