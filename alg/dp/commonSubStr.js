// 最长公共子串
function comStr(str1,str2){
  // eslint-disable-linereturn 
  if(str1===null||str2===null||str1.length<1||str2.length<1){
    return 0
  }

  return process(str1,str1,0,0)
}
// 返回是不是头开始
function process(str1,str2,n1,n2){
  if(n1>=str1.length||n2>=str2.length){
    return [0,false]
  }

  if(str1[n1]===str2[n2]){

  }
}