class Solution {
  solve(nums) {
    let solArr = [[...nums]]
    let currentLength = nums.length
    // until only 2 nums left
    while (currentLength > 2) {
      // remove first and last nums
      let first = nums.shift() 
      let last = nums.pop()
      // replace with sum of 1st and 2nd nums 
      nums[0] += first
      // replace with sum of last and next to last nums
      nums[nums.length-1] += last
      
      solArr.push([...nums])
      currentLength -= 2 
    }
    // remaining 2 nums
    if(nums.length === 2) {
      solArr.push([nums[0] + nums[1]])
    }
      
    return solArr
  }
}