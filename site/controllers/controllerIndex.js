let controllerIndex={
    
    home: function(req,res, ){
        res.render('index',{usuario: req.session.user} )
        ;next();
    },
    carrito: function(req,res, next){
        res.render('carrito',{usuario: req.session.user} )
        ;next();
    },
    
    error: function(req,res,  ){
        res.render('error')
        ;next();
    },
    faq: function(req,res, ){
        res.render('faq') 
        ;next();
    },

}



module.exports= controllerIndex;