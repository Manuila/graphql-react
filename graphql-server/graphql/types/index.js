import { 
  GraphQLObjectType, 
  GraphQLNonNull, 
  GraphQLID, 
  GraphQLString,
  GraphQLBoolean
}  from 'graphql';

import { GraphQLDateTime } from 'graphql-iso-date';


const postType = new GraphQLObjectType({
  name: 'post',
  fields: () => {
    return {
      id: { type: new GraphQLNonNull(GraphQLID) },
      title: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: GraphQLString },
      date: { type: new GraphQLNonNull(GraphQLDateTime) },
      isPublished: { type: new GraphQLNonNull(GraphQLBoolean) },
      isLiked: { type: new GraphQLNonNull(GraphQLBoolean) },
    };
  },
});

export default postType;