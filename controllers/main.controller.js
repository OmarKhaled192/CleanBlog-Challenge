function index(req , res){
    res.render('pages/index.ejs' ,{title : "Home Page"})
}
function about(req , res){
    res.render('pages/about.ejs' ,{title : "About Page"})
}
function contact(req , res){
    res.render('pages/contact.ejs' ,{title : "Contact Page"})
}
function post(req , res){
    res.render('pages/post.ejs' ,{title : "Post Page"})
}
module.exports = {
    index , 
    about ,
    contact ,
    post
}