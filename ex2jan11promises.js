
var fs = require('fs');

function makeFiles (fileName) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(fileName, 'writing message', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  });
}
function addFiles (fileName) {
  return new Promise (function (resolve, reject) {
    fs.appendFile(fileName, ' appended message', function (err, data) {
      if (err) {
        reject (err);
      }
      resolve(data);
    })
  });
}

makeFiles('my-file.txt').then(addFiles('my-file.txt'))
.then(function(data) {
  console.log('I did it');
})
.catch(function (err){
  console.log(err);
});
