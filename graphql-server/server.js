import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import cors from 'cors';
import postSchema from './graphql/index';
import config from './config';

//must fix it
mongoose.connect(config.MONGO_URI);

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
