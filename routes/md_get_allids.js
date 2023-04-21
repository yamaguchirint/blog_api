const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

var express = require('express');
var router = express.Router();

const postsDirectory = path.join(process.cwd(), 'posts');


router.get('/', function (req, res, next) {
const fileNames = fs.readdirSync(postsDirectory);
console.log(fileNames)

let fn = fileNames.map((fileName) => {
    return {
        params: {
            id: fileName.replace(/\.md$/, ''),
        },
    };
});

res.json(fn);
});

module.exports = router;