var majorityElement = function(nums) {
    const map = new Map();
    
    // Count the occurrences of each number
    for (let number of nums) {
        if (map.has(number)) {
            map.set(number, map.get(number) + 1); // Increment the count
        } else {
            map.set(number, 1); // Set initial count to 1
        }
    }

    let majorElement = null;
    let maxCount = 0;

    // Find the number with the highest count
    for (let [num, count] of map) { // Iterate through the map
        if (count > maxCount) {
            maxCount = count;
            majorElement = num;
        }
    }

    return majorElement; // Return the majority element
};
