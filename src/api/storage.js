 let setInfo=function (info){
 	var codeStr=JSON.stringify(info);
 	console.log(codeStr);
 	window.localStorage.setItem("userInfo",codeStr)
 	console.log(window.localStorage)
 }
let getInfo=function(){
 	var info=window.localStorage.getItem("userInfo");
 	var reseult=JSON.parse(info);
 	return reseult
 }
let removeInfo=function(name){
    window.localStorage.removeItem(name)
 }

let addInfo=function(name,code){
	let obj={};
	obj[name]=code;
	let userInfo=getInfo();
	userInfo.push(obj);
	setInfo(userInfo);
} 
export {setInfo,getInfo,addInfo} 