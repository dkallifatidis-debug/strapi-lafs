module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          endpoint: env("AWS_ENDPOINT"),
          baseUrl: env("AWS_CDN_URL", "https://kalva-mediar2.kalva.gr"),
          region: env("AWS_REGION", "auto"),
          credentials: {
            accessKeyId: env("AWS_ACCESS_KEY_ID"),
            secretAccessKey: env("AWS_SECRET_ACCESS_KEY"),
          },
        },
        params: {
          Bucket: env("AWS_BUCKET"),
          ACL: 'public-read',
        },
      },
    },
  },
});
