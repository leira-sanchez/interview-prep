/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
    // first merge two lists, then continue merging that list with the next one until you only have one list
    // create a helper that will merge two lists
    // from here, send the helper the next list
    if(lists.length === 0 || !lists) return null;
    
    while (lists.length > 1) {
        output = mergeTwoLists(lists.pop(), lists.pop());
        lists.unshift(output);
    }
    return lists[0];
};

function mergeTwoLists(l1, l2) {
    if(!l1 || !l2) return l1 ? l1 : l2;
    if(l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

// tests : 
mergeKLists([[1,4,5],[1,3,4],[2,6]]);
// []
// [[]]
// [[1]]
// [[],[]]
// [[1],[1]]