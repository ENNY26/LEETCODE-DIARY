var kthSmallest = function(root, k) {
    function dfs(node) {
        if (!node) return null;

        const left = dfs(node.left);
        if (left !== null) return left;

        k--;
        if (k === 0) return node.val;

        return dfs(node.right);
    }

    return dfs(root);
};
/*
var kthSmallest = function(root, k) {
    function dfs(node){
        if(!node ) return null
        dfs(node.left)
        return node
        dfs(node.right) 
        k--
        if(k === 0){
            return node
        }
    }
};
*/
