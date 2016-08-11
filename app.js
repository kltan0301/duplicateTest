function returnDuplicates(arr){
  var filterArr = [];
  arr.sort().forEach(function(element, index){
    if(index !== arr.lastIndexOf(element) && filterArr.indexOf(element) == -1){
      filterArr.push(element);
    }
  });
  return filterArr;
}
