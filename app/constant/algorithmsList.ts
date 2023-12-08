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
         
            Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?`,
        code: 
        `const twoSum = (nums, target) => { 

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
            -109 <= nums[i] <= 109`,
        code: 
        `const containsDuplicate = (nums) => {

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
             
                Follow up: Can you solve the problem in O(1) extra space complexity? `,
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
            }`}
];

export const algorithmsListTree = [

    {
        id: '1',
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
        -100 <= Node.val <= 100`,
        code: 
        `const invertTree = (root) => {

            if (!root) return root;
        
            let left = root.left;
            root.left = invertTree(root.right);
            root.right = invertTree(left);
            
            return root;
        }`},
        {
        id: '2',
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
            -100 <= Node.val <= 100`,
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
        }`}
];

export const linkedList = [

    {
        id: '1',
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
            Both list1 and list2 are sorted in non-decreasing order.`,
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
        }`},
        {
        id: '2',
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
        }`}
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
          text1 and text2 consist of only lowercase English characters.`,
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
          }`},
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
            1 <= n <= 45`,
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
        }`}
];