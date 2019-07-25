/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {

    let answer1 = []
    let answer2 = []
    if (root1){answer1 = helper(root1)}
    if (root2){answer2 = helper(root2)}
    if (answer1.length !== answer2.length){return false}
    for (let i = 0; i < answer1.length; i++){
        if (answer1[i] !== answer2[i]){return false}
    }
    return true
};

let helper = function(root){
    let res = []
    let traverse = root => {
        if (root.left === null && root.right === null){res.push(root.val); return}
        if (root.left){
            traverse(root.left)
        }
        if (root.right){
            traverse(root.right)
        }
    }
    traverse(root)
    return res
}