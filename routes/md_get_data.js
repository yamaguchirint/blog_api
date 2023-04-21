const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
// import {remark} from 'remark';
// import html from 'remark-html';
// import fs from 'fs';
// import path from 'path';
// import matter from 'gray-matter';
// import { remark } from 'remark';
// import html from 'remark-html';
//const {rm} = remark;
//const rmh = require('remark-html');
var marked=require('marked');

var express = require('express');
var router = express.Router();

const postsDirectory = path.join(process.cwd(), 'posts');

//import express from 'express';


// mdをGETで受け取る
router.get('/', function (req, res, next) {
    var id= req.query.idtext;
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    // const processedContent = await remark()
    //     .use(html)
    //     .process(matterResult.content);
    // const contentHtml = processedContent.toString();
    console.log("aaaaaaaaa");
    const processedContent = marked.parse(matterResult.content);
    const contentHtml = processedContent.toString();
    console.log("aaaaaaaaa");
    console.log(matterResult.content)

    res.json({id,contentHtml,...matterResult.data})
});

module.exports = router;

// async function getPostData(id) {
//     const fullPath = path.join(postsDirectory, `${id}.md`);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     // Use remark to convert markdown into HTML string
//     const processedContent = await rmp.remark()
//         .use(html)
//         .process(matterResult.content);
//     const contentHtml = processedContent.toString();


//     // Combine the data with the id
//     return {
//         id,
//         contentHtml,
//         ...matterResult.data,
//     };
// }