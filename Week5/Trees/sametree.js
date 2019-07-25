/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let answer = true
    let traverse = (root1,root2)=>{
        if (root1 == null || root2 === null){answer = false;return}
        if (root1.val !== root2.val){answer = false;return}
        if (root1.left || root2.left){traverse(root1.left,root2.left)}
        if (root1.right || root2.right){traverse(root1.right,root2.right)}
    }
    if (p && q){traverse(p,q)}
    else if (p === null && q){answer = false}
    else if (q === null && p){answer = false}
    return answer
};