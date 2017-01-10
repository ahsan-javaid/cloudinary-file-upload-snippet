var fs=require('fs')
var cloudinary = require('cloudinary');
var uuid = require('uuid-v4');
var Q = require('q');
cloudinary.config({
  "cloud_name": "your cloud name",
  "api_key": "your api key",
  "api_secret": "your api secret"
});
module.exports = function() {
  var upload={};
  upload.uploadFile= function(file) {  //base64 file string
    var myUUID = uuid();
    var data = new Buffer(file, 'base64');
    var deferred = Q.defer();
    fs.writeFile(myUUID,data, function(err) {
      if(err) {
        return deferred.reject(err);
      }
      cloudinary.uploader.upload(myUUID,function(result){
        fs.unlink(myUUID,function(err){
          if(err){
           return deferred.reject(err);
          }
          deferred.resolve(result);
        });
      },{ resource_type: "auto" })

    });
    return deferred.promise;
  }
  return upload;
}
