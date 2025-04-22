while(queue.length > 0){
    let levelSum = 0
    let size = queue.length

    for(let i = 0; i<size; i++){
        let node = queue.shift()
        levelSum+=node.val

     if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }

    result.push(levelSum / size);
}

return result;
