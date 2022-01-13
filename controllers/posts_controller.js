// importing user database
const Post = require('../models/post');
// create post
module.exports.createPost = function (req, res) {
    console.log(req.body);
    console.log(req.user);
    // return res.redirect('/');
    Post.create({
        content: req.body.content,
        user: req.user._id
    }, function (err, post) {
        if(err){
            console.log('Error in creating post');
            return;
        }
        return res.redirect('back');
    });
};