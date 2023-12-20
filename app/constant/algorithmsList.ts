export const algorithmsList = [

{
id: '1',
title: 'Two Sum',
tags : ['Array', 'Hash Table'],
problem: 
`Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]

Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
`,
code: 
`/**
* @param {number[]} nums
* @param {number} target
* @return {number[]}
*/
const twoSum = (nums, target) => { 

    let map = {};

    for (let i = 0; i < nums.length; i++) {

        if (target - nums[i] in map) 
            return [map[target-nums[i]], i];
        else 
            map[nums[i]] = i;  
    }
}`},
{
id: '2',
title: 'Contains Duplicate',
tags : ['Array', 'Two Pointers'],
problem: 
`Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

Example 1:
Input: nums = [1,2,3,1]
Output: true

Example 2:
Input: nums = [1,2,3,4]
Output: false

Example 3:
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

Constraints:
1 <= nums.length <= 105
-109 <= nums[i] <= 109
`,
code: 
`/**
* @param {number[]} nums
* @param {number} k
* @return {boolean}
*/
const containsDuplicate = (nums) => {

    const numsSet =  new Set();

    for(const i of nums){
        
        if(numsSet.has(i))
            return true
        
        numsSet.add(i)
    }
    return false;
}`},
{
id: '3',
title: 'Product Except Self',
tags : ['Array'],
problem: 
`Given an integer array nums, return an array answer such that answer[i] 
is equal to the product of all the elements of nums except nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? 
`,
code: 
`/**
* @param {number[]} nums
* @return {number}
*/
const productExceptSelf = (nums) => {

    const res = [];   
    let product = 1;
    
    for (let i = 0; i < nums.length; i++) {
        res[i] = product;
        product *= nums[i];
    }

    product = 1;

    for (let j = nums.length - 1; j >= 0; j--) {
        res[j] *= product;
        product *= nums[j];
    }
    return res;
}`},
    {
id: '4',
title: 'The Sign of an Array',
tags : ['Array'],
problem: 
`There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.

You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).

Example 1:

Input: nums = [-1,-2,-3,-4,3,2,1]
Output: 1
Explanation: The product of all values in the array is 144, and signFunc(144) = 1

Example 2:

Input: nums = [1,5,0,2,-3]
Output: 0
Explanation: The product of all values in the array is 0, and signFunc(0) = 0

Example 3:

Input: nums = [-1,1,-1,1,-1]
Output: -1
Explanation: The product of all values in the array is -1, and signFunc(-1) = -1

Constraints:

1 <= nums.length <= 1000
-100 <= nums[i] <= 100
`,
code: 
`/**
* @param {number[]} nums
* @return {number}
*/
function arraySign(nums) {

    if (nums.includes(0)) return 0;

    let product = 1;

    for (let i = 0; i < nums.length; i++)
        product *= nums[i];
    
    if (product < 0) return -1;
    
    return 1;
}`
    },
    {
id: '5',
title: 'Arithmetic Progression',
tags : ['Array'],
problem: 
`A sequence of numbers is called an arithmetic progression if the 
difference between any two consecutive elements is the same.

Given an array of numbers arr, return true if the array can be rearranged 
to form an arithmetic progression. Otherwise, return false.
Example 1:

Input: arr = [3,5,1]
Output: true
Explanation: We can reorder the elements as [1,3,5] or [5,3,1] 
with differences 2 and -2 respectively, between each consecutive elements.

Example 2:

Input: arr = [1,2,4]
Output: false
Explanation: There is no way to reorder the elements to obtain an arithmetic progression.

Constraints:
2 <= arr.length <= 1000
-10^6 <= arr[i] <= 10^6
`,
code: 
`/**
* @param {number[]} arr
* @return {boolean}
*/
function canMakeArithmeticProgression(arr){

    arr.sort((a, b) => { return a - b });

    let diff = arr[1] - arr[0];

    for (let i = 1; i < arr.length - 1; i++) {
        if ((arr[i + 1] - arr[i]) != diff)
            return false;
    }
    
    return true;
}`
    },
    {
id: '6',
title: 'Maximum Sub-array',
tags : ['Array', 'Divide and Conquer', 'Dynamic Programming'],
problem: 
`Given an integer array nums, find the 
subarray with the largest sum, and return its sum.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.

Example 2:
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.

Example 3:
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
    
Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
    
Follow up: If you have figured out the O(n) solution, try coding another 
solution using the divide and conquer approach, which is more subtle.
`,
code: 
`/**
* @param {number[]} nums
* @return {number}
*/
function maxSubArray(nums) {

    let max = nums[0];

    for (let i = 1; i < nums.length; i++){
        const num = nums[i];
        nums[i] = Math.max(num, num + nums[i - 1]);
        max = Math.max(max, nums[i])
    }
    return max;
}`},
{
id: '7',
title: 'First Missing Possitive',
tags : ['Array'],
problem: 
`Given an unsorted integer array nums, return the smallest missing positive integer.
You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

Example 1:
Input: nums = [1,2,0]
Output: 3
Explanation: The numbers in the range [1,2] are all in the array.

Example 2:
Input: nums = [3,4,-1,1]
Output: 2
Explanation: 1 is in the array but 2 is missing.

Example 3:
Input: nums = [7,8,9,11,12]
Output: 1
Explanation: The smallest positive integer 1 is missing.
    
Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
`,
code: 
`/**
* @param {number[]} nums
* @return {number}
*/
function firstMissingPositive(nums) {

    const n = nums.length;
    
        for (let i = 0; i < n; i++) {
            while (nums[i] >= 1 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
                [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
            }
        }
    
        for (let i = 0; i < n; i++) {
            if (nums[i] !== i + 1) {
                return i + 1;
            }
        }
    
    return n + 1;
}`},
{
id: '8',
title: 'Find Peak Element',
tags : ['Array', 'Search'],
problem: 
`A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. 
If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is always 
considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in O(log n) time.
    
Example 1:

Input: nums = [1,2,3,1]
Output: 2
Explanation: 3 is a peak element and your function should return the index number 2.

Example 2:

Input: nums = [1,2,1,3,5,6,4]
Output: 5
Explanation: Your function can return either index number 1 where the peak element is 2, 
or index number 5 where the peak element is 6.

Constraints:

1 <= nums.length <= 1000
-2^31 <= nums[i] <= 2^31 - 1
nums[i] != nums[i + 1] for all valid i.
`,
code: 
`/**
* @param {number[]} nums
* @return {number}
*/
function findPeakElement(nums) {

    for (let i = 1; i < nums.length - 1; i++) 
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) 
            return i;
            
    if (nums[0] < nums[nums.length - 1]) return nums.length - 1;
    return 0;          
}`
},
    {
id: '9',
title: 'Coin Change',
tags : ['Array', 'Dynamic Programming'],
problem: 
`You are given an integer array coins representing coins of different 
denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.


Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3
Output: -1

Example 3:

Input: coins = [1], amount = 0
Output: 0

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
`,
code: 
`/**
* @param {number[]} coins
* @param {number} amount
* @return {number}
*/
function coinChange(coins, amount) {

    const dp = new Array(amount + 1).fill(Number.MAX_VALUE);
    dp[0] = 0;

    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
}`},
{
id: '10',
title: 'Best Time to Buy and Sell Stocks',
tags : ['Array', 'Dynamic Programming'],
problem: 
`You are given an array prices where prices[i] is the price 
of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one 
stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. 
If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
    
Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
`,
code: 
`/**
* @param {number[]} prices
* @return {number}
*/
function maxProfit(prices) {

    let max = 0;

    for (let i = 0; i < prices.length - 1; i++){
        
        let prices2 = prices.slice(i+1).sort();
        let tempMax = prices2[0];

        if (tempMax > prices[i] && tempMax - prices[i] > max) 
        max = tempMax - prices[i];
    
    }
    return max;
}`},

{
id: '11',
title: 'Tree Travarsal',
tags : ['Tree', 'Recursion'],
problem: 
`Implement three types of tree travarsals`,
code: 
`// Pre order
function preOrderTravarsal(root){

    if (root === null) return;

    console.log(root.val);
    
    preOrderTravarsal(root.left);
    preOrderTravarsal(root.right);
}

// In order
function inOrderTravarsal(root){

    if (root === null) return;
                        
    preOrderTravarsal(root.left);
    console.log(root.val);
    preOrderTravarsal(root.right);
}

// Post order
function postOrderTravarsal(root){

    if (root === null) return;
                        
    preOrderTravarsal(root.left);
    preOrderTravarsal(root.right);

    console.log(root.val);
}`},
{
id: '12',
title: 'Invert Binary Tree',
tags : ['Tree', 'Recursion'],
problem: 
`Given the root of a binary tree, invert the tree, and return its root.

Example 1:
Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

Example 2:
Input: root = [2,1,3]
Output: [2,3,1]

Example 3:
Input: root = []
Output: []

Constraints:
The number of nodes in the tree is in the range [0, 100].
-100 <= Node.val <= 100
`,
code: 
`/**
* @param {TreeNode} root
* @return {TreeNode}
*/
const invertTree = (root) => {

    if (!root) return root;

    let left = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(left);

    return root;
}`},
{
id: '13',
title: 'Maximum Depth of Binary Tree',
tags : ['Tree', 'DFS'],
problem: 
`Given the root of a binary tree, return its maximum depth.
A binary tree's maximum depth is the number of nodes along the 
longest path from the root node down to the farthest leaf node.

Example 1:
Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:
Input: root = [1,null,2]
Output: 2

Constraints:
The number of nodes in the tree is in the range [0, 104].
-100 <= Node.val <= 100
`,
code: 
`/**
* @param {TreeNode} root
* @return {number}
*/
const maxDepth = (root) => {

    let maxDepth = 0;

    let DFS = (node, depth) => {

        if (!node) return maxDepth;
        if (depth > maxDepth) maxDepth = depth;

        DFS(node.right, depth + 1);
        DFS(node.left, depth + 1);
    };

    DFS(root, 1);

return maxDepth;
}`
},
{
id: '14',
title: 'Linked List',
tags : ['Linked list'],
problem: 
`Implement a singly linked-list`,
code: 
`// Definition for a linked-list node
class LinkedListNode {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(val) {
        let newNode = new LinkedListNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        
        else {
            let temp = newNode;
            newNode.next = this.head;
            this.head = temp;
        }
    }

    removeNode(val) {

        if (this.head.value == val){
            if (!this.head.next) 
                this.head = null;
            else {
                let temp = this.head;
                this.head = this.head.next;
                temp = null;
            }
        }
        else {
            let curr = this.head;

            while(curr.next) {

                if (curr.next.value == val) {
                    if (!curr.next.next) 
                        curr.next = null;

                    else {
                        let temp = curr.next;
                        curr.next = curr.next.next;
                        temp = null;
                    }
                }
                else
                    curr = curr.next;
            }
        }
    }       

    printList() {
        let curr = this.head;

        while(curr) {
            console.log(curr.value);
            curr = curr.next;
        }
    }
}`},
{
id: '15',
title: 'Merge Two Linked Lists',
tags : ['Linked List'],
problem: 
`You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. 
The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.

Example 1:
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]

Example 2:
Input: list1 = [], list2 = []
Output: []

Example 3:
Input: list1 = [], list2 = [0]
Output: [0]

Constraints:
The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both list1 and list2 are sorted in non-decreasing order.
`,
code: 
`/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/
const mergeTwoLists = (l1, l2) => {

    let nullNode = { val : 0, next : null};
    let prev = nullNode;

    while (l1 && l2) {
        
        if (l1.val >= l2.val) {
            prev.next = l2;
            l2 = l2.next;
        } else {
            prev.next = l1;
            l1 = l1.next;
        }
        prev = prev.next; 
    }

    prev.next = l1 || l2;
    return nullNode.next;
}`},
{
id: '16',
title: 'Reverse Linked List',
tags : ['Linked List'],
problem: 
`Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []

Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000

Follow up: A linked list can be reversed either iteratively or recursively. 
Could you implement both?`,
code: 
`/**
* @param {ListNode} head
* @return {ListNode}
*/
const reverseList = (head) => {

    let prev = null;
    
    while (head) {
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }
    
    return prev;
}`},
{
id: '17',
title: 'Longest Common Subsequence',
tags : ['Dynamic Programming', 'String'],
problem: 
`Given two strings text1 and text2, return the length of their longest common subsequence. 
If there is no common subsequence, return 0.
A subsequence of a string is a new string generated from the original string with some characters 
(can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:
Input: text1 = "abcde", text2 = "ace" 
Output: 3  

Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:
Input: text1 = "abc", text2 = "abc"
Output: 3

Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:
Input: text1 = "abc", text2 = "def"
Output: 0

Explanation: There is no such common subsequence, so the result is 0.

Constraints:
1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.
`,
code: 
`/**
* @param {string} text1
* @param {string} text2
* @return {number}
*/
const longestCommonSubsequence = function (text1, text2) {

    let m = text1.length,
        n = text2.length,
        DP = new Array(m + 1).fill(0).map(_ => new Array(n + 1).fill(0));
    
    for (let x = m - 1; x >= 0; x--) {
        for (let y = n - 1; y >= 0; y--) {
    
        if (text1[x] === text2[y]) 
            DP[x][y] = 1 + DP[x + 1][y + 1];
    
        else 
            DP[x][y] = Math.max(DP[x + 1][y], DP[x][y + 1]);
    
        }
    }
    
    return DP[0][0];
}`},
{
id: '18',
title: 'Climbing Stairs',
tags : ['Dynamic Programming'],
problem: 
`You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. 
In how many distinct ways can you climb to the top?

Example 1:
Input: n = 2
Output: 2

Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:
Input: n = 3
Output: 3

Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

Constraints:
1 <= n <= 45
`,
code: 
`const climbStairs = (n) => {
    const memoized = climb();
    return memoized(n);
}

const climb = () => {

    let cache = {};
    
    return climbStairs(n) => {

        if (n in cache) 
            return cache[n];

        else if (n >= 1 && n < 4) 
            return n;
            
        else {
            cache[n] = climbStairs(n-2) + climbStairs(n-1);
            return cache[n];
        }
    }
}`},
{
id: '19',
title: 'Trapping Rainwater',
tags : ['Dynamic Programming', 'Two Pointers'],
problem: 
`Given n non-negative integers representing an elevation map where the width 
of each bar is 1, compute how much water it can trap after raining.

Example 1:
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped.

Example 2:
Input: height = [4,2,0,3,2,5]
Output: 9 

Constraints:
n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105
`,
code: 
`/**
* @param {number[]} height
* @return {number}
*/
export default function trap(height) {

    let left = 0, right = height.length - 1, volume = 0;

    let maxLeft = 0, maxRight = 0;

    while (left < right) {
    if (height[left] <= height[right]) {
        if (height[left] >= maxLeft) {
            maxLeft = height[left]
        } else volume += maxLeft - height[left]
        left++
    } else {
        if (height[right] >= maxRight) {
            maxRight = height[right]
        } else volume += maxRight - height[right]
        right--
    }  
    }

    return volume;
}`},
{
id: '20',
title: 'Hash Table',
tags : ['Class', 'Hash Table', 'Data Structure'],
problem: 
`Implement a Hash Table`,
code: 
`export default class HashTable {
    constructor(size) {
        this.values = {};
        this.numberOfValues = 0;
        this.size = size;
    }
    
    add(key, value) {
        const hash = this.calculateHash(key);
        if(!this.values.hasOwnProperty(hash)) {
        this.values[hash] = {};
        }
        if(!this.values[hash].hasOwnProperty(key)) {
        this.numberOfValues++;
        }
        this.values[hash][key] = value;
    }
    
    remove(key) {
        const hash = this.calculateHash(key);
        if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
        delete this.values[hash][key];
        this.numberOfValues--;
        }
    }
    
    calculateHash(key) {
        return key.toString().length % this.size;
    }
    
    search(key) {
        const hash = this.calculateHash(key);
        if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
        return this.values[hash][key];
        } else {
        return null;
        }
    }
    
    length() {
        return this.numberOfValues;
    }
    
    print() {
        let string = '';
        for(const value in this.values) {
        for(const key in this.values[value]) {
            string += this.values[value][key] ;
        }
        }
        console.log(string.trim());
    }
}`},
{
id: '21',
title: 'Linked List',
tags : ['Class', 'Linked List', 'Data Structure'],
problem: 
`Implement a singly linked-list`,
code: 
`// Definition for a linked-list node
class LinkedListNode {
    constructor(value, next = null){
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addNode(val) {
        let newNode = new LinkedListNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        
        else {
            let temp = newNode;
            newNode.next = this.head;
            this.head = temp;
        }
    }

    removeNode(val) {

        if (this.head.value == val){
            if (!this.head.next) 
                this.head = null;
            else {
                let temp = this.head;
                this.head = this.head.next;
                temp = null;
            }
        }
        else {
            let curr = this.head;

            while(curr.next) {

                if (curr.next.value == val) {
                    if (!curr.next.next) 
                        curr.next = null;

                    else {
                        let temp = curr.next;
                        curr.next = curr.next.next;
                        temp = null;
                    }
                }
                else
                    curr = curr.next;
            }
        }
}`},
{
id: '22',
title: 'Stack',
tags : ['Class', 'Linked List', 'Stack', 'Data Structure'],
problem: 
`Implement a Stack`,
code: 
`// implementing a stack using a linked-list
class Stack {
    constructor() {
        this.list = new LinkedList();
    }
    
    push(data) {
        this.list.addLast(data);
    }
    
    pop() {
        return this.list.removeLast();
    }
    
    peek() {
        if(!this.list.tail) { return; }
        return this.list.tail.data;
    }
    
    isEmpty() {
        return typeof this.peek() === 'undefined';
    }
    
    size() {
        return this.list.size();
    }
}`},
{
id: '23',
title: 'Queue',
tags : ['Class', 'Linked List', 'Queue', 'Data Structure'],
problem: 
`Implement a Queue`,
code: 
`// implementing a queue using a linked-list
class Queue {
    constructor() {
        this.queue = [];
    }
    
    enqueue(value) {
        this.queue.push(value);
    }
    
    dequeue() {
        return this.queue.shift();
    }
    
    peek() {
        return this.queue[0];
    }
    
    length() {
        return this.queue.length;
    }
    
    print() {
        console.log(this.queue.join(' '));
    }
}`},
{
id: '24',
title: 'Compare Two Strings with Backspace',
tags : ['String', 'Two Pointers', 'Stack'],
problem : 
`Given two strings s and t, return true if they are equal 
when both are typed into empty text editors. 
'#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".

Constraints:

1 <= s.length, t.length <= 200
s and t only contain lowercase letters and '#' characters.        

Follow up: Can you solve it in O(n) time and O(1) space?    
`,
code: 
`/**
* @param {string} s
* @param {string} t
* @return {boolean}
*/
var backspaceCompare = function(s, t) {
    function processString(str) {
        const result = [];
        for (const char of str) {
            if (char === '#') {
                result.pop(); 
            } else {
                result.push(char);
            }
        }
        return result.join('');
    }

    const processedS = processString(s);
    const processedT = processString(t);

    return processedS === processedT;
}`},
{
id: '25',
title: 'Tree',
tags : ['Tree', 'Data Structure'],
problem: 
`Implement a Binary Tree`,
code: 
`// Definition for a binary tree node
class TreeNode {
        constructor(val, left, right) {
            this.val = (val === undefined ? 0 : val);
            this.left = (left === undefined ? null : left);
            this.right = (right === undefined ? null : right);
        }
}`},
{
id: '26',
title: 'Binary Search',
tags : ['Array', 'Search'],
problem : 
`Given an array of integers nums which is sorted in ascending order, 
and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Constraints:
1 <= nums.length <= 10^4
-10^4 < nums[i], target < 10^4
All the integers in nums are unique.
nums is sorted in ascending order.
`,
code: 
`const binarySerach = (nums, l, r, t) => {

    if (r >= l) {
        let m = l + Math.floor((r - l) / 2);

        if (nums[m] === t) return m;

        if (nums[m] > t) 
            return binarySerach(nums, l, m - 1, t);
        
        return binarySerach(nums, m + 1, r, t);
    } 
    return -1;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export default function search(nums, target) {

    if (nums.length === 1 && target === nums[0]) return 0;
    return binarySerach(nums, 0, nums.length - 1, target);    
}`},
{
id: '27',
title: 'Array',
tags : ['Class', 'Array', 'Data Structure'],
problem: 
`Implement an array class with all neccessary methods`,
code: 
`class MyArray {
    constructor() {
        this.array = [];
    }
    
    add(data) {
        this.array.push(data);
    }
    
    remove(data) {
        this.array = this.array.filter(current => current !== data);
    }
    
    search(data) {
        const foundIndex = this.array.indexOf(data);
        if(~foundIndex) {
        return foundIndex;
        }
    
        return null;
    }
    
    getAtIndex(index) {
        return this.array[index];
    }
    
    length() {
        return this.array.length;
    }
    
    print() {
        console.log(this.array.join(' '));
    }
}`},
{
id: '28',
title: 'Binary Search Tree',
tags : ['Class', 'Tree', 'Data Structure', 'Search', 'BST'],
problem: 
`Implement a Binary Search Tree class with all neccessary methods`,
code: 
`function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    }
    
    class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    
    add(data) {
        const node = new Node(data);
        if(!this.root) {
        this.root = node;
        } else {
        let current = this.root;
        while(current) {
            if(node.data < current.data) {
            if(!current.left) {
                current.left = node;
                break;
            }
            current = current.left;
            } else if (node.data > current.data) {
            if(!current.right) {
                current.right = node;
                break;
            }
            current = current.right;
            } else {
            break;
            }
        }
        }
    }
    
    remove(data) {
        const that = this;
        const removeNode = (node, data) => {
        if(!node) {
            return null;
        }
        if(data === node.data) {
            if(!node.left && !node.right) {
            return null;
            }
            if(!node.left) {
            return node.right;
            }
            if(!node.right) {
            return node.left;
            }
            // 2 children
            const temp = that.getMin(node.right);
            node.data = temp;
            node.right = removeNode(node.right, temp);
            return node;
        } else if(data < node.data) {
            node.left = removeNode(node.left, data);
            return node;
        } else {
            node.right = removeNode(node.right, data);
            return node;
        }
        };
        this.root = removeNode(this.root, data);
    }
    
    contains(data) {
        let current = this.root;
        while(current) {
        if(data === current.data) {
            return true;
        }
        if(data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
        }
        return false;
    }
    
    _preOrder(node, fn) {
        if(node) {
        if(fn) {
            fn(node);
        }
        this._preOrder(node.left, fn);
        this._preOrder(node.right, fn);
        }
    }
    
    _inOrder(node, fn) {
        if(node) {
        this._inOrder(node.left, fn);
        if(fn) {
            fn(node);
        }
        this._inOrder(node.right, fn);
        }
    }
    
    _postOrder(node, fn) {
        if(node) {
        this._postOrder(node.left, fn);
        this._postOrder(node.right, fn);
        if(fn) {
            fn(node);
        }
        }
    }
    
    traverseDFS(fn, method) {
        const current = this.root;
        if(method) {
        this[_method](current, fn);
        } else {
        this._preOrder(current, fn);
        }
    }
    
    traverseBFS(fn) {
        this.queue = [];
        this.queue.push(this.root);
        while(this.queue.length) {
        const node = this.queue.shift();
        if(fn) {
            fn(node);
        }
        if(node.left) {
            this.queue.push(node.left);
        }
        if(node.right) {
            this.queue.push(node.right);
        }
        }
    }
    
    print() {
        if(!this.root) {
        return console.log('No root node found');
        }
        const newline = new Node('|');
        const queue = [this.root, newline];
        let string = '';
        while(queue.length) {
        const node = queue.shift();
        string += node.data.toString();
        if(node === newline && queue.length) {
            queue.push(newline);
        }
        if(node.left) {
            queue.push(node.left);
        }
        if(node.right) {
            queue.push(node.right);
        }
        }
        console.log(string.slice(0, -2).trim());
    }
    
    printByLevel() {
        if(!this.root) {
        return console.log('No root node found');
        }
        const newline = new Node('\n');
        const queue = [this.root, newline];
        let string = '';
        while(queue.length) {
        const node = queue.shift();
        string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
        if(node === newline && queue.length) {
            queue.push(newline);
        }
        if(node.left) {
            queue.push(node.left);
        }
        if(node.right) {
            queue.push(node.right);
        }
        }
        console.log(string.trim());
    }
    
    getMin(node) {
        if(!node) {
        node = this.root;
        }
        while(node.left) {
        node = node.left;
        }
        return node.data;
    }
    
    getMax(node) {
        if(!node) {
        node = this.root;
        }
        while(node.right) {
        node = node.right;
        }
        return node.data;
    }
    
    _getHeight(node) {
        if(!node) {
        return -1;
        }
        const left = this._getHeight(node.left);
        const right = this._getHeight(node.right);
        return Math.max(left, right) + 1;
    }
    
    getHeight(node) {
        if(!node) {
        node = this.root;
        }
        return this._getHeight(node);
    }
    
    _isBalanced(node) {
        if(!node) {
        return true;
        }
        const heigthLeft = this._getHeight(node.left);
        const heigthRight = this._getHeight(node.right);
        const diff = Math.abs(heigthLeft - heigthRight);
        if(diff > 1) {
        return false;
        } else {
        return this._isBalanced(node.left) && this._isBalanced(node.right);
        }
    }
    
    isBalanced(node) {
        if(!node) {
        node = this.root;
        }
        return this._isBalanced(node);
    }
    
    _checkHeight(node) {
        if(!node) {
        return 0;
        }
        const left = this._checkHeight(node.left);
        if(left === -1) {
        return -1;
        }
        const right = this._checkHeight(node.right);
        if(right === -1) {
        return -1;
        }
        const diff = Math.abs(left - right);
        if(diff > 1) {
        return -1;
        } else {
        return Math.max(left, right) + 1;
        }
    }
    
    isBalancedOptimized(node) {
        if(!node) {
        node = this.root;
        }
        if(!node) {
        return true;
        }
        if(this._checkHeight(node) === -1) {
        return false;
        } else {
        return true;
        }
    }
}`},
{
id: '29',
title: 'Doubly Linked List',
tags : ['Class', 'Linked List', 'Data Structure'],
problem: 
`Implement a Doubly Linked List class with all neccessary methods`,
code:
`function Node(data) {
    this.data = data;
    this.previous = null;
    this.next = null;
    }
    
    class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.numberOfValues = 0;
    }
    
    add(data) {
        const node = new Node(data);
        if(!this.head) {
        this.head = node;
        this.tail = node;
        } else {
        node.previous = this.tail;
        this.tail.next = node;
        this.tail = node;
        }
        this.numberOfValues++;
    }
    
    remove(data) {
        let current = this.head;
        while(current) {
        if(current.data === data) {
            if(current === this.head && current === this.tail) {
            this.head = null;
            this.tail = null;
            } else if(current === this.head) {
            this.head = this.head.next;
            this.head.previous = null;
            } else if(current === this.tail) {
            this.tail = this.tail.previous;
            this.tail.next = null;
            } else {
            current.previous.next = current.next;
            current.next.previous = current.previous;
            }
            this.numberOfValues--;
        }
        current = current.next;
        }
    }
    
    insertAfter(data, toNodeData) {
        let current = this.head;
        while(current) {
        if(current.data === toNodeData) {
            const node = new Node(data);
            if(current === this.tail) {
            this.add(data);
            } else {
            current.next.previous = node;
            node.previous = current;
            node.next = current.next;
            current.next = node;
            this.numberOfValues++;
            }
        }
        current = current.next;
        }
    }
    
    traverse(fn) {
        let current = this.head;
        while(current) {
        if(fn) {
            fn(current);
        }
        current = current.next;
        }
    }
    
    traverseReverse(fn) {
        let current = this.tail;
        while(current) {
        if(fn) {
            fn(current);
        }
        current = current.previous;
        }
    }
    
    length() {
        return this.numberOfValues;
    }
    
    print() {
        let string = '';
        let current = this.head;
        while(current) {
        string += current.data;
        current = current.next;
        }
        console.log(string.trim());
    }
}`},
{
id: '30',
title: 'Graph',
tags : ['Class', 'Graph', 'Data Structure'],
problem: 
`Implement a Graph class with all neccessary methods`,
code:
`class Graph {
    constructor() {
        this.vertices = [];
        this.edges = [];
        this.numberOfEdges = 0;
    }
    
    addVertex(vertex) {
        this.vertices.push(vertex);
        this.edges[vertex] = [];
    }
    
    removeVertex(vertex) {
        const index = this.vertices.indexOf(vertex);
        if(~index) {
        this.vertices.splice(index, 1);
        }
        while(this.edges[vertex].length) {
        const adjacentVertex = this.edges[vertex].pop();
        this.removeEdge(adjacentVertex, vertex);
        }
    }
    
    addEdge(vertex1, vertex2) {
        this.edges[vertex1].push(vertex2);
        this.edges[vertex2].push(vertex1);
        this.numberOfEdges++;
    }
    
    removeEdge(vertex1, vertex2) {
        const index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
        const index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;
        if(~index1) {
        this.edges[vertex1].splice(index1, 1);
        this.numberOfEdges--;
        }
        if(~index2) {
        this.edges[vertex2].splice(index2, 1);
        }
    }
    
    size() {
        return this.vertices.length;
    }
    
    relations() {
        return this.numberOfEdges;
    }
    
    traverseDFS(vertex, fn) {
        if(!~this.vertices.indexOf(vertex)) {
        return console.log('Vertex not found');
        }
        const visited = [];
        this._traverseDFS(vertex, visited, fn);
    }
    
    _traverseDFS(vertex, visited, fn) {
        visited[vertex] = true;
        if(this.edges[vertex] !== undefined) {
        fn(vertex);
        }
        for(let i = 0; i < this.edges[vertex].length; i++) {
        if(!visited[this.edges[vertex][i]]) {
            this._traverseDFS(this.edges[vertex][i], visited, fn);
        }
        }
    }
    
    traverseBFS(vertex, fn) {
        if(!~this.vertices.indexOf(vertex)) {
        return console.log('Vertex not found');
        }
        const queue = [];
        queue.push(vertex);
        const visited = [];
        visited[vertex] = true;
    
        while(queue.length) {
        vertex = queue.shift();
        fn(vertex);
        for(let i = 0; i < this.edges[vertex].length; i++) {
            if(!visited[this.edges[vertex][i]]) {
            visited[this.edges[vertex][i]] = true;
            queue.push(this.edges[vertex][i]);
            }
        }
        }
    }
    
    pathFromTo(vertexSource, vertexDestination) {
        if(!~this.vertices.indexOf(vertexSource)) {
        return console.log('Vertex not found');
        }
        const queue = [];
        queue.push(vertexSource);
        const visited = [];
        visited[vertexSource] = true;
        const paths = [];
    
        while(queue.length) {
        const vertex = queue.shift();
        for(let i = 0; i < this.edges[vertex].length; i++) {
            if(!visited[this.edges[vertex][i]]) {
            visited[this.edges[vertex][i]] = true;
            queue.push(this.edges[vertex][i]);
            // save paths between vertices
            paths[this.edges[vertex][i]] = vertex;
            }
        }
        }
        if(!visited[vertexDestination]) {
        return undefined;
        }
    
        const path = [];
        for(var j = vertexDestination; j != vertexSource; j = paths[j]) {
        path.push(j);
        }
        path.push(j);
        return path.reverse().join('-');
    }
    
    print() {
        console.log(this.vertices.map(function(vertex) {
        return (vertex + ' -> ' + this.edges[vertex].join(', ')).trim();
        }, this).join(' | '));
    }
}`},
{
id: '31',
title: 'Set',
tags : ['Class', 'Data Structure'],
problem: 
`Implement a Set class with all neccessary methods`,
code:
`class Set {
    constructor() {
        this.values = [];
        this.numberOfValues = 0;
    }
    
    add(value) {
        if(!~this.values.indexOf(value)) {
        this.values.push(value);
        this.numberOfValues++;
        }
    }
    
    remove(value) {
        const index = this.values.indexOf(value);
        if(~index) {
        this.values.splice(index, 1);
        this.numberOfValues--;
        }
    }
    
    contains(value) {
        return this.values.indexOf(value) !== -1;
    }
    
    union(set) {
        const newSet = new Set();
        set.values.forEach(value => {
        newSet.add(value);
        });
        this.values.forEach(value => {
        newSet.add(value);
        });
        return newSet;
    }
    
    intersect(set) {
        const newSet = new Set();
        this.values.forEach(value => {
        if(set.contains(value)) {
            newSet.add(value);
        }
        });
        return newSet;
    }
    
    difference(set) {
        const newSet = new Set();
        this.values.forEach(value => {
        if(!set.contains(value)) {
            newSet.add(value);
        }
        });
        return newSet;
    }
    
    isSubset(set) {
        return set.values.every(function(value) {
        return this.contains(value);
        }, this);
    }
    
    length() {
        return this.numberOfValues;
    }
    
    print() {
        console.log(this.values.join(' '));
    }
}`},
{
id: '32',
title: 'Trie',
tags : ['Class', 'Data Structure', 'String'],
problem: 
`Implement a Trie class with all neccessary methods`,
code:
`function Node(data) {
    this.data = data;
    this.isWord = false;
    this.prefixes = 0;
    this.children = {};
    }
    
    class Trie {
    constructor() {
        this.root = new Node('');
    }
    
    add(word) {
        if(!this.root) {
        return null;
        }
        this._addNode(this.root, word);
    }
    
    _addNode(node, word) {
        if(!node || !word) {
        return null;
        }
        node.prefixes++;
        const letter = word.charAt(0);
        let child = node.children[letter];
        if(!child) {
        child = new Node(letter);
        node.children[letter] = child;
        }
        const remainder = word.substring(1);
        if(!remainder) {
        child.isWord = true;
        }
        this._addNode(child, remainder);
    }
    
    remove(word) {
        if(!this.root) {
        return;
        }
        if(this.contains(word)) {
        this._removeNode(this.root, word);
        }
    }
    
    _removeNode(node, word) {
        if(!node || !word) {
        return;
        }
        node.prefixes--;
        const letter = word.charAt(0);
    
        const child = node.children[letter];
        if(child) {
        const remainder = word.substring(1);
        if(remainder) {
            if(child.prefixes === 1) {
            delete node.children[letter];
            } else {
            this._removeNode(child, remainder);
            }
        } else {
            if(child.prefixes === 0) {
            delete node.children[letter];
            } else {
            child.isWord = false;
            }
        }
        }
    }
    
    contains(word) {
        if(!this.root) {
        return false;
        }
        return this._contains(this.root, word);
    }
    
    _contains(node, word) {
        if(!node || !word) {
        return false;
        }
        const letter = word.charAt(0);
        const child = node.children[letter];
        if(child) {
        const remainder = word.substring(1);
        if(!remainder && child.isWord) {
            return true;
        } else {
            return this._contains(child, remainder);
        }
        } else {
        return false;
        }
    }
    
    countWords() {
        if(!this.root) {
        return console.log('No root node found');
        }
        const queue = [this.root];
        let counter = 0;
        while(queue.length) {
        const node = queue.shift();
        if(node.isWord) {
            counter++;
        }
        for(const child in node.children) {
            if(node.children.hasOwnProperty(child)) {
            queue.push(node.children[child]);
            }
        }
        }
        return counter;
    }
    
    getWords() {
        const words = [];
        const word = '';
        this._getWords(this.root, words, word);
        return words;
    }
    
    _getWords(node, words, word) {
        for(const child in node.children) {
        if(node.children.hasOwnProperty(child)) {
            word += child;
            if (node.children[child].isWord) {
            words.push(word);
            }
            this._getWords(node.children[child], words, word);
            word = word.substring(0, word.length - 1);
        }
        }
    }
    
    print() {
        if(!this.root) {
        return console.log('No root node found');
        }
        const newline = new Node('|');
        const queue = [this.root, newline];
        let string = '';
        while(queue.length) {
        const node = queue.shift();
        string += node.data.toString();
        if(node === newline && queue.length) {
            queue.push(newline);
        }
        for(const child in node.children) {
            if(node.children.hasOwnProperty(child)) {
            queue.push(node.children[child]);
            }
        }
        }
        console.log(string.slice(0, -2).trim());
    }
    
    printByLevel() {
        if(!this.root) {
        return console.log('No root node found');
        }
        const newline = new Node('\n');
        const queue = [this.root, newline];
        let string = '';
        while(queue.length) {
        const node = queue.shift();
        string += node.data.toString() + (node.data !== '\n' ? ' ' : '');
        if(node === newline && queue.length) {
            queue.push(newline);
        }
        for(const child in node.children) {
            if(node.children.hasOwnProperty(child)) {
            queue.push(node.children[child]);
            }
        }
        }
        console.log(string.trim());
    }
}`},
{
id: '33',
title: 'Bubble Sort',
tags : ['Sort'],
problem: 
`Implement the Bubble Sort algorithm`,
code:
`// basic 
function bubbleSortBasic(array) {
    for(let i = 0; i < array.length; i++) {
        for(let j = 1; j < array.length; j++) {
        if(array[j - 1] > array[j]) {
            [array[j - 1], array[j]] = [array[j], array[j - 1]];
        }
        }
    }
    return array;
    }
    // optimized
    function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        for(let i = 0; i < array.length; i++) {
        if(array[i] && array[i + 1] && array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
            swapped = true;
        }
        }
    } while(swapped);
    return array;
}`},
{
id: '34',
title: 'Insertion Sort',
tags : ['Sort'],
problem: 
`Implement the Insertion Sort algorithm`,
code:
`function insertionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > temp) {
        array[j + 1] = array[j];
        j--;
        }
        array[j + 1] = temp;
    }
    return array;
}`},
{
id: '35',
title: 'Merge Sort',
tags : ['Sort'],
problem: 
`Implement the Merge Sort algorithm`,
code:
`// top-down implementation
function mergeSortTopDown(array) {
    if(array.length < 2) {
    return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}

function mergeTopDown(left, right) {
    const array = [];

    while(left.length && right.length) {
    if(left[0] < right[0]) {
        array.push(left.shift());
    } else {
        array.push(right.shift());
    }
    }
    return array.concat(left.slice()).concat(right.slice());
}
        
// bottom-up implementation
function mergeSortBottomUp(array) {
    let step = 1;
    while (step < array.length) {
    let left = 0;
    while (left + step < array.length) {
        mergeBottomUp(array, left, step);
        left += step * 2;
    }
    step *= 2;
    }
    return array;
}

function mergeBottomUp(array, left, step) {
    const right = left + step;
    const end = Math.min(left + step * 2 - 1, array.length - 1);
    let leftMoving = left;
    let rightMoving = right;
    const temp = [];

    for (let i = left; i <= end; i++) {
    if ((array[leftMoving] <= array[rightMoving] || rightMoving > end) &&
        leftMoving < right) {
        temp[i] = array[leftMoving];
        leftMoving++;
    } else {
        temp[i] = array[rightMoving];
        rightMoving++;
    }
    }

    for (let j = left; j <= end; j++) {
    array[j] = temp[j];
    }
}`},
{
id: '36',
title: 'Quick Sort',
tags : ['Sort'],
problem: 
`Implement the Quick Sort algorithm`,
code:
`// basic implementation (pivot is the first element of the array)
function quicksortBasic(array) {
    if(array.length < 2) {
        return array;
    }

    const pivot = array[0];
    const lesser = [];
    const greater = [];

    for(let i = 1; i < array.length; i++) {
        if(array[i] < pivot) {
            lesser.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }

    return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
}
        
// classic implementation 
function quicksort(array, left, right) {
    left = left || 0;
    right = right || array.length - 1;

    // const pivot = partitionLomuto(array, left, right); // you can play with both partition
    const pivot = partitionHoare(array, left, right); // you can play with both partition

    if(left < pivot - 1) {
        quicksort(array, left, pivot - 1);
    }
    if(right > pivot) {
        quicksort(array, pivot, right);
    }
    return array;
}
// Lomuto partition scheme, it is less efficient than the Hoare partition scheme
function partitionLomuto(array, left, right) {
    const pivot = right;
    let i = left;
    let last = left;

    for(let j = left; j < right; j++) {
        if(array[j] <= array[pivot]) {
            [array[i], array[j]] = [array[j], array[i]];
            i = i + 1;
        }
        last = j + 1;
    }
    [array[i], array[last]] = [array[last], array[i]];
    return i;
}
// Hoare partition scheme, it is more efficient than the Lomuto partition scheme 
// because it does three times fewer swaps on average
function partitionHoare(array, left, right) {
    const pivot = Math.floor((left + right) / 2 );

    while(left <= right) {
        while(array[left] < array[pivot]) {
            left++;
        }
        while(array[right] > array[pivot]) {
            right--;
        }
        if(left <= right) {
            [array[left], array[right]] = [array[right], array[left]];
            left++;
            right--;
        }
    }
    return left;
}`},
{
id: '37',
title: 'Selection Sort',
tags : ['Sort'],
problem: 
`Implement the Selection Sort algorithm`,
code:
`function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let min = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
            }
            if(i !== min) {
            [array[i], array[min]] = [array[min], array[i]];
        }
    }
    return array;
}`},
{
id: '38',
title: 'Shell Sort',
tags : ['Sort'],
problem: 
`Implement the Shell Sort algorithm`,
code:
`function shellsort(array) {
    for(let g = 0; g < gaps.length; g++) {
        const gap = gaps[g];
        for(let i = gap; i < array.length; i++) {
        const temp = array[i];
        let last = i;
        for(let j = i; j >= gap && array[j - gap] > temp; j -= gap) {
            array[j] = array[j - gap];
            last -= gap;
        }
            array[last] = temp;
        }
    }
    return array;
}`},
{
id: '39',
title: 'Breadth First Travarsal',
tags : ['Search', 'Tree', 'Queue', 'BFS'],
problem: 
`Implement the Breadth First Travarsal algorithm for a Binary Tree`,
code: 
`// converts a tree to an array in a breadth-first order
function breadthFirstTraversal (tree) {

    if (!tree) return [];  
    
        let queue = [tree]
        let result = []
    
        while (queue.length > 0) {
    
        let item = queue.shift()
        result.push(item.val)
    
        if (!item.left && !item.right) {
            continue
        }
        if (item.left) {
            queue.push(item.left)
        }
        if (item.right) {
            queue.push(item.right)
        }
    }
    return result;
}`},
{
id: '40',
title: 'Depdth First Travarsal',
tags : ['Search', 'Tree', 'Stack', 'DFS'],
problem: 
`Implement the Depdth First Travarsal algorithm for a Binary Tree`,
code: 
`// converts a tree to an array in a depth-first order
function depthFirstTraversal(tree){

    if (!tree) return [];
    
        let stack = [tree];
        let result = [];
    
        while (stack.length > 0) {
        
        let current = stack.pop();
        result.push(current.val);
    
        if (current.right) {
            stack.push(current.right);
        }
    
        if (current.left) {
            stack.push(current.left);
        }
    }
    return result;
}`},
{
id: '41',
title: 'Sorted Array to a Binary Search Tree',
tags : ['Array', 'Search', 'Tree', 'BST'],
problem: 
`Given an integer array nums where the elements 
are sorted in ascending order, convert it to a 
height-balanced binary search tree.

Example 1:
Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:
Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

Constraints:

1 <= nums.length <= 10^4
-10^4 <= nums[i] <= 10^4
nums is sorted in a strictly increasing order.
`,
code: 
`const buildTree = (nums, start, end) => {

    if (start > end) 
        return null;

    let mid = parseInt((start + end) / 2);

    let node = new TreeNode(nums[mid]);

    node.left = buildTree(nums, start, mid - 1);
    node.right = buildTree(nums, mid + 1 , end);

    return node;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST (nums) {
    return buildTree(nums, 0, nums.length - 1)  
}`},
{
id: '42',
title: 'Reverse Only Letters',
tags : ['String', 'Recursion'],
problem: 
`Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.

Example 1:
Input: s = "ab-cd"
Output: "dc-ba"

Example 2:
Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"

Example 3:
Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 
Constraints:
1 <= s.length <= 100
s consists of characters with ASCII values in the range [33, 122].
s does not contain '\"' or '\\'.
`,
code: 
`/**
* @param {string} s
* @return {string}
*/
function reverseOnlyLetters(s) {
   
   const letterRegex = /[A-Za-z]/;

   let reversed = s.split('').reverse().join('')

   let reversedOnlyLetters = ''

   for (let i = 0; i < s.length; i++) { 
       if (letterRegex.test(reversed[i])) 
           reversedOnlyLetters += reversed[i]
   }

   for (let j = 0; j < s.length; j++) { 
       if (!letterRegex.test(s[j])) 
           reversedOnlyLetters = reversedOnlyLetters.slice(0, j) + s[j] + reversedOnlyLetters.slice(j)
   }

  return reversedOnlyLetters
}`},
{
id: '43',
title: 'Reverse String II',
tags : ['String', 'Recursion'],
problem: 
`Given a string s and an integer k, reverse the first k characters 
for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. 
If there are less than 2k but greater than or equal to k characters, 
then reverse the first k characters and leave the other as original.
 
Example 1:
Input: s = "abcdefg", k = 2
Output: "bacdfeg"

Example 2:
Input: s = "abcd", k = 2
Output: "bacd"

Constraints:
1 <= s.length <= 104
s consists of only lowercase English letters.
1 <= k <= 104
`,
code: 
`/**
* @param {string} s
* @param {number} k
* @return {string}
*/
function reverseStr(s, k) {
    
   if (s.length < k) return s.split('').reverse().join('');
   if (s.length >= k && s.length < (k * 2)) 
       return s.slice(0, k).split('').reverse().join('') + s.slice(k);

   let tempStr = s.slice(0, k).split('').reverse().join('') + s.slice(k, k * 2) 
   return tempStr + reverseStr(s.slice(k * 2), k)
}`},
{
id: '44',
title: 'Diameter of Binary Tree',
tags : ['Tree', 'Recursion'],
problem: 
`Given the root of a binary tree, return the length of the diameter of the tree.

The diameter of a binary tree is the length of the longest path between any two nodes in a tree. 
This path may or may not pass through the root.

The length of a path between two nodes is represented by the number of edges between them.

Example 1:
Input: root = [1,2,3,4,5]
Output: 3
Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].

Example 2:
Input: root = [1,2]
Output: 1

Constraints:
The number of nodes in the tree is in the range [1, 104].
-100 <= Node.val <= 100

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
`,
code: 
`/**
* @param {TreeNode} root
* @return {number}
*/
function diameterOfBinaryTree(root) {
   
   let diameter = 0;

   const height = (node) => {
       if (node === null) return 0
   
       const left = height(node.left)
       const right = height(node.right)
   
       diameter = Math.max(diameter, left + right)
       return 1 + Math.max(left, right)
   }

   height(root)
   return diameter
}`},
{
id: '45',
title: 'Reverse Linked List II',
tags : ['Linked List', 'Two Pointers'],
problem: 
`Given the head of a singly linked list and two integers left and right where left <= right, 
reverse the nodes of the list from position left to position right, and return the reversed list. 

Example 1:
Input: head = [1,2,3,4,5], left = 2, right = 4
Output: [1,4,3,2,5]

Example 2:
Input: head = [5], left = 1, right = 1
Output: [5]

Constraints:
The number of nodes in the list is n.
1 <= n <= 500
-500 <= Node.val <= 500
1 <= left <= right <= n

// Follow up: Could you do it in one pass?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */`,
code: 
`/**
* @param {ListNode} head
* @param {number} left
* @param {number} right
* @return {ListNode}
*/
function reverseBetween(head, left, right) {
   if (!head || left === right) {
       return head;
   }

   let dummy = new ListNode(0);
   dummy.next = head;
   let prev = dummy;

   for (let i = 0; i < left - 1; i++) {
       prev = prev.next;
   }

   let current = prev.next;
   let nextNode = null;

   for (let i = 0; i < right - left + 1; i++) {
       let temp = current.next;
       current.next = nextNode;
       nextNode = current;
       current = temp;
   }

   prev.next.next = current;
   prev.next = nextNode;

   return dummy.next;
}`},
];