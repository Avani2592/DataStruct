/*
Object key value pair
Not iterable 
Object(hash tables)
This data structure is also called map, dictionary or hash-table in other programming languages.


Object.keys(),Values(),entires methods

Insert-O(1)
Delete-O(1)
access-O(1)
Search-O(n)
Object.keys()-O(n)
Object.Values()-O(n)
Object.entries()-O(n)
*/
const obj = {
    prop1: "Hello!",
    prop3: function() {console.log("I'm a property dude!")
}}
console.log(obj.prop1) // "Hello!"
console.log(obj["prop1"]) // "Hello!"
obj.prop3() // "I'm a property dude!"
obj.prop4 = 125
obj["prop5"] = "The new prop on the block"
obj.prop6 = () => console.log("yet another example")

console.log(obj.prop4) // 125
console.log(obj["prop5"]) // "The new prop on the block"
obj.prop6() // "yet another example"