/*An array is a collection of items stored at contiguous memory locations.
For storing information in a linear fashion
Suitable for applications that require frequent searching

map ,filter, reduce, concat, slice, splice

Array -Big O time complexity
instert/remoe from end-O(1)
insert/remove from beginning-O(n)  -reset index takes time
Access-O(1)
Search -O(n)
push/pop -O(1)
shift/unshift/concat/slice/splice-O(n)
forEach/map/filter/reduce-O(n)

*/
const arr=[1,2,3]
const arr1 = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
const indx=arr.indexOf(2)
console.log(arr[indx+1]);
arr.push(4); // add value
console.log(arr1);
arr.unshift(0);  //add 0 in first index
arr.pop(); //remove last value
arr.shift(); //remove first value

console.log(arr);
