/*
* synchronous use file
*/
var File = function( filename, dir ){
	var appDirname;
	var filePath;
	var fs; // filesystem for node
	if( !dir.match(/^\//) ) appDirname = '/tmp/';
		appDirname += dir;
		fs = require('fs');
	if( !fs.existsSync( appDirname ) ){
		fs.mkdirSync( appDirname );
	}
	filePath = appDirname+'/'+filename;
	this.exists = function(){
		return fs.existsSync( filePath );
	}
	this.write = function(mode){
	}
	this.read = function(mode){
	}
};
module.exports = File;
