var page="view/";
module.exports=function(app,dirname){
	app.get("/",function(req,res){
		res.sendFile(dirname+"/"+page);
	})
}
