const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5);   //from where to where (index)

const removed = nums.splice(2,3, 77);  //from where to how much

console.log(removed);
console.log(nums);

const together = nums.join("bal ");
console.log(together)