module.exports.profile = function(req, res){
    return res.render('profile',{
        userName: "Aniket Dutta"
    });
};