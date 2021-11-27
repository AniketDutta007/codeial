module.exports.profile = function(req, res){
    return res.render('profile',{
        title: "Aniket Dutta",
        userName: "Aniket Dutta"
    });
};