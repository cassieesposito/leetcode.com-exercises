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

var nextNode = (list1, list2) => { return new ListNode(list1.val, mergeTwoLists(list1.next, list2)) }

var mergeTwoLists = (list1, list2) => {
    if (!list1 && !list2) { return null }
    if (list1 && (!list2 || list1.val < list2.val)) { return nextNode(list1, list2) }
    return nextNode(list2, list1)
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

list2 = new ListNode(1, new ListNode(2, new ListNode(4, new ListNode(5, new ListNode(6)))))
list1 = new ListNode(-5, new ListNode(1, new ListNode(3, new ListNode(5))))

// list1 = new ListNode()
// list2 = new ListNode()

printList(list1)
printList(list2)
list3 = mergeTwoLists(list1, list2)
printList(list3)