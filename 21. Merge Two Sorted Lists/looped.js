/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/*** BEGIN CODE TO SUBMIT ***/


var stealHead = (list) => { return [new ListNode(list.val), list.next] }

var mergeTwoLists = (list1, list2) => {
    head = tail = new ListNode()
    while (list1 || list2) {
        if (list1 && (!list2 || list2.val > list1.val)) {
            [tail.next, list1] = stealHead(list1)
        } else {
            [tail.next, list2] = stealHead(list2)
        }
        tail = tail.next
    }
    return head.next
};

/*** END CODE TO SUBMIT ***/

var printList = (list) => {
    output = ''
    do {
        output += `${list.val}, `
        list = list.next
    } while (list != undefined)
    console.log(output)
}

list1 = new ListNode(1, new ListNode(2, new ListNode(4, new ListNode(5, new ListNode(6)))))
list2 = new ListNode(1, new ListNode(3, new ListNode(5)))

// printList(list1)
// printList(list2)
printList(mergeTwoLists(list1, list2))