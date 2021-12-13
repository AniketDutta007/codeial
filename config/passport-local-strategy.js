const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
// authentication using passport
passport.use(new LocalStrategy({
        usernameField: 'email'
    },
    function(email, password, done){
        // find a user and establish the identity
        User.findOne({email: email},function(err,user){
            if(err){
                console.log('Error in finding user ---> Passport');
                return done(err);
            }
            if(!user || user.password != password){
                console.log('Invalid Username/Password');
                return done(null, false);
            }
            return done(null, user);
        });
    }
));
// serializing the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user, done){
    done(null,user.id);
});
// deserializing the user from the key in the cookies
passport.deserializeUser(function(id,done){
    User.findById(id,function(err,user){
        if(err){
            console.log('Error in finding user ---> Passport');
            return done(err);
        }
        return done(null,user);
    });
});
// check if the user is authenticated
passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    return res.redirect('/users/sign-in');
};
// set identity of the authenticated to make it accessible to the views
passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        res.locals.user = req.user;
    }
    next();
}
passport.checkSignIn = function(req,res,next){
    if(req.isAuthenticated()){
        return res.redirect('/');
    }
    next();
};
module.exports = passport;