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
          mongoose.connection.close();
        })
        .catch((error) => {
          reject(error);
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
          mongoose.connection.close();
        })
        .catch((error) => {
          reject(error);
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
          mongoose.connection.close();
        })
        .catch((error) => {
          reject(error);
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
            title: post.title,
            description: post.description,
            isPublished: post.isPublished,
            isLiked: post.isLiked
          }
        ))
        .then((result) => {
          resolve(result);
          mongoose.connection.close();
        })
        .catch((error) => {
          reject(error);
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
          mongoose.connection.close();
        })
        .catch((error) => {
          reject(error);
          mongoose.connection.close();
        });
    });
  }
}