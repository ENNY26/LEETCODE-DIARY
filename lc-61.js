/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    

    if (!head || !head.next || k === 0) return head

    let length = 1
    let tail = head 
    while( tail.next ){
    tail = tail.next
    length++
    }

    k = k % length;
    if (k === 0) return head

    let newTail = head 
    for (i = 0; i <length - k -1; i++){
        newTail = newTail.next
    }
    let newHead = newTail.next

    newTail.next = null
    tail.next = head

    return newHead
};