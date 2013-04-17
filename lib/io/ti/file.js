/*
*/
var File = function( filename, dir ){
	var appDirname;
	var filePath;
	var file; // fileObject for titanium
	var isTi = (typeof(Ti) === 'object');
	appDirname = Ti.Filesystem.applicationDataDirectory+'/'+dir;
	appDir = Ti.Filesystem.getFile(appDirname);
	if( !appDir.exists() ){
		appDir.createDirectory();
	}
	filePath = appDirname+'/'+filename;
	file = Ti.Filesystem.getFile( filePath );
	this.exists = function(){
		return file.exists();
	}
	this.write = function(mode){
	}
	this.read = function(mode){
	}
};
module.exports = File;
