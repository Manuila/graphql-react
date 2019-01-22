const config = {
  MONGO_URI: process.env.MONGO_URL || 'mongodb://localhost:32768/graphql',
  EXPRESS_PORT: process.env.PORT || 3000,
};

export default config;