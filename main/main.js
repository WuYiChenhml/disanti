module.exports = function main(string) {
  // Write your cade here
  var length = string.length;
  var num = Number(string);
  var result = 0;
    result = result + Math.floor(num / Math.pow(10,2));
    num = num - Math.floor(num / Math.pow(10,2)) * Math.pow(10,2);
  result = result + Math.floor(num / Math.pow(10,1));
    num = num - Math.floor(num / Math.pow(10,1)) * Math.pow(10,1);
  result = result + num
    
return result;
}
