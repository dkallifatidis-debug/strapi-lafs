module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          endpoint: env("AWS_ENDPOINT"),
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
