# cloudinary-file-upload-snippet
Upload file to cloudinary server using nodejs and get file url

##Usage
1. require the cloudinary.js file
2. call the function uploadFile, pass base64 file
3. add api key, secret and cloudname in cloudinary.js in cloudinary.config function
4. handle the returned promise, in then function and get file url