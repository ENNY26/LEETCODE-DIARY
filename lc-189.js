var rotate = function(nums, k) {
    k = k % nums.length
    let index = nums.length - k
    let array = nums.splice(index, k)
    nums.unshift(...array)
};