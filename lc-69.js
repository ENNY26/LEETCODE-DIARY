var mySqrt = function(x) {
    if(x < 2) return x

    let low = 1, high = Math.floor(x/2)
    let ans = 0

    while(low <= high){
    let mid = Math.floor((low+high)/2)
    let squared = mid * mid

    if(squared === x){
        return mid
    }else if(squared < x){
        ans = mid
        low = mid + 1
    }else{
        high = mid -1
      }

    }
return ans

};