var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views')
app.set('view engine', 'jade')
app.listen(port)

console.log('imooc started on port ' + port)

//index page
app.get('/',function(req,res){
	res.render('index',{
		title:'imooc index'
	})
})

//detail page
app.get('/movie/:id',function(req,res){
	res.render('detail',{
		title:'imooc detail'
	})
})
//admin page
app.get('/admin/movie',function(req,res){
	res.render('admin',{
		title:'imooc 后台录入'
	})
})
//list page
app.get('/admin/list',function(req,res){
	res.render('list',{
		title:'imooc 列表'
	})
})