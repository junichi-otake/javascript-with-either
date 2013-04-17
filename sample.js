var File = require('./lib/io/file');
var mytxt = new File('my.txt', 'mydir');
if( mytxt.exists() ){
	// both nodejs and titanium mobile can execute the function.
}
