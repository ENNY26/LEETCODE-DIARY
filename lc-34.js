var searchRange = function(nums, target) {
    let lo = 0, high = nums.length - 1;
    let result = [-1, -1]; // Default if target not found

    // Find the first occurrence
    while (lo <= high) {
        let mid = Math.floor((lo + high) / 2);
        if (nums[mid] === target) {
            result[0] = mid; // Store first occurrence
            high = mid - 1;  // Continue searching left
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    // Reset pointers to find last occurrence
    lo = 0, high = nums.length - 1;
    
    while (lo <= high) {
        let mid = Math.floor((lo + high) / 2);
        if (nums[mid] === target) {
            result[1] = mid; // Store last occurrence
            lo = mid + 1;    // Continue searching right
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return result;
};
