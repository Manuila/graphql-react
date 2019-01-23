import gql from 'graphql-tag';

export const GET_POSTS = gql`
  query {
    posts {
      id
      title
      description
      date
      isPublished
      isLiked
    }
  }`;

export const ADD_POST = gql`
  mutation addPost($title: String!, $description: String) {
    addPost(title: $title, description: $description) {
      id
      title
      description
      date
      isPublished
      isLiked
     }
  }`;

export const DELETE_POST = gql`
 mutation removePost($id: ID!) {
    removePost(id: $id) {
      id
      title
      description
      date
      isPublished
      isLiked
    }
  }`;

export const UPDATE_POST = gql`
 mutation updatePost($id: ID!, $title: String!, $description: String!, $isPublished: Boolean!, $isLiked: Boolean!) {
  updatePost(id: $id, title: $title, description: $description, isPublished: $isPublished, isLiked: $isLiked) {
    id
    title
    description
    date
    isPublished
    isLiked
  }
}`;

export const GET_POST_BY_ID = gql`
 mutation getPostById($id: ID!) {
  getPostById(id: $id) {
    id
    title
    description
    date
    isPublished
    isLiked
   }
 }`;