 var setInfo=function (info){
 	var codeStr=JSON.stringify(info);
 	console.log(codeStr);
 	window.localStorage.setItem("userInfo",codeStr)
 	console.log(window.localStorage)
 }
 var getInfo=function(){
 	var info=window.localStorage.getItem("userInfo");
 	var reseult=JSON.parse(info);
 	return reseult
 }
 var removeInfo=function(name){
    window.localStorage.removeItem(name)
 }


export {setInfo,removeInfo,getInfo} 