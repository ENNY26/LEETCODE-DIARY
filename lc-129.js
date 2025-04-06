var sumNumbers = function(root) {
    if (!root) return 0;

    // This helper builds up the number as we traverse down
    function dfs(node, pathSum) {
        if (!node) return 0;

        // Build the number so far
        let currentSum = pathSum * 10 + node.val;

        // If it's a leaf, return the number
        if (!node.left && !node.right) {
            return currentSum;
        }

        // Recur for left and right
        let leftSum = dfs(node.left, currentSum);
        let rightSum = dfs(node.right, currentSum);

        return leftSum + rightSum;
    }

    return dfs(root, 0);
};
