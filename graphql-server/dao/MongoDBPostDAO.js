import Post from '../models/post';
import mongoose from 'mongoose';
import PostDAO from './PostDAO';

export default class MongoDBPostDAO extends PostDAO {

  constructor(mongoURI) {
    super();
    this.mongoURI = mongoURI;
  }

  get connect() {
    return mongoose.connect(this.mongoURI);
  }
  
  /**
   * @returns {Promise}
   */
  getAll() {
    return new Promise((resolve, reject) => {
      this.connect.then(() => Post
        .find()
        .sort('-date'))
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          mongoose.connection.close();
        });
    });
  }

  /**
   * @param {Object} newPost
   * @returns {Promise}
   */
  add(newPost) {
    return new Promise((resolve, reject) => {
      this.connect.then(() => {
        const post = new Post(newPost);
        return post.save();
      })
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          mongoose.connection.close();
        });
    });
  }

  /**
   * @param {String} id
   * @returns {Promise}
   */
  remove(id) {
    return new Promise((resolve, reject) => {
      this.connect.then(() => Post
        .findByIdAndRemove(id))
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          mongoose.connection.close();
        });
    });
  }

  /**
   * @param {Object} post
   * @returns {Promise}
   */
  update(post) {
    return new Promise((resolve, reject) => {
      this.connect.then(() => Post
        .findByIdAndUpdate(
          post.id,
          { 
            $set: {
              title: post.title,
              description: post.description,
              isLiked: post.isLiked,
              isPublished: post.isPublished
            }},
          { new: true }
        ))
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          mongoose.connection.close();
        });
    });
  }

  /**
   * @param {String} id
   * @returns {Promise}
   */
  getById(id) {
    return new Promise((resolve, reject) => {
      this.connect.then(() => Post
        .findOne({ _id: id }))
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          mongoose.connection.close();
        });
    });
  }
}