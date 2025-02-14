function test(testString){
  return new RegExp(testString.replace(/\\/g, "\\\\").replace(/\$/g, "\\$"));
  

  
}
