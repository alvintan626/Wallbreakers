/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    let sum = 0
    
    let traverse = root =>{
        if(root.left){
            traverse(root.left)
            if (root.left.left === null && root.left.right === null){
                sum += root.left.val
            }
        }
        if (root.right){
            traverse(root.right)
        }
    }
    if (root){traverse(root)}
    return sum
};

