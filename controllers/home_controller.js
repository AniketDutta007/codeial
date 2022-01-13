// importing user database
const Post = require('../models/post');

module.exports.home = function (req, res) {
    console.log(req.cookies);
    Post.find({}).populate('user').exec(function (err, posts) {
        if (err) {
            console.log('Error in populating data.');
            return;
        }
        console.log(posts);
        return res.render('home', {
            title: 'Codeial : Home',
            posts: posts
        });
    });
    // return res.render('home', {
    //     title: 'Codeial : Home',
    //     posts: {}
    // });
};