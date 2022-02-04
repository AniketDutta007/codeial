const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.createComment = function (req,res){
    Post.findById(req.body.post, function (err, post){
        if(post){
            Comment.create({
                content: req.body.content,
                post: post._id,
                user: req.user._id
            }, function (err, comment){
                if(comment){
                    post.comments.push(comment);
                    post.save();
                    res.redirect('/');
                }
            });
        }
    });
};