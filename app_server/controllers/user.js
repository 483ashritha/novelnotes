module.exports.aboutus= function(req, res){
    res.render('aboutus',{title:'aboutus'});
  };
module.exports.topbooks = function(req, res){
    res.render('topbooks',{title:'topbooks'});
  };
    
module.exports.login = function(req, res){
    res.render('login',{title:'login'});
  };
module.exports.register = function(req, res){
    res.render('register',{title:'register'});
  };

  