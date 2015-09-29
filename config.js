module.exports = function(){
	var modules = ['a', 'b', 'pageC'];
	var css = ['.default.css', '.small.css', '.medium.css', '.large.css'];
	var obj = {};
	for(var i = 0, l = modules.length; i < l; i++){
		var name = modules[i];
		obj[name] = {};
		obj[name].cssSrc = [];
		obj[name].jsSrc = 'src/js/' + name + '.js';
		obj[name].cssBuild = name + '.css';
		obj[name].jsBuild = name + '.js';
		obj[name].cssBuildPath = 'build/css/'
		obj[name].jsBuildPath = 'build/js/',
		obj[name].htmlBuildPath = './build/page'
		for(var j = 0, m = css.length; j < m; j ++){
			//var suffix = arr2[j];
			obj[name].cssSrc.push('src/css/'+ name + css[j])
		}
	}
	return obj
}