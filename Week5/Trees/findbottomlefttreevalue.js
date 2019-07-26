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
var findBottomLeftValue = function(root) {
    let maxSeen = 0
    let maxCurrent = 0
    let res = root.val
    let traverse = root => {
        if (root.left === null && root.right === null){
            if (maxCurrent > maxSeen){
                maxSeen = maxCurrent
                res = root.val
            }
        }
        if (root.left){
            maxCurrent++
            traverse(root.left)
            maxCurrent--
        }
        if (root.right){
            maxCurrent++
            traverse(root.right)
            maxCurrent--
        }
        
    }
    
    if (root){traverse(root)}
    return res
};