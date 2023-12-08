export const algorithmsList = [

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
