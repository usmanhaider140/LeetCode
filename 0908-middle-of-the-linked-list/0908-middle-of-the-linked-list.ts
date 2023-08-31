/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function middleNode(head: ListNode | null): ListNode | null {
    let totalNodes = 0;
    let current = head;
    while(current.next) {
        current = current.next;
        totalNodes++;
    }
   let middleLength = Math.ceil(totalNodes / 2);
   let middleNodes = head;
   while(middleLength--) {
       middleNodes = middleNodes.next
   }

   return middleNodes

};