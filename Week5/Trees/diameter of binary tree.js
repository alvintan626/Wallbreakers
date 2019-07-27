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
var diameterOfBinaryTree = function(root) {
    let depth = 1
    let traverse = root => {
        if (!root){return 0}
        let left = traverse(root.left)
        let right = traverse(root.right)
        depth = Math.max(depth,left + right + 1)
        return Math.max(left,right) + 1
        
    }
    traverse(root)
    return depth - 1
};