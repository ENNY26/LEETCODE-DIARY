var threeSum = function(nums) {
    let triplets = [];
    nums.sort((a, b) => a - b); // Step 1: Sort the array

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate elements

        let left = i + 1, right = nums.length - 1;
        
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                triplets.push([nums[i], nums[left], nums[right]]);
                
                // Skip duplicate values for left and right pointers
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++;  // Increase left to get a larger sum
            } else {
                right--; // Decrease right to get a smaller sum
            }
        }
    }
    
    return triplets;
};
