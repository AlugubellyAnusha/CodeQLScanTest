function test(testString){
  return new RegExp(testString.replace(/\$/g,"\\$"));
  //return new RegExp(testString.replace(/\\/g, "\\\\").replace(/\$/g, "\\$"));
  

  
}
