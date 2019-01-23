import express from 'express';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import postSchema from './graphql/index';
import config from './config';

const app = express();

// enable CORS on the server
app.use('*', cors());

app.use('/graphql', cors(), graphqlHTTP({
  schema: postSchema,
  rootValue: global,
  graphiql: true,
}));

app.listen(config.EXPRESS_PORT, () => {
  console.log(`Server is running on port ${config.EXPRESS_PORT}!`);
});
