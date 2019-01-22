import { GraphQLNonNull, GraphQLString, GraphQLBoolean } from 'graphql';
import PostType from '../types';
import Post from '../../models/post';


const addPost = {
  type: PostType,
  args: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: GraphQLString,
    }
  },
  resolve(root, params) {
    const post = new Post(params);
    const newPost = post.save();
    if (!newPost) {
      throw new Error('Error');
    }
    return newPost;
  }
};


const removePost = {
  type: PostType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(root, params) {
    const removedPost = Post.findByIdAndRemove(params.id).exec();
    if (!removedPost) {
      throw new Error('Error');
    }
    return removedPost;
  }
};


const updatePost = {
  type: PostType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
    description: {
      type: new GraphQLNonNull(GraphQLString),
    },
    isPublished: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    isLiked: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
  },
  resolve(root, params) {
    return Post.update({
      _id: params.id
    },
    {
      title: params.title,
      description: params.description,
      isPublished: params.isPublished,
      isLiked: params.isLiked,
    });
  }
};

export default {
  addPost,
  removePost,
  updatePost,
};
