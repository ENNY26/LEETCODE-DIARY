var twoSum = function(nums, target) {
    const hashtable = new Map()
    for(let i = 0; i < nums.length; i++){
        const diff = target - nums[i]
        if (hashtable.has (diff)){
            return [hashtable.get(diff), i]
        } 
        hashtable.set(nums[i], i)
    }
    return []
};        
