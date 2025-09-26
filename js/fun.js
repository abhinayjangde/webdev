
let nums = [1,23,0,8,19,40]

let linearSearch = function(nums, target){
    let left = 0;
    let right = nums.length-1;

    while(left<=right){
        if(nums[left] === target) return left;
        if(nums[right] === target) return right;
        left++;
        right--;
    }
    return -1;
}

console.log(linearSearch(nums,0))


