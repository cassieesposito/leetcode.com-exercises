from re import I
from unittest import result


FIZZ = 3
BUZZ = 5

class Solution:
    def fizzBuzz(self, n: int):
        result = []
        for i in range (1,n+1):
            fizz = buzz = ''
            if not i % FIZZ:
                fizz="Fizz"
            if not i % BUZZ:
                buzz="Buzz"
            e = str(i)
            if fizz or buzz:
                e = fizz+buzz
            result.append(e)
        return result
            
            
            



print(Solution().fizzBuzz(30))
