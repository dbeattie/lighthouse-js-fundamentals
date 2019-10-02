function range(start, end, step){
  var someArray = []
  if(start < end && step > 0){
    someArray.push(start);
    for(var i = 1; someArray[i - 1] + step <= end; i++){
      someArray[i] = someArray[i -1] + step;
    } 
  }return someArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));