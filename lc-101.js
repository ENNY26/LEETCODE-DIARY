var isSymmetric = function(root) {
    
    if(!root) return true
    return mirror(root.left, root.right)

};
    function mirror(left, right){
    if(!left && !right) return true
    if(!left || !right) return false
    if(left.val !== right.val) return false

    return mirror(left.left, right.right) && mirror(left.right, right.left)
    }