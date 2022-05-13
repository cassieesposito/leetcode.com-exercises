// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = (head) => {
    list = []
    while (head) {
        list.push(head.val)
        head = head.next
    }
    while (list.length) {
        if (list[0] != list.pop()) { return false }
        list.shift()
    }
    return true
};


list = new ListNode(1, new ListNode(2, new ListNode(9, new ListNode(2, new ListNode(1)))))
console.log(isPalindrome(list))