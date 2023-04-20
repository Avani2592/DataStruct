function recursiveBinarySearch(array,key,start,end)
{
    if(array.length==0)
        return -1;
    else{
        const mid= Math.floor(start+(end-start)/2);
        if(array[mid]>key)
           return  recursiveBinarySearch(array,key,start,mid-1);
        else if(array[mid]<key)    
           return   recursiveBinarySearch(array,key,mid+1,end);
        else
            return mid;
    }

   return -1;
}

console.log(Date.now());
var a=[1,2,3,4,5,6,7,8,9,10];
var rresult=recursiveBinarySearch(a,8,0,a.length);
console.log(Date.now()+ " result "+rresult);