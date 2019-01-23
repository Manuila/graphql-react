import { 
  GraphQLObjectType, 
  GraphQLNonNull, 
  GraphQLID, 
  GraphQLString,
  GraphQLBoolean
}  from 'graphql';

import { GraphQLDate } from 'graphql-iso-date';

// Post Type
const postType = new GraphQLObjectType({
  name: 'post',
  fields: function() {
    return {
      id: { type: new GraphQLNonNull(GraphQLID) },
      title: { type: new GraphQLNonNull(GraphQLString) },
      description: { type: GraphQLString },
      date: { type: new GraphQLNonNull(GraphQLDate) },
      isPublished: { type: new GraphQLNonNull(GraphQLBoolean) },
      isLiked: { type: new GraphQLNonNull(GraphQLBoolean) },
    };
  },
});

export default postType;