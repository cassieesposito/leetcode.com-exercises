from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        head = currentNode = ListNode()

        carried = 0

        while True:
            sum = l1.val + l2.val + carried
            currentNode.val = sum % 10
            carried = 1 if sum > 9 else 0

            if not l1.next and not l2.next:
                currentNode.next = ListNode(1) if carried else None
                break

            l1.val = l2.val = 0
            if l1.next:
                l1=l1.next
            if l2.next:
                l2=l2.next

            currentNode.next = ListNode()
            currentNode=currentNode.next

        return head


def parseList(list):
    parsed = ''
    while list.next:
        parsed += str(list.val)
        list=list.next
    parsed += str(list.val)
    return parsed


l1 = ListNode(9, ListNode(2, ListNode(3, ListNode (4))))
l2 = ListNode(1, ListNode(2, ListNode(3, ListNode (6))))

result=Solution().addTwoNumbers(l1,l2)

print(parseList(result))