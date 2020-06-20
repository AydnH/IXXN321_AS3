require('dotenv').config(); 
const AWS = require('aws-sdk');

// Configuring AWS
AWS.config = new AWS.Config({
  accessKeyId: process.env.S3_KEY, 
  secretAccessKey: process.env.S3_SECRET, 
  region: process.env.BUCKET_REGION, 
});

// Creating a S3 instance
const s3 = new AWS.S3();
 
const Bucket = process.env.BUCKET_NAME;

// pre-signed URLs use the AWS SDK s3.getSignedUrl method.
// getSignedUrl(operation, params, callback) ⇒ String
// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html

// GET URL Generator
function generateGetUrl(Key) {
  return new Promise((resolve, reject) => {
    const params = {
      Bucket,
      Key,
      Expires: 120 // 2 minutes
    };
    //  this case is getObject
    s3.getSignedUrl('getObject', params, (err, url) => {
      if (err) {
        reject(err);
      } else {
        // no errors we will send back the pre-signed GET URL
        resolve(url);
      }
    });
  });
}

// PUT URL Generator
function generatePutUrl(Key, ContentType) {
  return new Promise((resolve, reject) => {
    //  Bucket is retrieved from env bucket
    const params = { Bucket, Key, ContentType };
    // this case is putObject
    s3.getSignedUrl('putObject', params, function(err, url) {
      if (err) {
        reject(err);
      }
      // If there is no errors we can send back the pre-signed PUT URL
      resolve(url);
    });
  });
}

// export the methods for use in server
module.exports = { generateGetUrl, generatePutUrl };