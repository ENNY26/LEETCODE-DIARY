var combinationSum = function(candidates, target) {
    let result = [];

    const backtrack = (index, path, sum) => {
        if (sum === target) {
            result.push([...path]);  
            return;
        }

        if (sum > target) return;

        for (let i = index; i < candidates.length; i++) {
            path.push(candidates[i]);
            backtrack(i, path, sum + candidates[i]);  
            path.pop();  
        }
    };

    backtrack(0, [], 0);
    return result;
};
