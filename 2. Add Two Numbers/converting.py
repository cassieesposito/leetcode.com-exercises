from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        return (self.__listifyNumber(self.__extractNuber(l1)+self.__extractNuber(l2)))
    
    def __extractNuber(self, list):
        number = list.val
        
        i = 0
        while list.next:
            i += 1
            list = list.next
            number += list.val * 10 ** i

        return (number)
    
    def __listifyNumber(self, number):
        head = currentNode = ListNode()
        while True:
            currentNode.val = number % 10
            number = number // 10

            if not number:
                return head

            currentNode.next=ListNode()
            currentNode = currentNode.next
            

def parseList(list):
    parsed = ''
    while list.next:
        parsed += str(list.val)
        list=list.next
    parsed += str(list.val)
    return parsed


l1 = ListNode(9, ListNode(9, ListNode(9, ListNode (9))))
l2 = ListNode(1, ListNode(2, ListNode(3, ListNode (4))))


result=Solution().addTwoNumbers(l1,l2)
print (parseList(l1))
print (parseList(l2))
print(parseList(result))