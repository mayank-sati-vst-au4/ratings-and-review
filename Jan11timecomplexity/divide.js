const divide = (list, target, low, high)=>{
while(low <= high) 
{
    mid = (low + high) / 2;
    if (target < list[mid]){
        high = mid - 1;
    }
    else if (target > list[mid]){
        low = mid + 1;
    }
    else break;
}
return target;
}

console.log(divide([1,2,4,6,5,3],5 , 1, 6));