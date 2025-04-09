var getMinimumDifference = function(root) {
    let prev = null;
    let minDiff = Infinity;

    function inorder(node) {
        if (!node) return;

        inorder(node.left);

        if (prev !== null) {
            let diff = node.val - prev;
            minDiff = Math.min(minDiff, diff);
        }
        prev = node.val;

        inorder(node.right);
    }

    inorder(root);
    return minDiff;
};

