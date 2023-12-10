export const algorithmsListArray = [

    {
        id: '1',
        title: 'Two Sum',
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
        `const twoSum = (nums, target) => { 

        let map = {};

        for (let i = 0; i < nums.length; i++) {

            if (target - nums[i] in map) 
                return [map[target-nums[i]], i];
            else 
                map[nums[i]] = i;  
        }
    }
    `},
    {
        id: '2',
        title: 'Contains Duplicate',
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
        `const containsDuplicate = (nums) => {

            const numsSet =  new Set();
        
            for(const i of nums){
                
                if(numsSet.has(i))
                    return true
                
                numsSet.add(i)
            }
            return false;
        }
        `},
        {
            id: '3',
            title: 'Product Except Self',
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
            `const productExceptSelf = (nums) => {

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
            }
            `},
            {
                id: '4',
                title: 'The Sign of an Array',
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
                `function arraySign(nums) {
    
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
                `function canMakeArithmeticProgression(arr){

                    arr.sort((a, b) => { return a - b });
                
                    let diff = arr[1] - arr[0];
                
                    for (let i = 1; i < arr.length - 1; i++) {
                        if ((arr[i + 1] - arr[i]) != diff)
                            return false;
                    }
                    
                    return true;
                }
                `
            },
            {
                id: '6',
                title: 'Maximum Sub-array',
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
                `function maxSubArray(nums) {

                    let max = nums[0];
                
                    for (let i = 1; i < nums.length; i++){
                        const num = nums[i];
                        nums[i] = Math.max(num, num + nums[i - 1]);
                        max = Math.max(max, nums[i])
                    }
                    return max;
                }
                `
            },
            {
                id: '7',
                title: 'First Missing Possitive',
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
                `function firstMissingPositive(nums) {

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
                 }
                 `
            },
            {
                id: '8',
                title: 'Find Peak Element',
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
                `function findPeakElement(nums) {

                    for (let i = 1; i < nums.length - 1; i++) 
                        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) 
                            return i;
                            
                    if (nums[0] < nums[nums.length - 1]) return nums.length - 1;
                    return 0;          
                }
                `
            },
            {
                id: '9',
                title: 'Coin Change',
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
                `function coinChange(coins, amount) {

                    const dp = new Array(amount + 1).fill(Number.MAX_VALUE);
                    dp[0] = 0;
                
                    for (const coin of coins) {
                        for (let i = coin; i <= amount; i++) {
                            
                            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
                        }
                    }
                
                    return dp[amount] === Number.MAX_VALUE ? -1 : dp[amount];
                }
                `
            },
            {
                id: '10',
                title: 'Best Time to Buy and Sell Stocks',
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
                `function maxProfit(prices) {
    
                    let max = 0;
                
                   for (let i = 0; i < prices.length - 1; i++){
                       
                      let prices2 = prices.slice(i+1).sort();
                      let tempMax = prices2[0];
                
                      if (tempMax > prices[i] && tempMax - prices[i] > max) 
                      max = tempMax - prices[i];
                  
                   }
                   return max;
                }
                `
            },
];

export const algorithmsListTree = [
    {
        id: '1',
        title: 'Tree',
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
        }
        `
    },
    {
        id: '2',
        title: 'Tree Travarsal',
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
        }
        `
    },
    {
        id: '3',
        title: 'Invert Binary Tree',
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
        `const invertTree = (root) => {

            if (!root) return root;
        
            let left = root.left;
            root.left = invertTree(root.right);
            root.right = invertTree(left);
            
            return root;
        }
        `},
        {
        id: '4',
        title: 'Maximum Depth of Binary Tree',
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
        `const maxDepth = (root) => {

            let maxDepth = 0;
        
            let DFS = (node, depth) => {
    
                if (!node) return maxDepth;
                if (depth > maxDepth) maxDepth = depth;
    
                DFS(node.right, depth + 1);
                DFS(node.left, depth + 1);
            };
        
            DFS(root, 1);
        
        return maxDepth;
        }
        `
    }
];

export const linkedList = [

    {
        id: '1',
        title: 'Linked List',
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
        }
        `
    },
    {
        id: '2',
        title: 'Merge Two Linked Lists',
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
        `const mergeTwoLists = (l1, l2) => {

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
        }
        `},
        {
        id: '3',
        title: 'Reverse Linked List',
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
        `const reverseList = (head) => {
    
            let prev = null;
            
            while (head) {
                let next = head.next;
                head.next = prev;
                prev = head;
                head = next;
            }
            
            return prev;
        }
        `
    }
];

export const dynamicProgramming = [

    {
        id: '1',
        title: 'Longest Common Subsequence',
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
        `const longestCommonSubsequence = function (text1, text2) {

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
          }
          `
        },
        {
        id: '2',
        title: 'Climbing Stairs',
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
        }
        `
    }
];


export const graphList = [
    {
        id: '1',
        title: 'Graph',
        problem: 
        `Implement a Graph`,
        code: 
        ``
    }
];


export const hashTableList = [
    {
        id: '1',
        title: 'Hash Table',
        problem: 
        `Implement a Hash Table`,
        code: 
        `class HashTable {
            constructor(size = 2) {
                this.buckets = new Array(size);
                this.collisions = 0;
            }
        
            hash(key) {
        
                let hashVal = 0;
                const stringTypeKey = key + type of key; 
        
                for (let i = 0; i < stringTypeKey.length; i++) {
                    const charCode = stringTypeKey.charCodeAt(i)
                    hashVal += charCode << (i * 8);
                }
                return hashVal;
            }
        
            getIndex(key) {
                return (this.hash(key) % this.buckets.length);
            }
        
            set(key, value) {
                const index = this.getIndex(key);
        
                if (this.buckets[index]) {
                    this.buckets[index].push({key, value});
                
                if (this.buckets[index].length > 1) {this.collisions++;}
                } 
                else this.buckets[index] = [{key, value}];
                return this;
            }
        
            get(key) {
                const index = this.getIndex(key)
        
                for (let i = 0; i < this.buckets[index].length; i++) {
                    const input = this.buckets[index][i];
                    
                    if (input.key === key) 
                        return input.value;
                }
            }
        }
        `
    }
];

export const dataStructures = [
    {
        id: '1',
        title: 'Linked List',
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
        
        `
    },
    {
        id: '2',
        title: 'Stack',
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
          }
        `
    },
    {
        id: '3',
        title: 'Queue',
        problem: 
        `Implement a Queue`,
        code: 
        `// implementing a queue using a linked-list
        class Queue {
            constructor(){
            this.list = new LinkedList();
            }
        
            add(data) {
            this.list.addLast(data);
            }
        
            remove() {
            return this.list.removeFirst();
            }
        
            peek() {
            if(this.isEmpty()) { return; }
            return this.list.head.data;
            }
        
            isEmpty() {
            return !this.list.size();
            }
        
            removeBy(query) {
            return this.list.delete(query);
            }
        }
        `
    }
];