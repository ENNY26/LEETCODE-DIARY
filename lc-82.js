var deleteDuplicates = function(head) {
    let dummy = {val:0, next:head}
    let prev = dummy
    let current = head

    while(current){
        if(current.next && current.val === current.next.val){
            const dupVal = current.val
            while(current &&current.val === dupVal ){
                current = current.next
            }
            prev.next = current
        }else{
            prev = prev.next 
            current = current.next
        }
    }
    return dummy.next
};