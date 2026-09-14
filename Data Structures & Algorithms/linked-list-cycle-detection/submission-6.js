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
     * @return {boolean}
     */
    hasCycle(head) {
        if (!head || !head.next) {
            return false;
        }
        let slow = head;
        let fast = head;
        //while (fast != null && slow != null). Checking slow != null is unnecessary (since fast is always ahead of slow), So, if fast.next succeds, slow.next is not needed. More importantly fast.next check is necessary for non-cyclic lists. Check fast.next != null before calling fast.next.next
        while(fast != null && fast.next != null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow == fast){
                return true;
            }
        }
        return false;
    }
}
