const test1 = [1, 2, 3, 4];
const test2 = ['a', 'b', 'c', 'd'];

function zipList(list1, list2) {
  let i = 0;
  const arr = [];
  for (const lis of list1) {
    arr.push(lis);
    arr.push(list2[i]);
    i++;
  }
  return arr;
}
console.log(zipList(test1, test2));

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipListTheSimpleWay(test1, test2));
