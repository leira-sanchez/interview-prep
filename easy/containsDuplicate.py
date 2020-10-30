# class Solution:
def containsDuplicate(nums) -> bool:
    if len(set(nums)) < len(nums):
        return True
    else:
        return False
        
        
# return len(set(nums)) != len(nums)
containsDuplicate([1,2])
