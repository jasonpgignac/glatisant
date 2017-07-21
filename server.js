var express = require('express'); 
var app = express();

console.log("Serving from", __dirname + '/dist');
var fs = require("fs"),
    path = require("path");

var p = __dirname + '/dist';

fs.readdir(p, function (err, files) {
    if (err) {
        throw err;
    }

    files.map(function (file) {
        return path.join(p, file);
    }).filter(function (file) {
        return fs.statSync(file).isFile();
    }).forEach(function (file) {
      console.log("Here's the files")
        console.log("%s (%s)", file, path.extname(file));
    });
});
app.use(express.static(__dirname + '/dist'));
app.listen(process.env.PORT || 8080);