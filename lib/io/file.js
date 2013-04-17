/*
*/
var File;
var isTi = (typeof(Ti) === 'object');
if( isTi ){
	File = require('./ti/file');
}else{
	File = require('./node/file');
}
module.exports = File;
