import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import query from './queries';
import mutation from './mutations';

const postSchema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: query,
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutation',
    fields: mutation,
  })
});

export default postSchema;