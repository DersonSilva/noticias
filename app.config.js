import "dotenv/config";

export default ({ config }) => ({
  ...config,
  extra: {
    ...config.extra, // mantém as chaves existentes
    GNEWS_API_KEY: process.env.GNEWS_API_KEY,
    GNEWS_BASE_URL: process.env.GNEWS_BASE_URL,
  },
  eas: {
    projectId: "2d511818-2162-4e8c-8fdd-bfefeb4ca103",
  },
});
