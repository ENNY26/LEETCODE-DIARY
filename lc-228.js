var summaryRanges = function(nums) {
    let result = []
   
   if (nums.length === 0) return result
     let start = nums[0]

    for(let i = 1; i <= nums.length; i++){
        if(i < nums.length && nums[i] === nums[i -1] + 1){
            continue;
        }
        
        if(start === nums[i -1 ]){
            result.push(start.toString())
        }else{
            result.push(start + "->" + nums[i-1])
        }
         if (i < nums.length) {
            start = nums[i];
        }
    }
    return result;
};

