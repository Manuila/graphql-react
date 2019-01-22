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
 mutation removePost($id: String!) {
    removePost(id: $id) {
      id
      title
      description
      date
      isPublished
      isLiked
    }
  }`;
