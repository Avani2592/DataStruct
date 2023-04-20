/*
hold collection of values. Values must be unique
set contains mix of different data types
dynamically sized. don't have to declare size of set before creating it
set do not maintain an insertion order
sets are iterables. They can be used with a for loop
*/

const set=new Set([1,2,3])
set.add(4)
console.log(set.has(4))
set.delete(3)
console.log(set.size)
set.clear()
for(const item of set)
{
    console.log(item)
}