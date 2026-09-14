/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        while(head != null){
            let nextTemp = head.next;
            console.log("nextTemp-",nextTemp);
            head.next = prev;
            console.log("head.next-",head.next);
            prev = head;
            console.log("prev-",prev);
            head = nextTemp;
            console.log("head-",head);
        }
        return prev;
    }
}
