/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
  N = N.toString(2);
  var counter = 0;
  var max = 0;
  for(let i=0;i<N.length;i++){
    if(N[i]==="0") counter++;
    if(N[i]==="1"&& !counter){
      counter = 1;
      continue;
    }
    if(N[i]==="1" && counter){
      if(max<counter) max=counter; 
      counter = 1;
    }
  }
  return max;
};