function BinarySearch(array,key)
{
    let left=0;
    let right=array.length-1;
    while(left<=right)
    {
        const mid=left+Math.floor(right-left/2);
        if(array[mid]==key)
            return mid;
        else if(array[mid]<key)
            left=mid+1;
        else    
            right=mid-1;

    }
    return -1;
}
console.log(Date.now());
var bresult=BinarySearch([1,2,3,4,5,6,7,8,9,10],8);
console.log(Date.now()+ " result "+bresult);