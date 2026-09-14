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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        //Memory Allocation:
        //┌────────────────┐
        //│ ListNode {     │
        //│   val: -1,     │ <─── dummy (Stays fixed at the start)
        //│   next: null   │ <─── tail  (Will move down the chain)
        //│ }              │
        //└────────────────┘
        let dummy = new ListNode(-1);
        let tail = dummy;
        while (list1 != null && list2 != null) {
            if (list1.val <= list2.val) { // 1 < = 1
                tail.next = list1;        //-1 -> list1
                list1 = list1.next;       //list1's first node is replaced with it's next node
            } else {
                tail.next = list2;
                list2 = list2.next;
            }
            tail = tail.next;
        }
        //Need the below block as above while loop will exit if list1 is null without checking list2
        if (list1 !== null) {
            tail.next = list1;
        } else if (list2 !== null) {
            tail.next = list2;
        }
        return dummy.next; //Can't use dummy, as it's first node's value is defined with -1 at the beginning

    }
}
