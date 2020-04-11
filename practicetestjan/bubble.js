function binarySearch(array, target){
    let low = 0;
    let high = array.length-1;
    while(low<high){
        let mid = Math.floor((low+high)/2);
        console.log('priting mid',mid)
        if(target == array[mid]){
            console.log('printing low mid and high',low ,mid, high);
            return mid;
        }
        else if(target>array[mid]){
            low = mid+1;
        }
        else{
            high = mid-1;
        }

    }
    return -1
}

binarySearch([10,8,12,5], 12);