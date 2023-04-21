const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const postsDirectory = path.join(process.cwd(), 'posts');

var express = require('express');
var router = express.Router();

// Hello Worldを返却するAPI
router.get('/', function(req, res, next) {
    const fileNames = fs.readdirSync(postsDirectory);
    fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        };
    });

  res.json(fileNames)
});

module.exports = router;