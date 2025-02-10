// // 1
// const arr = [10, 20, 30];
// console.log(arr);
// arr[arr.length-1] = 99;
// console.log(arr);

// // 2
// function getLastVal(array) {
//     console.log(array[array.length-1]);
// }
// const nums = [1,20,22,24,5]
// const greets = ['hi','hello','good']
// getLastVal(nums);
// getLastVal(greets);

// // 3 
// function arraySwap(array) {
//     const temp = array[0];
//     array[0] = array[array.length-1];
//     array[array.length-1] = temp;
//     console.log(array);
// }
// arraySwap(nums);
// arraySwap(greets);

// // 4
// for(let i=0; i<=10; i+=2) console.log(i);
// for(let i=5; i>=0; i--) console.log(i);

// // 5
// let i=0;
// while(i <= 10) {
//     console.log(i);
//     i+=2;
// }

// let j=5;
// while(j >= 0) {
//     console.log(j);
//     j--;
// }

// 6
function addOne(array) {
    for(let i=0; i<array.length; i++) {
        array[i] +=1;
    }
    console.log(array);
}
// console.log(nums);
// addOne(nums);

// 7
function addNum(array, num) {
    for(let i=0; i<array.length; i++) {
        array[i] += num;
    }
    console.log(array);
}
// console.log(nums);
// addNum(nums, 5);

//8
function addArrays(array1, array2) {
    const ans = [];
    let n = Math.min(array1.length, array2.length);
    let i=0;
    while(i < n) {
        ans.push(array1[i] + array2[i]);
        i++;
    }
    while(i < array1.length) {
        ans.push(array1[i++]);
    }
    while(i < array2.length) {
        ans.push(array2[i++]);
    }
    return ans;
}

const a1 = [1, 2, 8, 4, 6, 9];
const a2 = [3, 0, 4, 9, 21, 74, 2, 6];

// console.log(a1, a2);
// console.log(addArrays(a1, a2));

// 9
function countPositive(nums) {
    let ans = 0;
    for(const i of nums) {
        if(i > 0) ans++;
    }
    return ans;
}
const nums = [1, 6, -13, -11, 0, 3, -1];
// console.log(countPositive(nums));

// 10
function minMax(nums) {
    if(nums.length === 0) return {min : null, max : null};
    let min = nums[0], max = nums[0];
    for(let i=1; i<nums.length; i++) {
        if(nums[i] < min) min = nums[i];
        if(nums[i] > max) max = nums[i];
    }
    return {
        min : min,
        max : max
    };
}

// console.log(minMax([3]));

// 11
const obj = {
    item: 2,
    price: 3
};
console.log(obj.item + 1)

function countWords(words) {
    const wordCounts = {};
    for(const word of words) {
        wordCounts[word] = 0;
    }
    for(const word of words) {
        wordCounts[word] += 1;
    }
    return wordCounts;
}

const words = ['apple', 'banana', 'apple', 'coconut', 'banana', 'apple'];
console.log(countWords(words));

