

var twoSum = function(nums, target) {
    
    if(nums.length == 0){
        return;
        
    } else {
        
        if (nums.length == 1 && nums[0] > target){
            return;
        }
        
        let newNums = new Map();
        newNums.set(nums)
        console.log(newNums)

        let newarr = []

        
       for (let index = 0; index < nums.length; index++) {
           const element = target - nums[index];
           
           if(newNums.has(element)){
              newarr.push(newNums.keys())
           }
       } 
    }
};

console.log(twoSum([3,2,3], 6))