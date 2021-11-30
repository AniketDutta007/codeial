// importing user database
const User = require('../models/user');
// render the profile page
module.exports.profile = function(req, res){
    return res.render('profile',{
        title: "Aniket Dutta",
        userName: "Aniket Dutta"
    });
};
// render the sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title: 'Codeial : SignUp'
    });
};
// render the sign in page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
        title: 'Codeial : SignIn'
    });
};
// get the sign up data
module.exports.create = function(req, res){
    console.log(req.body);
    if(req.body.password !== req.body.confirmPassword){
        return res.redirect('back');
    }
    User.findOne({email: req.body.email}, function(err, user){
        if(err){
            console.log('Error in finding the user in signing up');
            return;
        }
        if(!user){
            User.create(req.body, function(err, user){
                if(err){
                    console.log('Error in creating the user in signing up');
                    return;
                }
                return res.redirect('/users/sign-in');
            });
        }else{
            return res.redirect('back');
        }
    })
};
// sign in and create a session for the user
module.exports.createSession = function(req, res){

};