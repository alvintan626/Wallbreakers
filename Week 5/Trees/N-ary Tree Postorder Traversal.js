/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
    let res = []
    let traverse = root =>{
        
        if (root.children){
            for (let i = 0; i < root.children.length; i++){
                traverse(root.children[i])
                res.push(root.children[i].val)
            }
        }
    }
    
    if (root) {
        traverse(root)
        res.push(root.val)
    }

    return res
};