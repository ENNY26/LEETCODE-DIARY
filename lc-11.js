var maxArea = function(height) {
    let left = 0;                         
    let right = height.length - 1;        
    let max = 0;

    while (left < right) {
        let width = right - left;
        let minHeight = Math.min(height[left], height[right]);  
        let area = width * minHeight;                          
        max = Math.max(max, area);                              

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return max;
};
