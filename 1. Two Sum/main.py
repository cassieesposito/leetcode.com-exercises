class Solution:
    def twoSum(self, nums: [int], target: int) -> [int]:
        hash = {}
        for i, num in enumerate(nums):
            if target - num in hash:
                return [hash[target - num], i]
            hash[num] = i
        return []

print (Solution().twoSum([2,11,15,7], 9))