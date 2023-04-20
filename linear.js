function linearSearch(array,key)
{
    for(let i=0;i<array.length;i++){
        if(array[i]==key)
            return i;
    }
    return -1;

}
console.log(Date.now());
var lresult=linearSearch([1,2,3,4,5,6,7,8,9,10],8);
console.log(Date.now() +" value "+ lresult);