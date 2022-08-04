const router = require('express').Router();
const Blog = require('../models/Blogs');

router.get('', (req, res) => {
    Blog.find().then(blogs => {
        res.status(200).json(blogs);
    }).catch(err => {
        res.status(500).json({
            error: err.message
        })
    })
})

router.post('/register', async(req, res) => {
  
        const newBlog = new Blog({
            id:req.body.id,
            category: req.body.category,
            header: req.body.header,
            categoryId: req.body.categoryId,
            title: req.body.title,
            urlTitle: req.body.urlTitle,
            metaTitle: req.body.metaTitle,
            metaDesc: req.body.metaDesc,
            subTitles: req.body.subTitles,
            dateOfCreatingBlog: req.body.dateOfCreatingBlog,
            imgSrc: req.body.imgSrc,
            instaSimpleLink: req.body.instaSimpleLink,
            twitterSimpleLink: req.body.twitterSimpleLink,
            facebookSimpleLink: req.body.facebookSimpleLink,
            linkedinSimpleLink: req.body.linkedinSimpleLink,
            otherFacts: req.body.otherFacts,
            subTitleFacts: req.body.subTitleFacts,
            subTitleFactHeader: req.body.subTitleFactHeader,
            subTitleFactTitles: req.body.subTitleFactTitles,
            subTitleFactPoints: req.body.subTitleFactPoints,
            otherSubTitleFactHeader: req.body.otherSubTitleFactHeader,
            otherSubTitleFactTitles: req.body.otherSubTitleFactTitles,
            otherSubTitleFactPoints: req.body.otherSubTitleFactPoints,
            finalNotesHeader: req.body.finalNotesHeader,
            finalNotes: req.body.finalNotes,
            description: req.body.description
        })
        await newBlog.save().then(blog => {
            res.status(201).json(blog)
        }).catch((err) => {
            res.status(500).json({
                error: err.message
            })
        })
})


module.exports = router;