
/*

              1
            /   \  
           2     3  
          / \
         4   5  
*/

class Node{
    constructor(item){
        this.data = item;
        this.left = this.rigth = null;
    }
}

function heightNodeTree(node){
    if(node == null){
        return -1;
    } else {
        let rigthNode = heightNodeTree(node.rigth);
        let leftNode = heightNodeTree(node.left);

        if(leftNode > rigthNode) {
            return leftNode + 1;
        } else {
            return rigthNode + 1;
        }
    }
   
}

let root;
root = new Node('A');
root.left = new Node('B');
root.rigth = new Node('C');
root.left.left = new Node('D');
root.left.rigth = new Node('E');
root.rigth.rigth = new Node('F');
// root.rigth.rigth.rigth = new Node('G')

console.log(typeof root)

console.log('Height of tree is : '+ heightNodeTree(root));