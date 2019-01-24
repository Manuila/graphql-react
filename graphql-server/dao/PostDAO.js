export default class PostDAO {
  /**
   * @param {Object} newPost
   * @returns {Promise}
   */
  add(newPost) {
    throw new Error('Not implemented');
  }

  /**
   * @param {String} id
   * @return {Promise}
   */
  remove(id) {
    throw new Error('Not implemented');
  }

  /**
   * @param {String} id
   * @return {Promise}
   */
  getById(id) {
    throw new Error('Not implemented');
  }

  /**
   * @param {Object} post
   * @return {Promise}
   */
  update(post) {
    throw new Error('Not implemented');
  }

  /**
   * @return {Promise}
   */
  getAll() {
    throw new Error('Not implemented');
  }
}