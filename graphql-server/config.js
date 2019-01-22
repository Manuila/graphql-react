const config = {
  MONGO_URI: process.env.MONGO_URL || 'mongodb://localhost:32769/graphql',
  EXPRESS_PORT: process.env.PORT || 3000,
};

export default config;