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

};
// sign in and create a session for the user
module.exports.createSession = function(req, res){

};