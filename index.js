// run `node index.js` in the terminal
const assert = require('assert');

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    // nums[i] + x = target;
    // x = target - nums[i];
    let x = target - nums[i];

    if (nums.indexOf(x) !== -1 && nums.indexOf(x) !== i) {
      return [i, nums.indexOf(x)];
    }
  }

  return null;
};

let arr = [3, 8, 4, 7, 5];
let target = 8;

assert.deepEqual(twoSum(arr, target), [0, 4]);
