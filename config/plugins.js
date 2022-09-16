module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('dhbpi3mo1'),
          api_key: env('546729143534343'),
          api_secret: env('cLjM-0JBISRsZW5SmNYEs5SBbuM'),
        },
       
      },
    },
    // ...
  });
  