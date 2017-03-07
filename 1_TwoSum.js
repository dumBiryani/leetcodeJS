#!/usr/bin/env node
/**
 * Created by priyaholikatti on 3/6/17.
 */

/*  Given an array of integers, return indices of the two numbers such that they add up to a specific target.
    You may assume that each input would have exactly one solution, and you may not use the same element twice.

    Example:
    Given nums = [2, 7, 11, 15], target = 9,
    Because nums[0] + nums[1] = 2 + 7 = 9,
    return [0, 1].
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var len = nums.length;
    var output=[];
    if (nums.length == 0 || target === undefined)
        return "Invalid Input";
    for(var i=0;i<len;i++){
        for(var j=1;j<len;j++){
            if(nums[i]+nums[j] == target){
                output.push(i);
                output.push(j);
                return output;
            }
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([7,3], 10));
console.log(twoSum([5, 7, 7, 3, 11, 15], 10 ));