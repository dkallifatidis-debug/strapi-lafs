module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          endpoint: env("AWS_ENDPOINT"),
          baseUrl: env("AWS_CDN_URL", "https://pub-515f8a574da64a9b814056de131b7137.r2.dev"),
          region: env("AWS_REGION", "auto"),
          credentials: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_SECRET_ACCESS_KEY"),
          },
          forcePathStyle: true,
        },
        params: {
          Bucket: env("AWS_BUCKET"),
        },
      },
    },
  },
});
