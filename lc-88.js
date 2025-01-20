var merge = function(nums1, m, nums2, n) {
    let i = m-1
    let j = n-1
    let k = m+n-1
    
    
    while (j >= 0){
     let firstVal = nums1[i]
     let secondVal = nums2[j]
    
    if (firstVal >= secondVal){
        nums1[k] = firstVal
        k --
        i--
    }else{
        nums1[k] = secondVal
        k--
        j--
    }
    }
    }