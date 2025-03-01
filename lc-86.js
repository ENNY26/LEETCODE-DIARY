var partition = function(head, x) {
    if (!head || !head.next) return head

    let beforeHead = new ListNode(0)
    let afterHead = new ListNode(0)

    let before = beforeHead;
    let after = afterHead;

    let current = head
    while(current){
        if(current.val < x){
            before.next = current;
            before = before.next
        } else{
            after.next = current
            after = after.next
        }
        current= current.next
    }
    after.next = null;
    before.next = afterHead.next

    return beforeHead.next


};