var containsNearbyDuplicate = function(nums, k) {
    let window = new Set()
    let L = 0
    
    for(let R = 0; R < nums.length; R++){
          if(window.has(nums[R])){
        return true
    }
        window.add(nums[R])

        if(R - L >= k){   
            window.delete(nums[L])
            L += 1
        }
    }
    return false
};